import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollReveal(staggerMs = 90) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal-hidden, .reveal-left, .reveal-right');
    const sectionClips = container.querySelectorAll('.section-clip');

    const clipObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-clip-visible');
            clipObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    sectionClips.forEach((el) => clipObserver.observe(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const parent = el.parentElement;
          if (!parent) return;

          const revealSiblings = Array.from(
            parent.querySelectorAll(':scope > .reveal-hidden, :scope > .reveal-left, :scope > .reveal-right, :scope > .reveal-visible')
          );
          const index = revealSiblings.indexOf(el);
          const delay = Math.max(0, index) * staggerMs;

          setTimeout(() => {
            el.classList.remove('reveal-hidden', 'reveal-left', 'reveal-right');
            el.classList.add('reveal-visible');
          }, delay);

          observer.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      clipObserver.disconnect();
    };
  }, [staggerMs]);

  return containerRef;
}

export function useCountUp(end: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  const trigger = useCallback(() => setStarted(true), []);

  return { value, ref, trigger, started };
}
