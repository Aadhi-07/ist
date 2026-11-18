import { useState, useEffect } from 'react';

export function useNavTheme() {
  const [onDark, setOnDark] = useState(false);
  useEffect(() => {
    const run = () => {
      const y = innerHeight * 0.06;
      const cur = [...document.querySelectorAll('main > section')].find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= y && r.bottom > y;
      });
      setOnDark(cur?.dataset.theme === 'dark');
    };
    run();
    addEventListener('scroll', run, { passive: true });
    return () => removeEventListener('scroll', run);
  }, []);
  return onDark;
}
