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
    primary: "bg-gradient-to-r from-primary to-accent-1 text-white hover:shadow-[0_0_20px_var(--shadow-glow-primary)] border border-primary/20",
    secondary: "bg-gradient-to-r from-secondary to-accent-2 text-white hover:shadow-[0_0_20px_var(--shadow-glow-secondary)] border border-secondary/20",
    outline: "bg-transparent border-2 border-accent-3 text-accent-3 hover:bg-accent-3 hover:text-white hover:shadow-[0_0_15px_var(--shadow-glow-primary)]",
    neon: "bg-bg-panel border border-accent-2 text-accent-2 hover:border-primary hover:shadow-[0_0_15px_var(--shadow-glow-primary)]"
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
