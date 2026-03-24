import React from 'react';
import { Hero } from '@/src/components/sections/Hero';
import { BrandsCarousel } from '@/src/components/sections/BrandsCarousel';
import { ProductsSection } from '@/src/components/sections/ProductsSection';
import { WhyChooseUs } from '@/src/components/sections/WhyChooseUs';
import { ContactCTA } from '@/src/components/sections/ContactCTA';
import { motion } from 'motion/react';
import { REVIEWS_DATA } from '@/src/constants';
import { Card } from '@/src/components/ui/Card';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Quick Contact Bar */}
      <div className="bg-gradient-to-r from-primary via-accent-1 to-accent-3 py-4 relative z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-bg-main font-display font-bold text-sm tracking-widest">
          <a href="tel:3184452406" className="flex items-center gap-2 hover:scale-105 transition-transform">
            CALL US: (318) 445-2406
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a href="mailto:Ace_audioinc@yahoo.com" className="flex items-center gap-2 hover:scale-105 transition-transform">
            EMAIL: ACE_AUDIOINC@YAHOO.COM
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="flex items-center gap-2">
            ALEXANDRIA, LA
          </span>
        </div>
      </div>

      <BrandsCarousel />
      <ProductsSection />
      <WhyChooseUs />

      {/* Reviews Preview */}
      <section className="py-24 bg-bg-main/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4 uppercase">WHAT OUR <span className="text-secondary">CUSTOMERS</span> SAY</h2>
              <p className="text-white/60">Real feedback from real people in Central Louisiana.</p>
            </div>
            <Link to="/reviews">
              <Button variant="neon">View All Reviews</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS_DATA.slice(0, 3).map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full relative pt-12">
                  <Quote className="absolute top-6 left-6 text-accent-2/20 w-12 h-12" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-display font-bold text-accent-1">{review.name}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Verified Customer</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
