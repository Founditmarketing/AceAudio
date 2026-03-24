import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PRODUCT_SECTIONS } from '@/src/constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowProductsDropdown(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'REVIEWS', path: '/reviews' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-bg-dark/90 backdrop-blur-lg border-b border-white/10 py-2" : "bg-transparent py-4"
    )}>
      {/* Top Bar */}
      {!isScrolled && (
        <div className="hidden lg:flex justify-center gap-8 text-xs font-medium text-white/60 mb-2">
          <a href="tel:3184452406" className="flex items-center gap-1 hover:text-neon-cyan transition-colors">
            <Phone size={12} /> (318) 445-2406
          </a>
          <a href="mailto:Ace_audioinc@yahoo.com" className="flex items-center gap-1 hover:text-neon-cyan transition-colors">
            <Mail size={12} /> Ace_audioinc@yahoo.com
          </a>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> 1718 Metro Dr. Alexandria, LA
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://aceaudioinc.com/wp-content/uploads/2021/03/Copy-of-ACE-AUDIO.png" 
              alt="ACE Audio" 
              className="h-10 sm:h-12 w-auto filter drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'HOME') {
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    <Link 
                      to="/" 
                      className={cn(
                        "text-sm font-bold tracking-widest hover:text-neon-cyan transition-colors flex items-center gap-1",
                        location.pathname === '/' ? "text-neon-cyan text-glow-cyan" : "text-white"
                      )}
                    >
                      HOME
                    </Link>
                  </div>
                );
              }

              return (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={cn(
                    "text-sm font-bold tracking-widest hover:text-neon-cyan transition-colors",
                    location.pathname === link.path ? "text-neon-cyan text-glow-cyan" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Products Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <button 
                className="text-sm font-bold tracking-widest text-white hover:text-neon-cyan transition-colors flex items-center gap-1 cursor-pointer"
              >
                PRODUCTS <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {showProductsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card p-4 border-neon-cyan/30 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
                  >
                    <div className="flex flex-col gap-2">
                      {PRODUCT_SECTIONS.map((section) => (
                        <Link
                          key={section.id}
                          to={`/products/${section.id}`}
                          className="text-sm text-white/80 hover:text-neon-cyan hover:translate-x-2 transition-all py-2 border-b border-white/5 last:border-0"
                        >
                          {section.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={cn(
                    "text-lg font-bold tracking-widest py-2",
                    location.pathname === link.path ? "text-neon-cyan" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-white/40 tracking-widest mb-4">PRODUCTS</p>
                <div className="grid grid-cols-1 gap-4">
                  {PRODUCT_SECTIONS.map((section) => (
                    <Link
                      key={section.id}
                      to={`/products/${section.id}`}
                      className="text-white/80 hover:text-neon-cyan"
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
