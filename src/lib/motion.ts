import type { Variants } from 'framer-motion';

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay } },
});

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Viewport settings shared by scroll reveals: trigger once, slightly before fully in view. */
export const revealViewport = { once: true, margin: '0px 0px -12% 0px' } as const;
