import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCT_SECTIONS } from '@/src/constants';
import { Card } from '@/src/components/ui/Card';
import { ContactCTA } from '@/src/components/sections/ContactCTA';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

export const ProductCategory: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const section = PRODUCT_SECTIONS.find(s => s.id === categoryId);

  if (!section) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-bg-main relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 font-display text-xs tracking-widest uppercase"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black mb-6 uppercase"
          >
            {section.title.split(' ')[0]} <span className="text-primary">{section.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1 >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl"
          >
            {section.description}
          </motion.p>
        </div>
      </section>

      {/* Brands Grid */}
      {/* Brands Display */}
      {categoryId === 'audio' ? (
        <div className="flex flex-col">
          {section.brands.map((brand, index) => (
             <div key={brand.name}>
               {/* SECTION 1: Main Gear Section */}
               <section className="py-24 bg-bg-main border-b border-white/5">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="flex flex-col lg:flex-row gap-16 lg:items-center"
                   >
                     <div className="flex-1 space-y-6">
                       <div className="bg-white/5 p-6 rounded-2xl w-fit mb-4">
                         <img src={brand.logo} alt={brand.name} className="h-16 w-auto object-contain filter brightness-110" />
                       </div>
                       {brand.mainBiography ? (
                         <>
                           <h2 className="text-3xl sm:text-4xl font-black text-white">{brand.name.toUpperCase()} AUDIO SYSTEMS</h2>
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

               {/* SECTION 2: Subcategories (Other things they sell) */}
               {brand.subcategories && brand.subcategories.length > 0 && (
                 <section className="py-24 bg-bg-panel/30 border-b border-white/5 relative overflow-hidden">
                   <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 }}
                     >
                       <h3 className="text-3xl font-black mb-12 text-center text-primary uppercase">{brand.name} Products</h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         {brand.subcategories.map(sub => (
                           <Card key={sub.name} className="flex flex-col h-full bg-bg-main p-8 border-white/5 hover:border-white/20">
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
      ) : (
        <section className="py-24 bg-bg-main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col bg-bg-panel/20 border-white/5 hover:border-white/20">
                    <div className="h-32 flex items-center justify-center mb-6 p-4 bg-white/5 rounded-xl overflow-hidden">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-h-full max-w-full object-contain filter brightness-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">{brand.name}</h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                      {brand.description}
                    </p>
                    {brand.products && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {brand.products.map(p => (
                          <span key={p} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-white/5 rounded text-white/40">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                    {brand.image && (
                      <div className="mt-auto rounded-lg overflow-hidden border border-white/5">
                        <img 
                          src={brand.image} 
                          alt={`${brand.name} product`} 
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </div>
  );
};
