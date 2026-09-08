import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Compass, ArrowUpRight, TrendingUp } from 'lucide-react';
import { MARKETS_STAGES, BRAND_INFO } from '../data/siteData';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Market Presence & Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Our Current Market & Global Vision
          </h2>
          <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
            A structured three-stage trade strategy connecting Australian producers with high-demand international markets.
          </p>
        </div>

        {/* 3-Stage Market Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MARKETS_STAGES.map((market, idx) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#02091b]/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-500/30 flex flex-col justify-between hover:border-gold-400 hover:bg-[#02091b]/75 transition-all duration-300 shadow-2xl relative group"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-extrabold text-gold-400">
                    {market.stage}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
                    {market.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {market.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mt-1">
                    {market.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {market.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  International Trade Destination
                </span>
                <button
                  onClick={() => onOpenQuote()}
                  className="p-2.5 rounded-xl bg-navy-900 text-gold-400 hover:bg-gold-500 hover:text-white transition-colors"
                  title="Inquire for Market Details"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
