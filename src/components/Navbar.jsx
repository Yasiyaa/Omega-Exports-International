import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, ChevronRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_INFO } from '../data/siteData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Markets', href: '#markets' },
    { name: 'Why Omega', href: '#why-omega' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-gold-500/20'
            : 'bg-gradient-to-b from-navy-950/90 via-navy-950/50 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo & Tagline */}
            <a href="#home" className="flex items-center gap-1.5 sm:gap-3 group focus:outline-none shrink-0">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform shrink-0">
                <Globe className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-serif text-xs xs:text-sm sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                    OMEGA EXPORTS
                  </span>
                  <span className="hidden xs:inline-block text-[8px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold px-1 py-0.5 border border-gold-500/30 rounded bg-navy-900/60 shrink-0">
                    Pty Ltd
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-gold-200/80 font-medium hidden sm:block">
                  Australian Quality. Global Ambition.
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-slate-200 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Direct Call Button, Quotation CTA & Mobile Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <a
                href={BRAND_INFO.phoneTel}
                className="p-2 sm:px-3.5 sm:py-2 rounded-xl text-gold-300 hover:text-white bg-navy-900/90 border border-gold-500/30 hover:border-gold-400 transition-all flex items-center justify-center gap-1.5 shrink-0 min-w-[36px] min-h-[36px] sm:min-h-[44px]"
                title={`Call ${BRAND_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                <span className="hidden sm:inline text-xs sm:text-sm font-semibold text-gold-300">Call Us</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 bg-gold-gradient text-white text-[11px] sm:text-sm font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1 sm:gap-2 shrink-0 min-h-[36px] sm:min-h-[44px]"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-100 shrink-0" />
                <span className="hidden sm:inline">Get a Quotation</span>
                <span className="sm:hidden">Get Quote</span>
              </button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white rounded-xl focus:outline-none border border-slate-700/50 bg-navy-900/60 min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-navy-950/80 backdrop-blur-sm md:hidden"
            />

            {/* Slide Down Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[57px] left-0 right-0 z-40 bg-navy-950 border-b border-gold-500/30 px-5 pt-3 pb-6 space-y-2 shadow-2xl md:hidden max-h-[calc(100dvh-60px)] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-medium text-slate-200 hover:text-gold-400 py-3 border-b border-slate-800/60 min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-500/60" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 bg-gold-gradient text-white font-semibold rounded-xl text-center text-sm shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform min-h-[44px]"
                >
                  <FileText className="w-4 h-4 text-gold-100" />
                  <span>Request an Export Quotation</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

