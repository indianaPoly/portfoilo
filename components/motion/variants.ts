import type { Variants } from 'framer-motion';

export const staggerContainer = (stagger = 0.14, delay = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const headingReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    clipPath: 'inset(0 0 100% 0)',
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRise: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
    },
  },
};

export const cardRise: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    rotateX: -6,
    filter: 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

export const orbReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotate: -3,
    filter: 'blur(12px)',
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 18,
    },
  },
  float: {
    y: [-10, 8, -10],
    rotate: [0, 2, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pulseCard: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 16,
    },
  },
};
