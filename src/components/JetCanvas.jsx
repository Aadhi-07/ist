import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildJetHead } from '../three/buildJetHead.js';
import { createSpray } from '../three/createSpray.js';
import { targetAt, K_DESKTOP, K_TABLET, K_MOBILE } from '../config/flight.js';

function getDeviceMode(width) {
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export default function JetCanvas({ ready, isHome = true }) {
  const ref = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let renderer;
    let scene;
    let pmrem;
    let envTexture;
    let head;
    let spray;
    let animId;

    try {
      const isMobile = window.innerWidth < 768;
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      scene = new THREE.Scene();

      pmrem = new THREE.PMREMGenerator(renderer);
      pmrem.compileEquirectangularShader();
      const envRoom = new RoomEnvironment();
      envTexture = pmrem.fromScene(envRoom, 0.04).texture;
      scene.environment = envTexture;

      const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 10);

      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        // Responsive camera framing:
        // Desktop: 30° FOV, Tablet: 32° FOV, Mobile: 34° FOV
        if (w < 768) {
          camera.fov = 34;
        } else if (w < 1024) {
          camera.fov = 32;
        } else {
          camera.fov = 30;
        }
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      };
      window.addEventListener('resize', onResize, { passive: true });
      onResize();

      const hemiLight = new THREE.HemisphereLight(0xeaf6f8, 0x2c5663, 1.3);
      scene.add(hemiLight);

      const dirLight1 = new THREE.DirectionalLight(0xfff4e0, 2.6);
      dirLight1.position.set(3, 5, 6);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x9fd6e6, 2.2);
      dirLight2.position.set(-5, 2, -4);
      scene.add(dirLight2);

      const flight = new THREE.Group();
      scene.add(flight);

      head = buildJetHead();
      const { headRoot, rotorY, rotorX, tips } = head;
      flight.add(headRoot);

      spray = createSpray();
      scene.add(spray.points);

      const clock = new THREE.Clock();

      const initialMode = getDeviceMode(window.innerWidth);
      const initialK = initialMode === 'mobile' ? K_MOBILE[0] : (initialMode === 'tablet' ? K_TABLET[0] : K_DESKTOP[0]);

      const cur = {
        x: initialK.x,
        y: initialK.y,
        s: initialK.s,
        lean: initialK.lean,
        tilt: initialK.tilt,
      };

      const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
      const onPointerMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });

      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      let reducedMotion = motionQuery.matches;
      const onMotionChange = () => {
        reducedMotion = motionQuery.matches;
      };
      motionQuery.addEventListener('change', onMotionChange);

      function animate() {
        animId = requestAnimationFrame(animate);

        const dt = Math.min(clock.getDelta(), 0.05);
        const t = clock.getElapsedTime();

        const deviceMode = getDeviceMode(window.innerWidth);
        const p = window.scrollY / Math.max(window.innerHeight, 1);
        const target = targetAt(p, deviceMode);

        const k = 1 - Math.exp(-dt * 3.2);
        const prevX = cur.x;
        const prevY = cur.y;

        cur.x += (target.x - cur.x) * k;
        cur.y += (target.y - cur.y) * k;
        cur.s += (target.s - cur.s) * k;
        cur.lean += (target.lean - cur.lean) * k;
        cur.tilt += (target.tilt - cur.tilt) * k;

        const vx = (cur.x - prevX) / Math.max(dt, 0.001);
        const vy = (cur.y - prevY) / Math.max(dt, 0.001);

        const kMouse = 1 - Math.exp(-dt * 2);
        mouse.sx += (mouse.x - mouse.sx) * kMouse;
        mouse.sy += (mouse.y - mouse.sy) * kMouse;

        const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
        const halfW = halfH * camera.aspect;
        const hover = Math.sin(t * 2.1) * 0.045 + Math.sin(t * 3.7) * 0.015;

        flight.position.set(
          cur.x * halfW + Math.sin(t * 1.3) * 0.04 + mouse.sx * 0.12,
          cur.y * halfH + hover * halfH * 0.5 + mouse.sy * 0.08,
          Math.sin(t * 0.9) * 0.15
        );

        const sc = halfH * 2 * 0.3 * cur.s;
        flight.scale.set(sc, sc, sc);

        flight.rotation.set(0, Math.sin(t * 0.6) * 0.25 + mouse.sx * 0.35, 0);

        const lean = cur.lean + Math.max(-30, Math.min(30, vx * 18)) + Math.sin(t * 1.7) * 3;
        const tilt = cur.tilt - Math.max(-28, Math.min(28, vy * 22)) + Math.sin(t * 2.1 + 1) * 3 + mouse.sy * 6;

        headRoot.rotation.set(THREE.MathUtils.degToRad(tilt), 0, THREE.MathUtils.degToRad(-lean));

        const speedMult = reducedMotion ? 0.35 : 1.0;
        rotorY.rotation.y += (1.1 + target.moving * 1.4) * dt * speedMult;
        rotorX.rotation.x += (6 + target.moving * 5) * dt * speedMult;

        scene.updateMatrixWorld(true);

        // Spray particles update
        spray.update(dt, tips, rotorX, reducedMotion);

        renderer.render(scene, camera);
      }
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('pointermove', onPointerMove);
        motionQuery.removeEventListener('change', onMotionChange);
        if (head) head.dispose();
        if (spray) spray.dispose();
        if (envTexture) envTexture.dispose();
        if (pmrem) pmrem.dispose();
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn('WebGL is not available in this environment:', err);
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return null;
  }

  return (
    <canvas
      ref={ref}
      aria-hidden='true'
      className={`fixed inset-0 z-20 w-full h-full pointer-events-none transition-opacity duration-[1000ms] ${
        ready && isHome ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}