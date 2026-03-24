import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-main border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <img 
              src="https://aceaudioinc.com/wp-content/uploads/2021/03/Copy-of-ACE-AUDIO.png" 
              alt="ACE Audio" 
              className="h-12 w-auto filter drop-shadow-[0_0_8px_var(--shadow-glow-primary)]"
              referrerPolicy="no-referrer"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Central Louisiana's premier car audio specialists since 1990. 
              We make music visible and audible the way it was meant to be.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/Ace-Audio-142129128095" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-bg-main transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6 text-primary">QUICK LINKS</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6 text-secondary">CONTACT</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:3184452406" className="hover:text-white transition-colors">(318) 445-2406</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:Ace_audioinc@yahoo.com" className="hover:text-white transition-colors">Ace_audioinc@yahoo.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>1718 Metro Dr. Alexandria, LA</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-6 text-accent-1">HOURS</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent-1 shrink-0" />
                <div>
                  <p className="text-white">Mon-Fri: 9am – 6pm</p>
                  <p className="text-white">Sat: 9am – 4pm</p>
                  <p className="text-white">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} ACE Audio Inc. All Rights Reserved.</p>
          <p>If you can't Crank it, Yank it.</p>
        </div>
      </div>
    </footer>
  );
};
