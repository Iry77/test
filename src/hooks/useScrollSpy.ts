import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently crossing the middle band of the viewport.
 * Uses IntersectionObserver (no scroll listeners) and falls back to the last section at page bottom.
 */
export function useScrollSpy<T extends string>(ids: readonly T[]): T {
  const [active, setActive] = useState<T>(ids[0] as T);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        // The highest section in the active band wins.
        const next = ids.find((id) => visible.has(id));
        if (next) setActive(next);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const last = ids[ids.length - 1];
      if (atBottom && last) setActive(last);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ids]);

  return active;
}
