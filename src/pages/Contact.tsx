import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Phone, Mail, MapPin, Clock, Facebook, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-bg-main relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-2/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6"
          >
            CONTACT <span className="text-accent-2">US</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Let's Talk About Your Sound System
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">GET IN <span className="text-accent-2">TOUCH</span></h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Contact us today to get started! Don't wait to get your sound system fixed or upgraded. 
                  Schedule an appointment with us to get the equipment that's right for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-2/10 flex items-center justify-center text-accent-2 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:3184452406" className="text-lg font-bold hover:text-accent-2 transition-colors">(318) 445-2406</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:Ace_audioinc@yahoo.com" className="text-lg font-bold hover:text-secondary transition-colors">Ace_audioinc@yahoo.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-lg font-bold">1718 Metro Dr. Alexandria, LA</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-1/10 flex items-center justify-center text-accent-1 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Hours</p>
                    <div className="text-sm font-medium">
                      <p>Mon-Fri: 9am – 6pm</p>
                      <p>Sat: 9am – 4pm</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h4 className="font-display text-sm font-bold tracking-widest mb-6 uppercase">Follow Us</h4>
                <a 
                  href="https://www.facebook.com/Ace-Audio-142129128095" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 glass-card px-6 py-3 border-accent-2/30 hover:bg-accent-2 hover:text-bg-main transition-all group"
                >
                  <Facebook size={20} />
                  <span className="font-bold tracking-widest">FACEBOOK</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 sm:p-12 border-white/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-accent-2 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Phone</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-accent-2 transition-colors"
                        placeholder="(318) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-accent-2 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-white/40 ml-4">Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 focus:outline-none focus:border-accent-2 transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button className="w-full py-5 text-lg" variant="primary">
                    <span className="flex items-center justify-center gap-2">
                      Send Message <Send size={20} />
                    </span>
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="h-[400px] w-full relative">
        <iframe
          src="https://maps.google.com/maps?q=1718%20Metro%20Dr.%20Alexandria,%20LA&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main to-transparent h-16 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-main to-transparent h-16 pointer-events-none" />
      </section>
    </div>
  );
};
