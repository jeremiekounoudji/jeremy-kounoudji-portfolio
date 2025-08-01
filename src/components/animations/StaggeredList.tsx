import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  distance?: number;
  threshold?: number;
}

const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  distance = 30,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getVariants = () => {
    const initial = (() => {
      switch (direction) {
        case 'up':
          return { opacity: 0, y: distance };
        case 'down':
          return { opacity: 0, y: -distance };
        case 'left':
          return { opacity: 0, x: distance };
        case 'right':
          return { opacity: 0, x: -distance };
        case 'scale':
          return { opacity: 0, scale: 0.8 };
        default:
          return { opacity: 0, y: distance };
      }
    })();

    const animate = (() => {
      switch (direction) {
        case 'up':
        case 'down':
          return { opacity: 1, y: 0 };
        case 'left':
        case 'right':
          return { opacity: 1, x: 0 };
        case 'scale':
          return { opacity: 1, scale: 1 };
        default:
          return { opacity: 1, y: 0 };
      }
    })();

    return {
      hidden: initial,
      visible: animate,
    };
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = getVariants();

  return (
    <motion.div
      ref={elementRef  as React.RefObject<HTMLDivElement>}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredList;