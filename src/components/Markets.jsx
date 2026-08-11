import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Compass, ArrowUpRight, TrendingUp } from 'lucide-react';
import { MARKETS_STAGES, BRAND_INFO } from '../data/siteData';

export default function Markets({ onOpenQuote }) {
  return (
    <section id="markets" className="py-16 sm:py-24 bg-[#072042] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Market Presence & Expansion</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Our Current Market & Global Vision
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed">
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
              className="bg-navy-900/90 rounded-3xl p-6 sm:p-8 border border-gold-500/30 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 shadow-2xl relative group"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-extrabold text-gold-400/80">
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
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  International Trade Destination
                </span>
                <button
                  onClick={() => onOpenQuote()}
                  className="p-2 rounded-xl bg-navy-800 text-gold-400 hover:bg-gold-500 hover:text-white transition-colors"
                  title="Inquire for Market Details"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-gold-500/40 text-center space-y-2 shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
            Strategic Growth Promise
          </span>
          <p className="text-lg sm:text-2xl font-serif text-white font-medium">
            “{BRAND_INFO.introHighlight}”
          </p>
        </div>

      </div>
    </section>
  );
}
