import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'magenta' | 'purple' | 'blue';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  glowColor = 'cyan',
  hover = true
}) => {
  const glowStyles = {
    cyan: "hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]",
    magenta: "hover:border-neon-magenta/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]",
    purple: "hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    blue: "hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
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
