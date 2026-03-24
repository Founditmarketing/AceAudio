import React from 'react';
import { motion } from 'motion/react';
import { BRANDS_DATA } from '@/src/constants';

export const BrandsCarousel: React.FC = () => {
  // Duplicate brands for seamless loop
  const brands = [...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section className="py-20 bg-bg-main/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h3 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">WORLD-CLASS BRANDS WE TRUST</h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-12 sm:gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 group bg-white/90 hover:bg-white rounded-2xl px-8 py-4 flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_20px_var(--shadow-glow-primary)] border border-transparent hover:border-primary/30"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-10 sm:h-14 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
