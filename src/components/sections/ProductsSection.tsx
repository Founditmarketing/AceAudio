import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { PRODUCT_SECTIONS } from '@/src/constants';
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

        {/* Product Categories Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {PRODUCT_SECTIONS.map((section, index) => {
            const IconComponent = (Icons as any)[section.icon];

            return (
              <motion.div
                key={section.id}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products/${section.id}`}>
                  <Card 
                    className="h-full flex flex-col items-center text-center p-10 group cursor-pointer"
                    glowColor="primary"
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
                      "bg-gradient-to-br from-primary/20 to-secondary/10 text-secondary"
                    )}>
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h3 className={cn("text-2xl font-bold mb-4 transition-colors", "group-hover:text-primary")}>{section.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8">
                      {section.description}
                    </p>
                    <span 
                      className={cn(
                        "mt-auto font-display text-xs tracking-widest font-bold uppercase transition-colors group-hover:text-white",
                        "text-primary"
                      )}
                    >
                      Explore Brands →
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
