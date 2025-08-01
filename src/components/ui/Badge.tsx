import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  text: string;
  variant?: 'tech' | 'category' | 'status';
  icon?: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'tech',
  icon,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200';
  
  const variantClasses = {
    tech: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20 hover:bg-accent-primary/20',
    category: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20 hover:bg-accent-secondary/20',
    status: 'bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17,
        duration: 0.3 
      }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {text}
    </motion.span>
  );
};

export default Badge;