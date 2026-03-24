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
            <div key={i} className="flex-shrink-0 group">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 sm:h-16 w-auto object-contain filter grayscale brightness-200 opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
