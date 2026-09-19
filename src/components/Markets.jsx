import React from 'react';
import { Compass } from 'lucide-react';
import InteractiveExportMap from './InteractiveExportMap';

export default function Markets({ onOpenQuote }) {
  return (
    <section id="markets" className="py-20 sm:py-28 bg-[#02091b] text-white relative overflow-hidden">
      {/* Background Image Banner */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90 filter brightness-105 contrast-105 pointer-events-none"
        style={{ 
          backgroundImage: `url('/assets/banner%202.jpg')` 
        }}
      />

      {/* Soft Edge Blending to ensure export routes and labels remain bright & clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02091b]/50 via-transparent to-[#02091b]/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Market Presence & Global Trade</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Our Current Markets & Global Vision
          </h2>
          <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
            Direct trade corridors from Australia to high-demand international markets, backed by certified cold-chain logistics.
          </p>
        </div>

        {/* Interactive Global Trade Map & Exact Silhouette Showcase */}
        <InteractiveExportMap onOpenQuote={onOpenQuote} />
      </div>
    </section>
  );
}
