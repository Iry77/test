import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp, revealViewport, stagger } from '@/lib/motion';

type RevealProps = HTMLMotionProps<'div'> & {
  /** Stagger direct `RevealItem` children instead of animating as one block. */
  group?: boolean;
  delay?: number;
};

/**
 * Scroll-triggered fade/slide-up. With `<MotionConfig reducedMotion="user">` at the root,
 * transforms are dropped for users who prefer reduced motion and only opacity remains.
 */
export function Reveal({ group = false, delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={group ? stagger(0.08, delay) : fadeUp(delay)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = fadeUp();

export function RevealItem({ children, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}
