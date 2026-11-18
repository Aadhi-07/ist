import { useState } from 'react';

export default function Cutout({ src, speed, rot, className = '' }) {
  const [ok, setOk] = useState(true);
  if (!src || !ok) return null;
  return (
    <img
      src={src}
      alt=''
      data-speed={speed}
      data-rot={rot}
      onError={() => setOk(false)}
      className={`absolute pointer-events-none select-none will-change-transform ${className}`}
    />
  );
}
