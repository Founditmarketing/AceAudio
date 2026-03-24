import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const EqualizerBars: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    const initialBars = Array.from({ length: 35 }, () => 10);
    setBars(initialBars);

    let time = 0;
    
    const interval = setInterval(() => {
      time += 0.15; // Speed of the wave
      
      setBars(() => Array.from({ length: 35 }, (_, i) => {
        // The peak wanders left and right smoothly using overlapping sine waves
        const wander = Math.sin(time * 0.7) * 8 + Math.cos(time * 0.3) * 5;
        const peakIndex = 17 + wander;
        
        // Distance from this bar to the current moving peak
        const dist = Math.abs(i - peakIndex);
        
        // Width of the wave (variance) 
        const variance = 15; 
        
        // True Gaussian bell curve shape: e^(-x^2 / variance)
        const shape = Math.exp(-(dist * dist) / variance);
        
        // The overall volume/height pulses smoothly
        const volumeBounce = Math.sin(time * 1.5);
        const maxVol = 60 + (volumeBounce * 40); 
        
        // Tiny flutter so it feels like live audio, but minimal for smoothness
        const flutter = Math.random() * 5;
        
        return Math.max(5, Math.min(100, (shape * maxVol) + flutter));
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-end justify-center gap-[2px] sm:gap-1 overflow-hidden pointer-events-none opacity-60">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-4 sm:w-5 md:w-6 bg-gradient-to-t from-primary via-accent-2 to-secondary rounded-t-full shadow-[0_0_10px_var(--shadow-glow-primary)]"
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      ))}
    </div>
  );
};
