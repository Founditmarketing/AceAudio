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
    let currentPeak = 17; // Start at center

    const interval = setInterval(() => {
      const isPulse = pattern[step % pattern.length] === 1;
      step++;

      if (isPulse) {
        // Choose new peak heavily weighted to center
        // Averaging 3 random numbers approximates a normal/Gaussian distribution centered around 0.5
        const rand = (Math.random() + Math.random() + Math.random()) / 3; 
        currentPeak = Math.floor(rand * 34); 
      }

      setBars(() => Array.from({ length: 35 }, (_, i) => {
        // Distance from this bar to the current dynamic peak
        const distFromPeak = Math.abs(i - currentPeak);
        
        // Shape of the wave (variance controls how wide the hit is)
        const variance = 12; 
        const shape = Math.exp(-(distFromPeak * distFromPeak) / variance);
        
        let height = 0;
        if (isPulse) {
          // Sharp attack at the new location
          const maxVol = 60 + (Math.random() * 40); 
          height = (shape * maxVol) + (Math.random() * 10);
        } else {
          // Quick break: drop significantly but retain the visual shape
          const maxVol = 20 + (Math.random() * 10);
          height = Math.max(5, (shape * maxVol) + (Math.random() * 5));
        }
        
        return Math.min(100, height);
      }));
    }, 250);

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
