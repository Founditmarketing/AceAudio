import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { EqualizerBars } from '@/src/components/effects/EqualizerBars';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-bg-main/80 to-bg-main z-10" />
      
      {/* Animated EQ Bars */}
      <EqualizerBars />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-accent-2 font-accent tracking-[0.3em] text-sm sm:text-base mb-4 uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ESTABLISHED 1990
          </motion.p>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white">FEEL THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-1 text-glow-primary">MUSIC</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/70 text-lg sm:text-xl mb-10 leading-relaxed font-light">
            Central Louisiana's premier car audio specialists. 
            Speakers, subwoofers, screens, remote starts & more.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get a Quote
            </Button>
          </div>

          <motion.div 
            className="mt-16 inline-block glass-card px-6 py-3 border-accent-3/50"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-secondary font-display font-bold italic tracking-widest">
              "If you can't Crank it, Yank it."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
