export const DEVELOPER_INFO = {
  name: 'Kounoudji Jeremie',
  title: 'Full-Stack Developer',
  experience: '5+ Years Experience',
  email: 'kounoudji.jeremie@example.com', // Update with actual email
  location: 'Cameroon',
  company: 'Bandesoft Ltd',
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/kounoudji-jeremie', // Update with actual links
  linkedin: 'https://linkedin.com/in/kounoudji-jeremie',
  twitter: 'https://twitter.com/kounoudji_jeremie',
  email: 'mailto:kounoudji.jeremie@example.com',
};

export const ANIMATION_VARIANTS = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] }
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] }
    },
  },
  scaleInSpring: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
  },

  // Slide animations
  slideInLeft: {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },
  slideInRight: {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] }
    },
  },
  slideInUp: {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]}
    },
  },
  slideInDown: {
    hidden: { y: '-100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]as [number, number, number, number] }
    },
  },

  // Stagger containers
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
  staggerContainerFast: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  },
  staggerContainerSlow: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  },

  // Hover animations
  hoverScale: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  },
  hoverLift: {
    y: -5,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  },
  hoverGlow: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.3 }
  },

  // Tap animations
  tapScale: {
    scale: 0.95,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  },

  // Page transitions
  pageTransition: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  },

  // Loading animations
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },
  bounce: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },
  rotate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  },

  // Text animations
  textReveal: {
    hidden: { 
      opacity: 0,
      y: 20,
      skewY: 5
    },
    visible: { 
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  },

  // Card animations
  cardHover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  cardTap: {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  },
};

export const TRANSITION_PRESETS = {
  smooth: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  spring: { type: 'spring', stiffness: 300, damping: 20 },
  springFast: { type: 'spring', stiffness: 400, damping: 17 },
  springBouncy: { type: 'spring', stiffness: 200, damping: 10 },
  easeOut: { duration: 0.4, ease: [0, 0, 0.2, 1] },
  easeIn: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  easeInOut: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};