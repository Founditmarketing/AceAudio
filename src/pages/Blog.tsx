import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: "How to Choose the Right Subwoofer for Your Vehicle",
      excerpt: "Not all subwoofers are created equal. Learn how to match the perfect bass to your car's interior and your musical taste.",
      date: "March 15, 2024",
      author: "ACE Team",
      category: "Car Audio 101",
      image: "https://aceaudioinc.com/wp-content/uploads/2021/03/71LQOfLMUJL._AC_SL1500_.jpg"
    },
    {
      title: "Apple CarPlay vs Android Auto: Which is Right for You?",
      excerpt: "Comparing the two giants of smartphone integration. We break down the features, interface, and compatibility.",
      date: "March 10, 2024",
      author: "ACE Team",
      category: "Tech Guides",
      image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-design-15.png"
    },
    {
      title: "5 Signs Your Car Speakers Need Replacing",
      excerpt: "Is your audio sounding muddy or distorted? Here are the clear indicators that it's time for an upgrade.",
      date: "March 5, 2024",
      author: "ACE Team",
      category: "Maintenance",
      image: "https://aceaudioinc.com/wp-content/uploads/2021/03/Untitled-1.png"
    },
    {
      title: "The Benefits of Professional Audio Installation",
      excerpt: "Why DIY isn't always the best route for high-performance audio systems. The importance of proper wiring and tuning.",
      date: "February 28, 2024",
      author: "ACE Team",
      category: "Installation",
      image: "https://aceaudioinc.com/wp-content/uploads/2021/04/164007310_1015894344055853_214016826823913390_n.jpg"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6"
          >
            ACE AUDIO <span className="text-neon-magenta">BLOG</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Tips, Guides & News from Central Louisiana's Audio Experts
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Posts Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full flex flex-col p-0 overflow-hidden group border-white/5">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-neon-magenta uppercase mb-4">
                        <span className="bg-neon-magenta/10 px-2 py-1 rounded">{post.category}</span>
                        <span className="text-white/40 flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-neon-magenta transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <button className="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white hover:text-neon-magenta transition-colors">
                        Read More <ArrowRight size={14} />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Search */}
              <Card className="p-6 border-white/5">
                <h4 className="font-display text-sm font-bold tracking-widest mb-4 uppercase">Search Blog</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                </div>
              </Card>

              {/* Categories */}
              <Card className="p-6 border-white/5">
                <h4 className="font-display text-sm font-bold tracking-widest mb-6 uppercase">Categories</h4>
                <ul className="space-y-4">
                  {['Installation Tips', 'Product Reviews', 'Car Audio 101', 'News & Updates', 'Before & After'].map(cat => (
                    <li key={cat}>
                      <button className="text-sm text-white/60 hover:text-neon-cyan transition-colors flex items-center justify-between w-full group">
                        {cat}
                        <span className="text-[10px] bg-white/5 px-2 py-1 rounded group-hover:bg-neon-cyan/20 transition-colors">12</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Newsletter */}
              <Card className="p-8 border-neon-cyan/30 bg-neon-cyan/5">
                <h4 className="font-display text-lg font-bold mb-4">STAY TUNED</h4>
                <p className="text-sm text-white/60 mb-6">
                  Subscribe to our newsletter for the latest audio tips and exclusive offers.
                </p>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-bg-dark border border-white/10 rounded-full py-3 px-6 text-sm mb-4 focus:outline-none focus:border-neon-cyan transition-colors"
                />
                <Button className="w-full">Subscribe</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
