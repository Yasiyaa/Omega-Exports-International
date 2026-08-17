import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Phone } from 'lucide-react';
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
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md ${
          isScrolled ? 'py-2 sm:py-2.5 shadow-lg' : 'py-2 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: Mobile-Optimized Brand Logo */}
            <a href="#home" className="flex items-center group focus:outline-none shrink-0 py-0.5 max-w-[150px] xs:max-w-[180px] sm:max-w-none">
              <img
                src="/assets/1 logo_Logo concept 1 copy 2.png"
                alt="Omega Exports International"
                className="h-8 xs:h-9 sm:h-12 lg:h-16 w-auto max-h-16 object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform shrink-0"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-semibold tracking-wide text-[#072042] hover:text-gold-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Call Us, Get Quotation CTA & Mobile Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <a
                href={BRAND_INFO.phoneTel}
                className="p-1.5 xs:p-2 sm:px-4 sm:py-2 rounded-xl text-[#072042] hover:text-white bg-slate-100 hover:bg-[#072042] border border-slate-300 transition-all flex items-center justify-center gap-1.5 shrink-0 min-w-[34px] min-h-[34px] sm:min-h-[44px] shadow-sm font-semibold text-xs sm:text-sm"
                title={`Call ${BRAND_INFO.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-600 shrink-0" />
                <span className="hidden sm:inline">Call Us</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-gold-gradient text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 min-h-[36px] sm:min-h-[44px] cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-100 shrink-0" />
                <span className="hidden sm:inline">Get a Quotation</span>
                <span className="sm:hidden">Get Quote</span>
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 xs:p-2 text-[#072042] hover:bg-[#072042] hover:text-white rounded-xl focus:outline-none border border-slate-300 bg-slate-50 min-w-[34px] min-h-[34px] flex items-center justify-center transition-colors shrink-0"
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
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-[#072042]/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide Down Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[52px] sm:top-[68px] left-0 right-0 z-40 bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-2xl md:hidden max-h-[calc(100dvh-52px)] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm font-semibold text-[#072042] hover:text-gold-600 py-3 border-b border-slate-200/80 min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-600" />
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
