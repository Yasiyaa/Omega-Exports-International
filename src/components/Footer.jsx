import React from 'react';
import { Globe, FileText, ArrowUp, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white pt-12 sm:pt-16 pb-8 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block">
                  OMEGA EXPORTS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  International
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Omega Exports International is a premier global food export partner. Sourcing prime beef, lamb, specialty meats, fresh vegetables, and fruits through cold-chain logistics.
            </p>

            <div className="pt-1">
              <p className="text-xs text-gold-300 font-serif italic">
                “Quality Beyond Borders”
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><a href="#home" className="hover:text-gold-400 transition-colors py-1 inline-block">Home</a></li>
              <li><a href="#products" className="hover:text-gold-400 transition-colors py-1 inline-block">Products Catalog</a></li>
              <li><a href="#solutions" className="hover:text-gold-400 transition-colors py-1 inline-block">Export Solutions</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors py-1 inline-block">Capabilities & Services</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors py-1 inline-block">About Company</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors py-1 inline-block">Contact Desk</a></li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold">
              Export Products
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li><button onClick={() => onOpenQuote('Prime Beef')} className="hover:text-gold-400 transition-colors text-left py-1 block">Prime Beef (Chilled/Frozen)</button></li>
              <li><button onClick={() => onOpenQuote('Lamb & Mutton')} className="hover:text-gold-400 transition-colors text-left py-1 block">Lamb & Mutton Cuts</button></li>
              <li><button onClick={() => onOpenQuote('Specialty Meats')} className="hover:text-gold-400 transition-colors text-left py-1 block">Specialty Industrial Meats</button></li>
              <li><button onClick={() => onOpenQuote('Fresh Vegetables')} className="hover:text-gold-400 transition-colors text-left py-1 block">Fresh Export Vegetables</button></li>
              <li><button onClick={() => onOpenQuote('Premium Fruits')} className="hover:text-gold-400 transition-colors text-left py-1 block">Premium Harvest Fruits</button></li>
            </ul>
          </div>

          {/* Fast Quote Trigger Column */}
          <div className="sm:col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold">
              Quotation Request
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Need immediate pricing or shipping freight timelines for your destination port?
            </p>
            <button
              onClick={() => onOpenQuote()}
              className="w-full py-3 bg-gold-gradient hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2 min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-gold-100" />
              <span>Get a Quotation</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Omega Exports International. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-400 text-[11px] sm:text-xs">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              Cold-Chain Sourcing Integrity
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 text-slate-300 hover:text-white hover:bg-gold-500 transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center"
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
