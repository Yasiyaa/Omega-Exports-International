import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_PROFILES } from '../data/siteData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-widest">
            <Users className="w-4 h-4 text-gold-600" />
            <span>Executive Board</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            Our Leadership
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Led by directors with extensive background in banking, financial services, business management, and international trade operations.
          </p>
        </div>

        {/* 2 Centered Director Cards with Round Photos & Blue Circular Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {LEADERSHIP_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#faf8f5] rounded-3xl p-5 xs:p-6 sm:p-10 border border-gold-500/20 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-6">
                
                {/* Centered Profile Photo & Title Block */}
                <div className="text-center space-y-3 pb-6 border-b border-warm-200">
                  
                  {/* Round Photo with Blue (Navy #072042) Frame Ring */}
                  <div className="relative mx-auto w-32 h-32 xs:w-44 xs:h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 sm:border-[6px] lg:border-[8px] border-[#072042] overflow-hidden shadow-2xl ring-4 sm:ring-6 lg:ring-8 ring-gold-500/30">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="pt-2">
                    <span className="inline-block px-3.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      {profile.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#072042]">
                      {profile.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      Omega Exports International Pty Ltd
                    </span>
                  </div>
                </div>

                {/* Director Biography */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line text-left">
                  {profile.bio}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-4 border-t border-warm-300 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-[#072042] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  Executive Governance
                </span>
                <span className="text-gold-700 font-semibold uppercase tracking-wider">
                  Board Director
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
