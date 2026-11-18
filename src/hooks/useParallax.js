import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const run = () =>
      document.querySelectorAll('[data-speed]').forEach((el) => {
        const sec = el.closest('section');
        if (!sec) return;
        const p = -sec.getBoundingClientRect().top / innerHeight;
        el.style.transform = `translate3d(0,${p * el.dataset.speed * innerHeight}px,0) rotate(${p * (el.dataset.rot || 0)}deg)`;
      });
    run();
    addEventListener('scroll', run, { passive: true });
    return () => removeEventListener('scroll', run);
  }, []);
}
