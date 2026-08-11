import React from 'react';
import { Globe, FileText, ArrowUp, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import certImg from '../assets/Cert.png';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white pt-12 sm:pt-16 pb-8 border-t border-gold-500/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-slate-800/80">
          
          {/* Brand & Executive Summary (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none shrink-0 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                    OMEGA
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold px-1.5 py-0.5 border border-gold-500/30 rounded bg-navy-900/60 inline-block">
                    Exports
                  </span>
                </div>
                <p className="text-[10px] tracking-wider uppercase text-gold-200/80 font-medium">
                  International Food Logistics
                </p>
              </div>
            </a>

            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-md">
              Omega Exports International is a trusted B2B partner in global food export trade. Delivering pasture-raised meats, chilled beef, lamb, fresh produce, and fruits under verified cold-chain standards.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="text-gold-300 font-serif italic font-medium">
                “Quality Beyond Borders”
              </span>
              <span className="h-1 w-1 rounded-full bg-gold-500"></span>
              <span className="flex items-center gap-1 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                HACCP & ISO Compliant
              </span>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors py-0.5 block">Home</a></li>
              <li><a href="#products" className="hover:text-gold-400 transition-colors py-0.5 block">Products Catalog</a></li>
              <li><a href="#solutions" className="hover:text-gold-400 transition-colors py-0.5 block">Export Solutions</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors py-0.5 block">Capabilities & Services</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors py-0.5 block">About Company</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors py-0.5 block">Contact Desk</a></li>
            </ul>
          </div>

          {/* Export Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold">
              Export Offerings
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><button onClick={() => onOpenQuote('Prime Beef')} className="hover:text-gold-400 transition-colors text-left py-0.5 block">Prime Beef Cuts</button></li>
              <li><button onClick={() => onOpenQuote('Lamb & Mutton')} className="hover:text-gold-400 transition-colors text-left py-0.5 block">Lamb & Mutton</button></li>
              <li><button onClick={() => onOpenQuote('Specialty Meats')} className="hover:text-gold-400 transition-colors text-left py-0.5 block">Specialty Meats</button></li>
              <li><button onClick={() => onOpenQuote('Fresh Vegetables')} className="hover:text-gold-400 transition-colors text-left py-0.5 block">Fresh Vegetables</button></li>
              <li><button onClick={() => onOpenQuote('Premium Fruits')} className="hover:text-gold-400 transition-colors text-left py-0.5 block">Premium Fruits</button></li>
            </ul>
          </div>

          {/* Quotation CTA & Cert.png Showcase (4 cols) */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Accreditations & Trade Quotes</span>
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Need bulk B2B container pricing, custom cuts, or freight logistics schedules?
            </p>

            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3 px-4 bg-gold-gradient hover:opacity-95 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 min-h-[44px] transition-transform active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-gold-100" />
              <span>Request Export Quotation</span>
            </button>

            {/* Cert.png Displayed with Registered on label */}
            <div className="pt-3.5 space-y-1.5 flex flex-col items-start sm:items-center lg:items-start">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-gold-400 font-bold">
                Registered on
              </span>
              <img
                src={certImg}
                alt="Omega Exports Certifications"
                className="w-full max-w-[240px] sm:max-w-[300px] h-auto max-h-36 sm:max-h-44 md:max-h-48 object-contain filter drop-shadow-md"
              />
            </div>

          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Omega Exports International. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              Cold-Chain Sourcing Integrity
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



