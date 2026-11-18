import * as THREE from 'three';

function makeSpriteTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.7)');
  grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.2)');
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}

export function createSpray() {
  const spriteTexture = makeSpriteTexture();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 760;
  const PARTICLE_COUNT = isMobile ? 320 : 700;

  const geometry = new THREE.BufferGeometry();
  const posArray = new Float32Array(PARTICLE_COUNT * 3);
  const colArray = new Float32Array(PARTICLE_COUNT * 4);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    posArray[i * 3 + 0] = 0;
    posArray[i * 3 + 1] = -999;
    posArray[i * 3 + 2] = 0;

    colArray[i * 4 + 0] = 0.36;
    colArray[i * 4 + 1] = 0.68;
    colArray[i * 4 + 2] = 0.82;
    colArray[i * 4 + 3] = 0;
  }

  const posAttr = new THREE.BufferAttribute(posArray, 3);
  const colAttr = new THREE.BufferAttribute(colArray, 4);
  geometry.setAttribute('position', posAttr);
  geometry.setAttribute('color', colAttr);

  const material = new THREE.PointsMaterial({
    size: 0.14,
    sizeAttenuation: true,
    map: spriteTexture,
    transparent: true,
    depthWrite: false,
    vertexColors: true,
    blending: THREE.NormalBlending,
  });

  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      '#include <color_vertex>',
      `#include <color_vertex>
       #ifdef USE_COLOR
         vColor = color;
       #endif`
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
       #ifdef USE_COLOR
         diffuseColor.a *= vColor.a;
       #endif`
    );
  };

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;

  const particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      alive: false,
      x: 0,
      y: -999,
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      age: 0,
      life: 1,
    });
  }

  let cursor = 0;
  const tipPosWorld = new THREE.Vector3();
  const tipDirWorld = new THREE.Vector3();

  function spawnForTip(tipObj, dt, rotorX) {
    tipObj.getWorldPosition(tipPosWorld);
    const signZ = tipObj.userData?.signZ || (tipObj.position.z >= 0 ? 1 : -1);
    tipDirWorld.set(0, 0, signZ).transformDirection(rotorX.matrixWorld);

    const count = Math.round(3 * dt * 60);
    for (let c = 0; c < count; c++) {
      const p = particles[cursor];
      cursor = (cursor + 1) % PARTICLE_COUNT;

      const jx = (Math.random() - 0.5) * 0.03;
      const jy = (Math.random() - 0.5) * 0.03;
      const jz = (Math.random() - 0.5) * 0.03;

      p.alive = true;
      p.x = tipPosWorld.x + jx;
      p.y = tipPosWorld.y + jy;
      p.z = tipPosWorld.z + jz;

      const speed = 3.4 + Math.random() * 0.6;
      const sx = (Math.random() * 2 - 1) * 0.18;
      const sy = (Math.random() * 2 - 1) * 0.18;
      const sz = (Math.random() * 2 - 1) * 0.18;

      p.vx = tipDirWorld.x * speed + sx;
      p.vy = tipDirWorld.y * speed + sy;
      p.vz = tipDirWorld.z * speed + sz;

      p.age = 0;
      p.life = 0.75 + Math.random() * 0.35;
    }
  }

  function update(dt, tips, rotorX, reduced) {
    if (reduced) {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        if (p.alive) {
          p.alive = false;
          posArray[i * 3 + 1] = -999;
          colArray[i * 4 + 3] = 0;
        }
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
      return;
    }

    if (tips && rotorX) {
      for (const tip of tips) {
        spawnForTip(tip, dt, rotorX);
      }
    }

    const velDrag = Math.max(0, 1 - 0.6 * dt);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particles[i];
      if (!p.alive) continue;

      p.age += dt;
      if (p.age >= p.life) {
        p.alive = false;
        p.y = -999;
        posArray[i * 3 + 0] = 0;
        posArray[i * 3 + 1] = -999;
        posArray[i * 3 + 2] = 0;
        colArray[i * 4 + 3] = 0;
      } else {
        p.vy -= 2.4 * dt;
        p.vx *= velDrag;
        p.vy *= velDrag;
        p.vz *= velDrag;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;

        const ratio = p.age / p.life;
        const alpha = 0.75 * Math.pow(Math.max(0, 1 - ratio), 1.4);

        posArray[i * 3 + 0] = p.x;
        posArray[i * 3 + 1] = p.y;
        posArray[i * 3 + 2] = p.z;

        colArray[i * 4 + 0] = 0.36;
        colArray[i * 4 + 1] = 0.68;
        colArray[i * 4 + 2] = 0.82;
        colArray[i * 4 + 3] = alpha;
      }
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  }

  function dispose() {
    spriteTexture.dispose();
    geometry.dispose();
    material.dispose();
  }

  return { points, update, dispose };
}
