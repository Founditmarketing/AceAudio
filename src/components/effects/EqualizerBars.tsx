import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const EqualizerBars: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    const initialBars = Array.from({ length: 40 }, () => Math.random() * 100);
    setBars(initialBars);

    const interval = setInterval(() => {
      setBars(prev => prev.map(h => {
        const delta = (Math.random() - 0.5) * 20;
        return Math.max(10, Math.min(100, h + delta));
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1 overflow-hidden pointer-events-none opacity-30">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-2 sm:w-3 md:w-4 bg-gradient-to-t from-primary via-secondary to-accent-1 rounded-t-full"
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};
