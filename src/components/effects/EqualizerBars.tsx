import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const EqualizerBars: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    const initialBars = Array.from({ length: 35 }, () => 10);
    setBars(initialBars);

    let t = 0;
    const interval = setInterval(() => {
      t += 0.2;
      setBars(() => Array.from({ length: 35 }, (_, i) => {
        const center = 17;
        const distFromCenter = Math.abs(i - center);
        
        // Gaussian/bell-curve base height (higher in the middle)
        const baseCurve = Math.max(10, 75 - (distFromCenter * 3.5));
        
        // Unified pulse sine wave
        const unifiedPulse = Math.sin(t) * 15;
        
        // Subtle randomness
        const randomNoise = (Math.random() - 0.5) * 10;
        
        return Math.max(5, Math.min(100, baseCurve + unifiedPulse + randomNoise));
      }));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[2px] sm:gap-1 overflow-hidden pointer-events-none opacity-60">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-3 sm:w-4 md:w-5 bg-gradient-to-t from-primary via-accent-2 to-secondary rounded-t-full shadow-[0_0_10px_var(--shadow-glow-primary)]"
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.15, ease: "linear" }}
        />
      ))}
    </div>
  );
};
