import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Briefcase, RefreshCw, Layers, Users } from 'lucide-react';
import { WHY_OMEGA_FEATURES } from '../data/siteData';

export default function WhyOmega({ onOpenQuote }) {
  const getIcon = (id) => {
    switch (id) {
      case 'sourcing': return <Award className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
      case 'experience': return <Briefcase className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
      case 'supply': return <RefreshCw className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
      case 'development': return <Layers className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
      case 'partnerships': return <Users className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
      default: return <ShieldCheck className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="why-omega" className="py-16 sm:py-24 bg-[#faf8f5] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>Commercial Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            Why Omega
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Built on quality, trust, financial trade expertise, and long-term partnership values.
          </p>
        </div>

        {/* 5 Feature Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_OMEGA_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-gold-500/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 || idx === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#faf8f5] border border-gold-500/30 flex items-center justify-center group-hover:bg-[#072042] transition-colors duration-300 shrink-0">
                  {getIcon(feat.id)}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#072042]">
                  {feat.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-warm-200 flex items-center justify-between text-xs text-gold-700 font-semibold uppercase tracking-wider">
                <span>Core Competency</span>
                <span className="w-2 h-2 rounded-full bg-gold-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
