export const K_DESKTOP = [
  { x: -0.03, y: -0.12, s: 1.00, lean: -6, tilt: 8 },
  { x: -0.30, y: -0.04, s: 1.00, lean: 8, tilt: 10 },
  { x: 0.22, y: -0.30, s: 1.00, lean: -10, tilt: -6 },
  { x: -0.22, y: 0.02, s: 0.96, lean: 6, tilt: 8 },
  { x: 0.02, y: -0.08, s: 0.92, lean: 0, tilt: 4 },
];

export const K_MOBILE = [
  { x: 0.02, y: -0.04, s: 0.60, lean: -4, tilt: 6 },
  { x: -0.06, y: 0.22, s: 0.56, lean: 6, tilt: 10 },
  { x: 0.05, y: -0.22, s: 0.56, lean: -8, tilt: -6 },
  { x: -0.04, y: 0.22, s: 0.52, lean: 4, tilt: 8 },
  { x: 0, y: 0.30, s: 0.45, lean: 0, tilt: 4 },
];

export function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function targetAt(p, mobile) {
  const K = mobile ? K_MOBILE : K_DESKTOP;
  const pVal = isFinite(p) ? clamp(p, 0, K.length - 1) : 0;
  const i = Math.min(K.length - 2, Math.floor(pVal));
  const f = pVal - i;

  const t = ease(clamp((f - 0.12) / 0.76, 0, 1));
  const dive = Math.sin(t * Math.PI) * -0.22;

  const x = lerp(K[i].x, K[i + 1].x, t);
  const y = lerp(K[i].y, K[i + 1].y, t) + dive;
  const s = lerp(K[i].s, K[i + 1].s, t) * (1 + Math.sin(t * Math.PI) * 0.12);
  const lean = lerp(K[i].lean, K[i + 1].lean, t);
  const tilt = lerp(K[i].tilt, K[i + 1].tilt, t);
  const moving = Math.sin(t * Math.PI);

  return { x, y, s, lean, tilt, moving };
}
