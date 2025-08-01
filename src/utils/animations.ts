import { Variants, Transition } from 'framer-motion';

// Animation duration presets
export const DURATIONS = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.0,
  verySlow: 1.5,
} as const;

// Easing presets
export const EASINGS = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
} as const;

// Spring presets
export const SPRINGS = {
  gentle: { type: 'spring', stiffness: 120, damping: 14 },
  wobbly: { type: 'spring', stiffness: 180, damping: 12 },
  stiff: { type: 'spring', stiffness: 400, damping: 17 },
  slow: { type: 'spring', stiffness: 200, damping: 20 },
} as const;

// Create fade animation variants
export const createFadeVariants = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  distance: number = 30
): Variants => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return {};
    }
  };

  return {
    hidden: {
      opacity: 0,
      ...getInitialTransform(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        ease: EASINGS.smooth,
      },
    },
  };
};

// Create scale animation variants
export const createScaleVariants = (
  initialScale: number = 0.8,
  finalScale: number = 1
): Variants => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: finalScale,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth,
    },
  },
});

// Create slide animation variants
export const createSlideVariants = (
  direction: 'left' | 'right' | 'up' | 'down',
  distance: string = '100%'
): Variants => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'left': return { x: `-${distance}` };
      case 'right': return { x: distance };
      case 'up': return { y: `-${distance}` };
      case 'down': return { y: distance };
    }
  };

  return {
    hidden: {
      ...getInitialTransform(),
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: DURATIONS.normal,
        ease: EASINGS.smooth,
      },
    },
  };
};

// Create stagger container variants
export const createStaggerVariants = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0.1
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// Create hover animation
export const createHoverAnimation = (
  type: 'scale' | 'lift' | 'glow' | 'rotate' = 'scale',
  intensity: number = 1
) => {
  switch (type) {
    case 'scale':
      return {
        scale: 1 + (0.05 * intensity),
        transition: SPRINGS.stiff,
      };
    case 'lift':
      return {
        y: -5 * intensity,
        transition: SPRINGS.stiff,
      };
    case 'glow':
      return {
        boxShadow: `0 0 ${20 * intensity}px rgba(59, 130, 246, ${0.4 * intensity})`,
        transition: { duration: DURATIONS.fast },
      };
    case 'rotate':
      return {
        rotate: 5 * intensity,
        transition: SPRINGS.stiff,
      };
    default:
      return {};
  }
};

// Create tap animation
export const createTapAnimation = (scale: number = 0.95) => ({
  scale,
  transition: SPRINGS.stiff,
});

// Loading animation variants
export const loadingVariants: Variants = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  bounce: {
    y: [0, -20, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASINGS.smooth,
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.smooth,
    },
  },
};

// Utility function to create custom transition
export const createTransition = (
  duration: number = DURATIONS.normal,
  ease: readonly number[] = EASINGS.smooth,
  delay: number = 0
): Transition => ({
  duration,
  ease,
  delay,
});

// Utility function to create spring transition
export const createSpringTransition = (
  stiffness: number = 300,
  damping: number = 20,
  delay: number = 0
): Transition => ({
  type: 'spring',
  stiffness,
  damping,
  delay,
});

// Parallax animation utility
export const createParallaxVariants = (
  yRange: [number, number] = [-50, 50]
): Variants => ({
  initial: { y: yRange[0] },
  animate: { y: yRange[1] },
});

// Text reveal animation for individual characters
export const createTextRevealVariants = (): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: EASINGS.smooth,
    },
  },
});

// Card animation presets
export const cardVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: SPRINGS.gentle,
  },
  tap: {
    scale: 0.98,
    transition: SPRINGS.stiff,
  },
};

// Button animation presets
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: SPRINGS.stiff,
  },
  tap: {
    scale: 0.95,
    transition: SPRINGS.stiff,
  },
};