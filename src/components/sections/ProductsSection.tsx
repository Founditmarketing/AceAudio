import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { PRODUCT_SECTIONS, BRANDS_DATA } from '@/src/constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-bg-main relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-4"
          >
            OUR <span className="text-accent-1">PRODUCTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Premium car audio and accessories from the brands you trust. 
            Expert installation for every vehicle.
          </motion.p>
        </div>

        {/* Infinite Product Marquee */}
        <div className="relative w-full overflow-hidden mt-12 py-8 group">
          {/* Fading Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-bg-main to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bg-main to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: [0, "-33.3333%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {(() => {
              const subs: { name: string, description: string, image?: string, brandName: string }[] = [];
              BRANDS_DATA.forEach(brand => {
                if (brand.subcategories) {
                  brand.subcategories.forEach(sub => subs.push({ ...sub, brandName: brand.name }));
                }
              });
              // Triple the list to ensure seamless infinite scrolling loop
              const tripleList = [...subs, ...subs, ...subs];

              return tripleList.map((sub, index) => (
                <Link 
                  key={`${sub.name}-${index}`} 
                  to={`/products?filter=all#${sub.brandName.replace(/\s+/g, '-')}`}
                  className="w-72 flex-shrink-0 group/card block"
                >
                  <Card className="h-full flex flex-col bg-bg-panel/20 border-white/5 hover:border-primary/50 shadow-xl overflow-hidden transition-all duration-300 transform group-hover/card:scale-105 group-hover/card:-translate-y-2">
                    <div className="h-40 overflow-hidden relative">
                       {sub.image ? (
                         <img 
                           src={sub.image} 
                           alt={sub.name} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                           referrerPolicy="no-referrer"
                         />
                       ) : (
                         <div className="w-full h-full bg-white/5 flex items-center justify-center">
                           <span className="text-white/20 font-bold uppercase tracking-widest text-xs">No Image</span>
                         </div>
                       )}
                       <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-primary border border-primary/20 uppercase tracking-widest">
                         {sub.brandName}
                       </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold mb-2 text-white group-hover/card:text-primary transition-colors line-clamp-1">{sub.name}</h4>
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">{sub.description}</p>
                      <span className="mt-auto font-display text-[10px] tracking-widest font-bold uppercase text-primary/70 group-hover/card:text-primary transition-colors flex items-center gap-1">
                        View Product <Icons.ArrowRight size={10} />
                      </span>
                    </div>
                  </Card>
                </Link>
              ));
            })()}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
