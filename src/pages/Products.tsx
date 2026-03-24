import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCT_SECTIONS, BRANDS_DATA } from '@/src/constants';
import { Card } from '@/src/components/ui/Card';
import { ContactCTA } from '@/src/components/sections/ContactCTA';
import { Button } from '@/src/components/ui/Button';

export const Products: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    if (filter === 'all' || PRODUCT_SECTIONS.find(s => s.id === filter)) {
      setActiveFilter(filter);
    } else {
      setActiveFilter('all');
    }
  }, [location.search]);

  // Determine which brands to show
  let displayedBrands = BRANDS_DATA;
  if (activeFilter !== 'all') {
    const section = PRODUCT_SECTIONS.find(s => s.id === activeFilter);
    if (section) {
      // Find the brands allowed in this section
      const allowedBrandNames = section.brands.map(b => b.name);
      displayedBrands = BRANDS_DATA.filter(brand => allowedBrandNames.includes(brand.name));
    }
  }

  const activeTitle = activeFilter === 'all' 
    ? "ALL PRODUCTS" 
    : PRODUCT_SECTIONS.find(s => s.id === activeFilter)?.title.toUpperCase() || "CATALOG";

  return (
    <div className="pt-24 min-h-screen bg-bg-main">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            key={activeTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6 uppercase"
          >
            {activeTitle.split(' ')[0]} <span className="text-primary">{activeTitle.split(' ').slice(1).join(' ')}</span>
          </motion.h1 >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            {activeFilter === 'all' 
              ? "Scroll down to explore our massive collection of premium audio systems, screens, backup cameras, and security products."
              : PRODUCT_SECTIONS.find(s => s.id === activeFilter)?.description}
          </motion.p>
        </div>
      </section>

      {/* Catalog Display - Exclusively Deep Dives */}
      <div className="flex flex-col">
        {displayedBrands.map((brand, index) => (
          <div key={`${activeFilter}-${brand.name}`} id={brand.name.replace(/\s+/g, '-')} className="mb-8 scroll-mt-32">
            {/* SECTION 1: Main Gear */}
            <section className="py-24 border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col lg:flex-row gap-16 lg:items-center"
                >
                  <div className="flex-1 space-y-6">
                    {brand.logo ? (
                      <div className="bg-white/5 p-6 rounded-2xl w-fit mb-4">
                        <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain filter brightness-110 shadow-sm" referrerPolicy="no-referrer" />
                      </div>
                    ) : (
                      <h3 className="text-3xl font-black text-primary">{brand.name}</h3>
                    )}
                    {brand.mainBiography ? (
                      <>
                        <h2 className="text-3xl sm:text-4xl font-black text-white">{brand.name.toUpperCase()} SYSTEMS</h2>
                        <p className="text-white/60 leading-relaxed text-lg whitespace-pre-line">{brand.mainBiography}</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-3xl sm:text-4xl font-black text-white">{brand.name}</h2>
                        <p className="text-white/60 leading-relaxed text-lg">{brand.description}</p>
                      </>
                    )}
                    <div className="pt-4">
                      <Link to="/contact">
                        <Button variant="primary" size="lg">Contact Us</Button>
                      </Link>
                    </div>
                  </div>
                  {brand.image && (
                    <div className="flex-1">
                      <img src={brand.image} alt={brand.name} className="w-full rounded-2xl border border-white/5 object-cover shadow-2xl" referrerPolicy="no-referrer" />
                    </div>
                  )}
                </motion.div>
              </div>
            </section>

            {/* SECTION 2: Subcategories */}
            {brand.subcategories && brand.subcategories.length > 0 && (
              <section className="py-24 bg-bg-panel/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-black mb-12 text-center text-primary uppercase">{brand.name} Products</h3>
                    <div className={`grid grid-cols-1 gap-8 ${
                      brand.subcategories.length === 1 ? 'max-w-md mx-auto' : 
                      brand.subcategories.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
                      'md:grid-cols-3'
                    }`}>
                      {brand.subcategories.map(sub => (
                        <Card key={sub.name} className="flex flex-col h-full bg-bg-main p-8 border-white/5 hover:border-white/20 shadow-xl">
                          <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">{sub.name}</h4>
                          <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{sub.description}</p>
                          {sub.image && (
                            <img src={sub.image} alt={sub.name} className="mt-4 rounded-lg w-full h-40 object-cover border border-white/5" referrerPolicy="no-referrer" />
                          )}
                        </Card>
                      ))}
                    </div>
                    <div className="mt-16 text-center">
                      <Link to="/contact">
                        <Button variant="secondary" size="lg" className="px-12">Call Us Today</Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};
