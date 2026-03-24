import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { Shield, Award, Zap, Users, Star, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "30+ YEARS EXPERIENCE",
      desc: "Serving Central Louisiana since 1990 with unmatched expertise.",
      icon: Award,
      color: "cyan"
    },
    {
      title: "EXPERT INSTALLATION",
      desc: "Professional installation done right the first time, every time.",
      icon: Zap,
      color: "magenta"
    },
    {
      title: "TOP BRANDS",
      desc: "Kicker, Rockford Fosgate, Alpine, Pioneer & more premium brands.",
      icon: Star,
      color: "purple"
    },
    {
      title: "QUALITY GUARANTEE",
      desc: "We stand behind every product and installation we provide.",
      icon: Shield,
      color: "blue"
    },
    {
      title: "PERSONALIZED SERVICE",
      desc: "We find the perfect fit for YOUR specific car and sound preference.",
      icon: Users,
      color: "cyan"
    },
    {
      title: "CENLA'S #1 AUDIO SHOP",
      desc: "The region's most trusted audio experts for over three decades.",
      icon: MapPin,
      color: "magenta"
    }
  ];

  return (
    <section className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">WHY CHOOSE <span className="text-neon-magenta">ACE AUDIO</span></h2>
          <div className="w-24 h-1 bg-neon-magenta mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card 
                glowColor={f.color as any}
                className="h-full border-white/5 hover:border-white/20"
              >
                <f.icon className={`w-10 h-10 mb-6 text-neon-${f.color}`} />
                <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
