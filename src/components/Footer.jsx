import React from 'react';
import { Globe, FileText, ArrowUp, ShieldCheck } from 'lucide-react';
import certImg from '../assets/Cert.png';
import { BRAND_INFO } from '../data/siteData';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072042] text-white pt-12 sm:pt-16 pb-8 border-t border-gold-500/30 relative overflow-hidden">
      {/* Background lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-slate-800/80">
          
          {/* Brand & Executive Summary (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none shrink-0 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                    OMEGA EXPORTS
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold px-1.5 py-0.5 border border-gold-500/30 rounded bg-navy-900/60 inline-block">
                    Pty Ltd
                  </span>
                </div>
                <p className="text-[10px] tracking-wider uppercase text-gold-300 font-medium">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </a>

            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-md">
              Connecting Australian products with international markets. Sourcing and supplying quality Australian meat, fresh produce and selected food products for international markets.
            </p>

            <div className="pt-2 flex flex-col space-y-1 text-xs text-gold-300 font-serif italic">
              <span>“{BRAND_INFO.brandPromise}”</span>
              <span className="text-slate-300 font-sans not-italic font-normal">{BRAND_INFO.positioning}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Navigation & Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors py-0.5 block">Home</a></li>
              <li><a href="#products" className="hover:text-gold-400 transition-colors py-0.5 block">Products</a></li>
              <li><a href="#markets" className="hover:text-gold-400 transition-colors py-0.5 block">Markets</a></li>
              <li><a href="#why-omega" className="hover:text-gold-400 transition-colors py-0.5 block">Why Omega</a></li>
              <li><a href="#leadership" className="hover:text-gold-400 transition-colors py-0.5 block">Leadership</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors py-0.5 block">Contact</a></li>
              <li>
                <button
                  onClick={() => onOpenQuote()}
                  className="hover:text-gold-400 transition-colors py-0.5 text-left font-semibold text-gold-300 block"
                >
                  Get a Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Quotation CTA & ASIC Badge (4 cols) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              B2B Trade Inquiries
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Looking for Australian meat, fresh produce or selected food products?
            </p>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3 px-4 bg-gold-gradient hover:opacity-95 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 min-h-[44px] transition-transform active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-gold-100" />
              <span>Get a Quotation</span>
            </button>

            {/* Cert.png Displayed with Registered on label */}
            <div className="pt-3.5 space-y-1.5 flex flex-col items-start sm:items-center lg:items-start">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gold-400 font-bold">
                Registered on
              </span>
              <img
                src={certImg}
                alt="Australian Securities & Investments Commission Registration Badge"
                className="w-full max-w-[240px] sm:max-w-[300px] h-auto max-h-36 sm:max-h-44 md:max-h-48 object-contain filter drop-shadow-md"
              />
            </div>

          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Omega Exports International Pty Ltd. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 text-xs">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              Australian Quality. Global Ambition.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-gold-500 transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
