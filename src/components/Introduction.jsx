import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="introduction" className="py-16 sm:py-24 bg-[#faf8f5] text-navy-950 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#072042]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* Section 1: Quality Beyond Borders Header (Clean pill without left icon) */}
        <div className="max-w-4xl mx-auto text-center space-y-4">


          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            Quality Beyond Borders
          </h2>

          <p className="text-slate-700 text-base sm:text-xl font-light leading-relaxed">
            We work with trusted Australian suppliers and overseas buyers to establish reliable, efficient and long term trade partnerships.
          </p>

          <p className="text-gold-700 font-serif italic text-base sm:text-xl font-medium pt-1">
            Our focus is simple: quality products, reliable service, strong relationships and global ambition.
          </p>
        </div>

        {/* Section 2: Building Trade Through Quality and Trust (Who We Are Redesign) */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gold-500/20 shadow-2xl space-y-10">

          {/* Header Row (Clean Title, Removed Top-Right Card) */}
          <div className="pb-6 border-b border-warm-200">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold block mb-1">
              Who We Are
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#072042]">
              Building Trade Through Quality and Trust
            </h3>
          </div>

          {/* Narrative Content (Left) & Image Showcase (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border-l-4 border-gold-500">
                <p className="text-[#072042] font-serif font-medium text-lg sm:text-xl leading-snug">
                  At Omega Exports International, we believe successful international trade is built on quality, trust, reliability and strong relationships.
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base">
                Our business connects Australian producers and suppliers with international importers, distributors, wholesalers, retailers, hospitality businesses and commercial buyers.
              </p>

              <p className="text-slate-600 text-sm sm:text-base">
                Our current operations are focused on Sri Lanka, where we are developing our supply and distribution relationships and establishing a strong foundation for future growth.
              </p>

              <p className="text-slate-600 text-sm sm:text-base">
                Our long term vision extends well beyond our current market. We are actively looking towards international expansion, with China and London and the United Kingdom identified as key markets for our future growth, alongside opportunities across other global markets.
              </p>
            </div>

            {/* Attractive 2-Card Staggered Image Showcase (5 cols) */}
            <div className="lg:col-span-5 space-y-4">

              {/* Image 1: Australian Quality Meats */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group h-48 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85"
                  alt="Quality Australian Meat & Protein Exports"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072042]/90 via-[#072042]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-white font-serif">Australian Meat & Protein</span>
                  <span className="text-[10px] uppercase font-bold text-gold-300 bg-[#072042]/90 px-2.5 py-0.5 rounded border border-gold-500/30 backdrop-blur-md">
                    Export Sourced
                  </span>
                </div>
              </div>

              {/* Image 2: Australian Fresh Produce */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold-500/30 group h-48 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh Australian Fruits & Vegetables"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072042]/90 via-[#072042]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-white font-serif">Fresh Produce & Fruits</span>
                  <span className="text-[10px] uppercase font-bold text-gold-300 bg-[#072042]/90 px-2.5 py-0.5 rounded border border-gold-500/30 backdrop-blur-md">
                    Quality Harvest
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Executive Feature Pillars */}
          <div className="pt-8 border-t border-warm-200 grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-gold-500/20 space-y-2 hover:border-gold-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#072042] text-gold-400 flex items-center justify-center shadow-sm mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#072042] text-base">Trusted Sourcing</h4>
              <p className="text-xs text-slate-600 font-light">Connecting top Australian producers & premium suppliers.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-gold-500/20 space-y-2 hover:border-gold-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#072042] text-gold-400 flex items-center justify-center shadow-sm mb-1">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#072042] text-base">Reliable Supply</h4>
              <p className="text-xs text-slate-600 font-light">Dependable supply chain & distribution relationships.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf8f5] border border-gold-500/20 space-y-2 hover:border-gold-500/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#072042] text-gold-400 flex items-center justify-center shadow-sm mb-1">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-[#072042] text-base">Global Reach</h4>
              <p className="text-xs text-slate-600 font-light">Expanding from Sri Lanka towards China & the UK.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
