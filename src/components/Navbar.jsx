import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getContent } from '../utils/content';

const navLinks = [
  { to: 'hero', label: 'Trang Chủ' },
  { to: 'about', label: 'Về Chúng Tôi' },
  { to: 'services', label: 'Dịch Vụ' },
  { to: 'portfolio', label: 'Dự Án' },
  { to: 'comparison', label: 'Trước & Sau' },
  { to: 'contact', label: 'Liên Hệ' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-luxury-dark/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="flex flex-col cursor-pointer group"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] text-white transition-all duration-300 group-hover:text-accent-gold">
              AURA
            </span>
            <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.45em] text-accent-gold mt-[-3px]">
              INTERIOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                activeClass="!text-accent-gold after:scale-x-100"
                smooth={true}
                duration={800}
                offset={-80}
                className="relative text-xs uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 border border-accent-gold/40 px-5 py-2.5 font-sans text-[11px] uppercase tracking-widest text-white transition-all duration-300 hover:bg-accent-gold hover:text-luxury-dark hover:border-accent-gold"
            >
              <PhoneCall size={12} className="animate-[pulse_2s_infinite]" />
              Hotline: {getContent('contact_hotline')}
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-accent-gold transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxury-dark pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  activeClass="text-accent-gold"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl font-light text-gray-300 hover:text-accent-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-4 text-center border-t border-white/5 pt-8">
              <p className="font-sans text-xs tracking-widest text-gray-500 uppercase">Liên Hệ Ngay</p>
              <a
                href={`tel:${getContent('contact_hotline').replace(/\./g, '')}`}
                className="font-serif text-xl text-accent-gold tracking-wide hover:underline"
              >
                {getContent('contact_hotline')}
              </a>
              <p className="font-sans text-xs text-gray-400">
                Địa chỉ: {getContent('contact_address_hn')}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
