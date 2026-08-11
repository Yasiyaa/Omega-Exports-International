import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Shield, CheckCircle2 } from 'lucide-react';
import { CORPORATE_STATEMENTS } from '../data/siteData';

export default function VisionCommitment({ onOpenQuote }) {
  return (
    <section className="py-20 sm:py-28 bg-[#072042] text-white relative overflow-hidden">
      {/* Background Image Banner with High Visibility Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-65 filter brightness-95 contrast-105 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=85')` 
        }}
      />

      {/* Balanced Navy Gradient Overlays for Depth & Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#072042]/80 via-[#072042]/50 to-[#072042]/90" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-950/90 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Target className="w-4 h-4 text-gold-400" />
            <span>Corporate Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Vision, Mission & Commitment
          </h2>
        </div>

        {/* Vision & Mission Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision */}
          <div className="bg-navy-950/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-gold-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Our Vision
              </h3>
            </div>

            <ul className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
              {CORPORATE_STATEMENTS.vision.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-navy-950/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-gold-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center">
                <Flag className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Our Mission
              </h3>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light pt-2">
              {CORPORATE_STATEMENTS.mission}
            </p>
          </div>

        </div>

        {/* Our Commitment Glassmorphism Banner */}
        <div className="bg-navy-950/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gold-500/40 space-y-6 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-4 h-4 text-gold-400" />
            <span>Our Commitment</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-gold-300 max-w-3xl mx-auto leading-snug">
            “{CORPORATE_STATEMENTS.commitment.headline}”
          </h3>

          <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {CORPORATE_STATEMENTS.commitment.text}
          </p>
        </div>

        {/* Brand Promise Banner */}
        <div className="bg-white/95 backdrop-blur-md text-navy-950 rounded-3xl p-8 sm:p-12 border border-gold-500/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-800 bg-gold-500/10 px-4 py-2 rounded-xl border border-gold-500/30">
              {CORPORATE_STATEMENTS.brandPromiseSection.line3}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
