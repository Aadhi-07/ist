export const K_DESKTOP = [
  // 0: Hero — Centered with ample clearance below heading and above side CTA
  { x: 0.0, y: -0.14, s: 0.95, lean: -4, tilt: 6 },
  // 1: Section 01 (About / Pipes) — In the center corridor between unclipped pipes on left and text on right
  { x: -0.06, y: -0.06, s: 0.85, lean: 12, tilt: 8 },
  // 2: Section 02 (Backed by Dyna-Jet / Tank) — In center-right corridor, spraying toward tank
  { x: 0.16, y: -0.20, s: 0.86, lean: -8, tilt: -4 },
  // 3: Section 03 (Incorporated in 1997 / Propeller) — Center-left corridor between propeller and text chips
  { x: -0.06, y: 0.02, s: 0.85, lean: 6, tilt: 6 },
  // 4: Section 04 (Footer) — Centered and unobtrusive
  { x: 0.0, y: -0.10, s: 0.80, lean: 0, tilt: 4 },
];

export const K_TABLET = [
  // 0: Hero
  { x: 0.0, y: -0.10, s: 0.72, lean: -3, tilt: 5 },
  // 1: Section 01 — Ample breathing room between pipes and text
  { x: -0.02, y: -0.05, s: 0.68, lean: 10, tilt: 8 },
  // 2: Section 02
  { x: 0.10, y: -0.16, s: 0.68, lean: -7, tilt: -4 },
  // 3: Section 03
  { x: -0.02, y: 0.02, s: 0.68, lean: 5, tilt: 6 },
  // 4: Section 04
  { x: 0.0, y: -0.08, s: 0.65, lean: 0, tilt: 4 },
];

export const K_MOBILE = [
  // 0: Hero
  { x: 0.0, y: -0.05, s: 0.52, lean: -2, tilt: 5 },
  // 1: Section 01 — Positioned in upper half above bottom text card
  { x: 0.0, y: 0.16, s: 0.50, lean: 6, tilt: 8 },
  // 2: Section 02 — Positioned in upper half above bottom text card
  { x: 0.0, y: -0.16, s: 0.50, lean: -6, tilt: -4 },
  // 3: Section 03 — Positioned in upper half above bottom text card
  { x: 0.0, y: 0.16, s: 0.48, lean: 4, tilt: 6 },
  // 4: Section 04
  { x: 0.0, y: 0.18, s: 0.44, lean: 0, tilt: 4 },
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

export function targetAt(p, deviceMode = 'desktop') {
  let K = K_DESKTOP;
  if (deviceMode === 'mobile' || deviceMode === true) {
    K = K_MOBILE;
  } else if (deviceMode === 'tablet') {
    K = K_TABLET;
  }

  const pVal = isFinite(p) ? clamp(p, 0, K.length - 1) : 0;
  const i = Math.min(K.length - 2, Math.floor(pVal));
  const f = pVal - i;

  const t = ease(clamp((f - 0.12) / 0.76, 0, 1));
  const dive = Math.sin(t * Math.PI) * -0.16;

  const x = lerp(K[i].x, K[i + 1].x, t);
  const y = lerp(K[i].y, K[i + 1].y, t) + dive;
  const s = lerp(K[i].s, K[i + 1].s, t) * (1 + Math.sin(t * Math.PI) * 0.08);
  const lean = lerp(K[i].lean, K[i + 1].lean, t);
  const tilt = lerp(K[i].tilt, K[i + 1].tilt, t);
  const moving = Math.sin(t * Math.PI);

  return { x, y, s, lean, tilt, moving };
}
