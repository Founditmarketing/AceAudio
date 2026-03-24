import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent1' | 'accent2';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  const glowStyles = {
    primary: "hover:border-primary/50 hover:shadow-[0_0_30px_var(--shadow-glow-primary)]",
    secondary: "hover:border-secondary/50 hover:shadow-[0_0_30px_var(--shadow-glow-secondary)]",
    accent1: "hover:border-accent-1/50 hover:shadow-[0_0_30px_var(--shadow-glow-primary)]",
    accent2: "hover:border-accent-2/50 hover:shadow-[0_0_30px_var(--shadow-glow-secondary)]"
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "glass-card p-6 transition-all duration-500",
        hover && glowStyles[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
