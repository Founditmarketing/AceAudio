import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const EqualizerBars: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    const initialBars = Array.from({ length: 35 }, () => 10);
    setBars(initialBars);

    let step = 0;
    // Rhythmic pattern: pulse, break, break, pulse, pulse, break, pulse, break
    const pattern = [1, 0, 0, 1, 1, 0, 1, 0];

    const interval = setInterval(() => {
      const isPulse = pattern[step % pattern.length] === 1;
      step++;

      setBars(() => Array.from({ length: 35 }, (_, i) => {
        const center = 17;
        const distFromCenter = Math.abs(i - center);
        
        // Base Gaussian curve keeps the middle looking higher, widened spread
        const baseCurve = Math.max(10, 80 - (distFromCenter * 2.5));
        
        let height = 0;
        if (isPulse) {
          // Sharp attack: use full curve plus random jump
          height = baseCurve + (Math.random() * 20);
        } else {
          // Quick break: drop significantly but retain shape
          height = Math.max(5, baseCurve * 0.25 + (Math.random() * 5));
        }
        
        return Math.min(100, height);
      }));
    }, 130);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[2px] sm:gap-1 overflow-hidden pointer-events-none opacity-60">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-4 sm:w-5 md:w-6 bg-gradient-to-t from-primary via-accent-2 to-secondary rounded-t-full shadow-[0_0_10px_var(--shadow-glow-primary)]"
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};
