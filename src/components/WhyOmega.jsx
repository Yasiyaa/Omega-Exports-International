import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { WHY_OMEGA_FEATURES } from '../data/siteData';

export default function WhyOmega({ onOpenQuote }) {
  const getImage = (id) => {
    switch (id) {
      case 'sourcing':
        return 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80';
      case 'experience':
        return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
      case 'supply':
        return 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80';
      case 'development':
        return 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80';
      case 'partnerships':
        return 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80';
      default:
        return 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <section id="why-omega" className="py-14 sm:py-20 bg-[#faf8f5] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
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

        {/* 6 Grid Slots: 5 Visual Cards with Images + 1 Integrated Trade CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_OMEGA_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl overflow-hidden border border-gold-500/20 shadow-lg hover:shadow-2xl hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Feature Image Box */}
              <div className="relative h-44 sm:h-52 overflow-hidden bg-[#072042]">
                <img
                  src={getImage(feat.id)}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072042]/85 via-[#072042]/20 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] uppercase font-bold text-gold-300 bg-[#072042]/85 px-2.5 py-0.5 rounded-md border border-gold-500/30 backdrop-blur-md">
                    0{idx + 1}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {feat.title}
                  </h3>
                </div>
              </div>

              {/* Card Interior */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {feat.description}
                </p>

                <div className="pt-3 border-t border-warm-200 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Omega Trade Pillar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* 6th Slot: Integrated Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-br from-[#072042] via-navy-900 to-[#072042] text-white rounded-3xl p-6 sm:p-8 border border-gold-500/40 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group min-h-[300px]"
          >
            <div className="space-y-3 relative z-10">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
                Partner With Us
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Start Your Export Inquiry
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Connect with our Australian trade desk to explore quality supply & international trade opportunities.
              </p>
            </div>

            <div className="pt-4 relative z-10">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-3 px-4 bg-gold-gradient hover:opacity-95 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01] min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-gold-100" />
                <span>Get a Quotation</span>
                <ArrowRight className="w-4 h-4 text-gold-200" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
