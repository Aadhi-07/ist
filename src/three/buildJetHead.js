import * as THREE from 'three';

export function buildJetHead() {
  const geometries = [];
  const materials = [];

  const matSteel = new THREE.MeshStandardMaterial({
    color: 0xaebfc5,
    metalness: 1,
    roughness: 0.22,
    envMapIntensity: 1.1,
  });
  materials.push(matSteel);

  const matTeal = new THREE.MeshStandardMaterial({
    color: 0x397493,
    metalness: 0.55,
    roughness: 0.35,
  });
  materials.push(matTeal);

  const matDark = new THREE.MeshStandardMaterial({
    color: 0x1a2a30,
    metalness: 0.8,
    roughness: 0.4,
  });
  materials.push(matDark);

  const matBrass = new THREE.MeshStandardMaterial({
    color: 0xd2a65a,
    metalness: 1,
    roughness: 0.3,
  });
  materials.push(matBrass);

  const headRoot = new THREE.Group();

  // Hose inlet: CylinderGeometry(.06,.06,.24,32), steel, y = .38. Teal ring TorusGeometry(.068,.02,16,48) rotated X 90°, y = .3.
  const inletGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.24, 32);
  geometries.push(inletGeo);
  const inlet = new THREE.Mesh(inletGeo, matSteel);
  inlet.position.y = 0.38;
  headRoot.add(inlet);

  const ringGeo = new THREE.TorusGeometry(0.068, 0.02, 16, 48);
  ringGeo.rotateX(Math.PI / 2);
  geometries.push(ringGeo);
  const ring = new THREE.Mesh(ringGeo, matTeal);
  ring.position.y = 0.3;
  headRoot.add(ring);

  // Housing: CylinderGeometry(.17,.21,.36,64), steel, y = .1. Teal collar TorusGeometry(.2,.03,24,64) rotated X 90°, y = -.09.
  const housingGeo = new THREE.CylinderGeometry(0.17, 0.21, 0.36, 64);
  geometries.push(housingGeo);
  const housing = new THREE.Mesh(housingGeo, matSteel);
  housing.position.y = 0.1;
  headRoot.add(housing);

  const collarGeo = new THREE.TorusGeometry(0.2, 0.03, 24, 64);
  collarGeo.rotateX(Math.PI / 2);
  geometries.push(collarGeo);
  const collar = new THREE.Mesh(collarGeo, matTeal);
  collar.position.y = -0.09;
  headRoot.add(collar);

  // rotorY group at y = -.22. Hub: SphereGeometry(.15,48,32), steel.
  const rotorY = new THREE.Group();
  rotorY.position.y = -0.22;
  headRoot.add(rotorY);

  const hubGeo = new THREE.SphereGeometry(0.15, 48, 32);
  geometries.push(hubGeo);
  const hub = new THREE.Mesh(hubGeo, matSteel);
  rotorY.add(hub);

  // rotorX group (child of rotorY): axle CylinderGeometry(.035,.035,.34,24) rotated Z 90° (dark).
  const rotorX = new THREE.Group();
  rotorY.add(rotorX);

  const axleGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.34, 24);
  axleGeo.rotateZ(Math.PI / 2);
  geometries.push(axleGeo);
  const axle = new THREE.Mesh(axleGeo, matDark);
  rotorX.add(axle);

  // Two nozzles, one at +Z and one at -Z
  // Base CylinderGeometry(.06,.06,.1,24) (dark) at z = ±.15
  // Tip CylinderGeometry(.03,.055,.16,24) (brass) at z = ±.25
  // geometries rotated X by +90° for the +Z nozzle and -90° for the -Z nozzle so narrow end points outward
  // Add empty Object3D tip at z = ±.34
  const baseGeoPos = new THREE.CylinderGeometry(0.06, 0.06, 0.1, 24);
  baseGeoPos.rotateX(Math.PI / 2);
  geometries.push(baseGeoPos);
  const basePos = new THREE.Mesh(baseGeoPos, matDark);
  basePos.position.set(0, 0, 0.15);
  rotorX.add(basePos);

  const tipGeoPos = new THREE.CylinderGeometry(0.03, 0.055, 0.16, 24);
  tipGeoPos.rotateX(Math.PI / 2);
  geometries.push(tipGeoPos);
  const tipPos = new THREE.Mesh(tipGeoPos, matBrass);
  tipPos.position.set(0, 0, 0.25);
  rotorX.add(tipPos);

  const sprayTipPos = new THREE.Object3D();
  sprayTipPos.position.set(0, 0, 0.34);
  sprayTipPos.userData = { signZ: 1 };
  rotorX.add(sprayTipPos);

  const baseGeoNeg = new THREE.CylinderGeometry(0.06, 0.06, 0.1, 24);
  baseGeoNeg.rotateX(-Math.PI / 2);
  geometries.push(baseGeoNeg);
  const baseNeg = new THREE.Mesh(baseGeoNeg, matDark);
  baseNeg.position.set(0, 0, -0.15);
  rotorX.add(baseNeg);

  const tipGeoNeg = new THREE.CylinderGeometry(0.03, 0.055, 0.16, 24);
  tipGeoNeg.rotateX(-Math.PI / 2);
  geometries.push(tipGeoNeg);
  const tipNeg = new THREE.Mesh(tipGeoNeg, matBrass);
  tipNeg.position.set(0, 0, -0.25);
  rotorX.add(tipNeg);

  const sprayTipNeg = new THREE.Object3D();
  sprayTipNeg.position.set(0, 0, -0.34);
  sprayTipNeg.userData = { signZ: -1 };
  rotorX.add(sprayTipNeg);

  const tips = [sprayTipPos, sprayTipNeg];

  const dispose = () => {
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
  };

  return { headRoot, rotorY, rotorX, tips, dispose };
}
