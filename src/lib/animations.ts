import type { Variants, Transition } from "framer-motion";

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Fade + rise, ideal for section entrances. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};

/** Parent container to orchestrate staggered children. */
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Shared viewport config so animations trigger once, slightly early. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
