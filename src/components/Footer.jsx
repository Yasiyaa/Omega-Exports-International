import React from 'react';
import { FileText, ArrowUp, ShieldCheck } from 'lucide-react';
import certImg from '../assets/Cert.png';
import { BRAND_INFO } from '../data/siteData';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#072042] pt-14 sm:pt-18 pb-10 border-t border-slate-200/90 relative overflow-hidden shadow-inner">
      {/* Background lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-slate-200">
          
          {/* Brand & Executive Summary (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center group focus:outline-none shrink-0 inline-flex">
              <img
                src="/assets/logo-01.png"
                alt="Omega Exports International"
                className="h-24 sm:h-36 lg:h-44 w-auto max-h-44 object-contain filter contrast-130 brightness-90 group-hover:scale-105 transition-transform shrink-0"
              />
            </a>

            <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              Connecting Australian products with international markets. Sourcing and supplying quality Australian meat, fresh produce and selected food products for international markets.
            </p>

            <div className="pt-2 flex flex-col space-y-1 text-xs sm:text-sm text-gold-700 font-serif italic font-medium">
              <span>“{BRAND_INFO.brandPromise}”</span>
              <span className="text-[#072042] font-sans not-italic font-semibold">{BRAND_INFO.positioning}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-800 font-bold">
              Navigation & Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#072042] font-semibold">
              <li><a href="#home" className="hover:text-gold-600 transition-colors py-0.5 block">Home</a></li>
              <li><a href="#products" className="hover:text-gold-600 transition-colors py-0.5 block">Products</a></li>
              <li><a href="#markets" className="hover:text-gold-600 transition-colors py-0.5 block">Markets</a></li>
              <li><a href="#why-omega" className="hover:text-gold-600 transition-colors py-0.5 block">Why Omega</a></li>
              <li><a href="#leadership" className="hover:text-gold-600 transition-colors py-0.5 block">Leadership</a></li>
              <li><a href="#insights" className="hover:text-gold-600 transition-colors py-0.5 block">Insights & FAQ</a></li>
              <li><a href="#contact" className="hover:text-gold-600 transition-colors py-0.5 block">Contact</a></li>
              <li>
                <button
                  onClick={() => onOpenQuote()}
                  className="hover:text-gold-700 transition-colors py-0.5 text-left font-bold text-gold-800 block"
                >
                  Get a Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Quotation CTA & ASIC Badge (4 cols) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-800 font-bold">
              B2B Trade Inquiries
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Looking for Australian meat, fresh produce or selected food products?
            </p>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3 px-4 bg-gold-gradient hover:opacity-95 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 min-h-[44px] transition-transform active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-gold-100" />
              <span>Get a Quotation</span>
            </button>

            {/* ASIC Registration Badge */}
            <div className="pt-3.5 space-y-1.5 flex flex-col items-start sm:items-center lg:items-start">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gold-800 font-bold">
                Registered on
              </span>
              <img
                src="/assets/asic-29.png"
                alt="Australian Securities & Investments Commission Registration Badge"
                className="w-full max-w-[240px] sm:max-w-[300px] h-auto max-h-36 sm:max-h-44 md:max-h-48 object-contain filter drop-shadow-md"
              />
            </div>

          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 text-center sm:text-left font-medium">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Omega Exports International Pty Ltd. All rights reserved.</p>
            <p className="text-gold-800 font-bold text-xs tracking-wider">
              ABN: <span className="text-[#072042] font-mono font-bold">41 701 214 002</span>
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-[#072042] text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0" />
              Australian Quality. Global Ambition.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-[#072042] hover:text-white hover:bg-[#072042] transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center shadow-sm"
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
