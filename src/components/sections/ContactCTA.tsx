import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/Button';
import { Link } from 'react-router-dom';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with image and overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://aceaudioinc.com/wp-content/uploads/2021/03/slide-rgb-lights.jpg" 
          alt="Car Interior" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-6 leading-tight"
          >
            READY TO <span className="text-neon-cyan">UPGRADE</span> YOUR DRIVE?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-10 font-light"
          >
            Don't wait to get your sound system fixed or upgraded. 
            Schedule an appointment with Cenla's audio experts today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <Link to="/contact">
              <Button size="lg">Get Started Now</Button>
            </Link>
            <a href="tel:3184452406">
              <Button variant="outline" size="lg">Call (318) 445-2406</Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent pointer-events-none" />
    </section>
  );
};
