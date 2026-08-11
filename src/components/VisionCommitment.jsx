import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Shield, Award, CheckCircle2 } from 'lucide-react';
import { CORPORATE_STATEMENTS, BRAND_INFO } from '../data/siteData';

export default function VisionCommitment({ onOpenQuote }) {
  return (
    <section className="py-16 sm:py-24 bg-[#072042] text-white relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Target className="w-4 h-4 text-gold-400" />
            <span>Corporate Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Vision, Mission & Commitment
          </h2>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision */}
          <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-10 border border-gold-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Our Vision
              </h3>
            </div>

            <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {CORPORATE_STATEMENTS.vision.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-10 border border-gold-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Our Mission
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light pt-2">
              {CORPORATE_STATEMENTS.mission}
            </p>
          </div>

        </div>

        {/* Our Commitment Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-12 border border-gold-500/40 space-y-6 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-gold-400" />
            <span>Our Commitment</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-gold-300 max-w-3xl mx-auto leading-snug">
            “{CORPORATE_STATEMENTS.commitment.headline}”
          </h3>

          <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {CORPORATE_STATEMENTS.commitment.text}
          </p>
        </div>

        {/* Brand Promise Display Banner */}
        <div className="bg-white text-navy-950 rounded-3xl p-8 sm:p-12 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold">
              Brand Promise & Positioning
            </span>
            <h4 className="text-2xl sm:text-4xl font-serif font-bold text-[#072042]">
              {CORPORATE_STATEMENTS.brandPromiseSection.line1}
            </h4>
            <p className="text-slate-600 font-serif italic text-base sm:text-xl">
              {CORPORATE_STATEMENTS.brandPromiseSection.line2}
            </p>
          </div>

          <div className="text-center md:text-right shrink-0">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-700 bg-gold-500/10 px-4 py-2 rounded-xl border border-gold-500/30">
              {CORPORATE_STATEMENTS.brandPromiseSection.line3}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
