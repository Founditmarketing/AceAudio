import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}) => {
  const variants = {
    primary: "bg-neon-cyan text-bg-dark hover:bg-white hover:neon-glow-cyan",
    secondary: "bg-neon-magenta text-white hover:bg-white hover:text-bg-dark hover:neon-glow-magenta",
    outline: "bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-bg-dark",
    neon: "bg-bg-card border border-neon-cyan/50 text-neon-cyan hover:border-neon-cyan hover:neon-glow-cyan"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-full font-display font-bold tracking-widest transition-all duration-300 uppercase",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
