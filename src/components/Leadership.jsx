import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Building, Award } from 'lucide-react';
import { LEADERSHIP_PROFILES } from '../data/siteData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-widest">
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

        {/* 2 Director Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {LEADERSHIP_PROFILES.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#faf8f5] rounded-3xl p-6 sm:p-10 border border-gold-500/20 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#072042] text-gold-400 font-serif text-2xl font-bold flex items-center justify-center shrink-0 shadow-lg">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#072042]">
                      {profile.name}
                    </h3>
                    <div className="inline-block px-3 py-0.5 mt-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-800 text-xs font-semibold uppercase tracking-wider">
                      {profile.role}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                  {profile.bio}
                </div>
              </div>

              <div className="pt-4 border-t border-warm-300 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-gold-600" />
                  Omega Exports International Pty Ltd
                </span>
                <span className="text-gold-700 font-semibold uppercase tracking-wider">
                  Executive Director
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
