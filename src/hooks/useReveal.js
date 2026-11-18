import { useRef, useState, useEffect } from 'react';

export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If IntersectionObserver is not supported, reveal immediately
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '50px 0px 0px 0px',
      }
    );

    if (ref.current) {
      io.observe(ref.current);
    }

    return () => io.disconnect();
  }, []);

  return [ref, inView];
}
