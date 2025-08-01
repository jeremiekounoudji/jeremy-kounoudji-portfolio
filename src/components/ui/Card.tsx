import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
}) => {
  const baseClasses = 'rounded-xl border border-border transition-all duration-300';
  
  const backgroundClasses = gradient
    ? 'bg-gradient-to-br from-bg-secondary to-bg-tertiary'
    : 'bg-bg-secondary';
  
  const hoverClasses = hover
    ? 'hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10'
    : '';
  
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${backgroundClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        duration: 0.5 
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;