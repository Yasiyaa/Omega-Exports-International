import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, ChevronRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-gold-500/20'
          : 'bg-gradient-to-b from-navy-950/90 via-navy-950/50 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo & Tagline */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-base sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  OMEGA
                </span>
                <span className="text-[9px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold px-1 py-0.5 border border-gold-500/30 rounded bg-navy-900/60 inline-block">
                  Exports
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-gold-200/80 font-medium hidden xs:block">
                Quality Beyond Borders
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

          {/* Quotation CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="px-3.5 py-2 sm:px-5 sm:py-2.5 bg-gold-gradient text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 shrink-0"
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-100" />
              <span>Get a Quote</span>
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none border border-slate-700/50 bg-navy-900/60"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-gold-500/20 px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm sm:text-base font-medium text-slate-200 hover:text-gold-400 py-2.5 border-b border-slate-800/60"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gold-500/60" />
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-gold-gradient text-white font-semibold rounded-xl text-center text-xs sm:text-sm shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request an Export Quotation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
