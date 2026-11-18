import { useState, useEffect } from 'react';

export function useLoader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t0 = Date.now();
    const done = () => setLoaded(true);
    const fallback = setTimeout(done, 2500);
    let t;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          t = setTimeout(done, Math.max(0, 900 - (Date.now() - t0)));
        })
        .catch(() => {
          t = setTimeout(done, 900);
        });
    } else {
      t = setTimeout(done, 900);
    }
    return () => {
      clearTimeout(fallback);
      clearTimeout(t);
    };
  }, []);
  return loaded;
}
