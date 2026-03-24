import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { REVIEWS_DATA } from '@/src/constants';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export const Reviews: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neon-cyan/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6"
          >
            CUSTOMER <span className="text-neon-cyan">REVIEWS</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-neon-cyan text-neon-cyan" />
              ))}
            </div>
            <p className="text-xl text-white/60">
              4.9/5 Stars based on 69+ Google Reviews
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS_DATA.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full relative pt-12 border-white/5 hover:border-neon-cyan/30">
                  <Quote className="absolute top-6 left-6 text-neon-cyan/10 w-12 h-12" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-neon-cyan text-neon-cyan" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-white">{review.name}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Google Reviewer</p>
                    </div>
                    <ThumbsUp size={16} className="text-neon-cyan/40" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto p-12 border-dashed border-white/20 bg-transparent">
              <h3 className="text-2xl font-bold mb-6">HAD A GREAT EXPERIENCE?</h3>
              <p className="text-white/60 mb-8">
                We'd love to hear from you! Your feedback helps us continue providing 
                the best service in Central Louisiana.
              </p>
              <a 
                href="https://www.google.com/search?q=ace+audio+alexandria+la+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">Leave a Google Review</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
