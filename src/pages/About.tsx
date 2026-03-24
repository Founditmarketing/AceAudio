import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { ContactCTA } from '@/src/components/sections/ContactCTA';

export const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-bg-main relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-1/5 blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6"
          >
            ABOUT <span className="text-accent-1">ACE AUDIO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Central Louisiana's Premier Car Audio Specialists Since 1990
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">OUR <span className="text-primary">STORY</span></h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  We are located in Alexandria, LA and we are a part of the Automotive Parts & Accessories Stores Industry. 
                  Our Motto is <span className="text-secondary font-bold italic">"If you can't crank it, Yank it."</span> 
                  So if your sound quality has been lacking recently, we make it our mission to get you the best suitable equipment for your vehicle.
                </p>
                <p>
                  We started our business in Alexandria around 1990. We have been serving the Central Louisiana area ever since. 
                  As a kid, I had no speakers in my first car. Driving to school and work every day without any music was very dull. 
                  That all changed when I installed my first speaker into my car!
                </p>
                <p>
                  When I say I fell in love with the way my radio bumped down the street, I mean I LOVED it. 
                  Ever since that day of getting a new speaker for my car, I have wanted to give others that feeling 
                  of hearing amazing speakers in their cars for the very first time.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img 
                  src="https://aceaudioinc.com/wp-content/uploads/2021/04/167591302_10158976751660853_6212941891469555194_n.jpg" 
                  alt="Shop Interior" 
                  className="rounded-2xl w-full h-64 object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="glass-card p-6 border-primary/30 text-center">
                  <p className="text-4xl font-black text-primary mb-1">30+</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 border-secondary/30 text-center">
                  <p className="text-4xl font-black text-secondary mb-1">100%</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/40">Quality Guarantee</p>
                </div>
                <img 
                  src="https://aceaudioinc.com/wp-content/uploads/2021/04/164007310_10158974344055853_214016826823913390_n.jpg" 
                  alt="Installation" 
                  className="rounded-2xl w-full h-64 object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-bg-panel/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black mb-8 uppercase">OUR MISSION</h2>
            <p className="text-2xl text-white/80 font-light leading-relaxed italic">
              "To empower every driver in Central Louisiana to feel a new dimension of their music, 
              providing premium equipment and expert installation that honors the artist's creation."
            </p>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
