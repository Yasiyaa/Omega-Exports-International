import React, { useState } from 'react';
import { Globe, ShieldCheck, Thermometer, Anchor, HeartHandshake, Compass, CheckCircle2, ArrowRight, Layers, Sparkles, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ABOUT_PILLARS = [
  {
    id: 'livestock',
    title: 'Prime Protein & Livestock Sourcing',
    tagline: 'Pasture-Raised Beef, Lamb & Specialty Meats',
    image: '/assets/beef_export.jpg',
    description: 'We partner directly with accredited pasture-raised cattle and sheep stations. Every cut is hand-selected, vacuum-sealed, and chilled or deep-frozen under stringent HACCP protocols.',
    bullets: [
      'Grass-fed and grain-finished beef tenderloin, ribeye, and striploin',
      'Mountain-pasture tender lamb racks, saddles, and whole carcasses',
      'Zero chemical additives with full sanitary clearance & health certificates'
    ],
    stat: 'Sub-Zero Temp Control'
  },
  {
    id: 'produce',
    title: 'Fresh Agriculture & Horticulture',
    tagline: 'Hydro-Cooled Vegetables & Brix-Indexed Fruits',
    image: '/assets/vegetables_export.jpg',
    description: 'Sourced from agricultural growers at peak harvest. Hydro-cooled immediately post-harvest and packed into modified atmosphere export cartons for extended transit life.',
    bullets: [
      'Hydro-cooled broccoli, bell peppers, carrots, and onions',
      'Brix-sweetness calibrated citrus, apples, grapes, and berries',
      'Strict GAP certification & pesticide residue monitoring'
    ],
    stat: 'Modified Atmosphere'
  },
  {
    id: 'logistics',
    title: 'Global Cold-Chain Freight Network',
    tagline: 'Multimodal Maritime & Air Freight Logistics',
    image: '/assets/hero_logistics.jpg',
    description: 'Our international trade desk manages reefer shipping lanes across major ocean ports. Integrated telemetry sensors record continuous temperature data from packing to destination port.',
    bullets: [
      '20ft & 40ft High Cube refrigerated container loads (FCL)',
      'Continuous transit temperature telemetry logs',
      'Pre-shipment inspection reports & Phytosanitary documentation'
    ],
    stat: 'Continuous Telemetry'
  }
];

const EXPORT_PIPELINE = [
  {
    step: '01',
    title: 'Precision Sourcing',
    desc: 'Contract farm & station sourcing ensuring uniform grading and high yield.'
  },
  {
    step: '02',
    title: 'Cold-Chain Processing',
    desc: 'Immediate pre-cooling, vacuum sealing, and modified atmosphere packaging.'
  },
  {
    step: '03',
    title: 'Reefer Container Freight',
    desc: 'Multimodal sea & air shipping with real-time temperature tracking.'
  },
  {
    step: '04',
    title: 'Port Customs Clearance',
    desc: 'Complete sanitary, phytosanitary, and health certificate documentation.'
  }
];

export default function About({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient background elements */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-gold-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-navy-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-600 text-xs font-semibold uppercase tracking-widest border border-gold-300">
            <Compass className="w-3.5 h-3.5" />
            <span>Company Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight leading-tight">
            Connecting Global Importers to Premium Food Sourcing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            <strong>Omega Exports International</strong> operates at the intersection of agricultural excellence, cold-chain technology, and international trade compliance under our motto <em className="text-gold-600 font-serif font-medium">“Quality Beyond Borders”</em>.
          </p>
        </div>

        {/* NEW DESIGN: Interactive Sourcing Showcase Hub */}
        <div className="bg-navy-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-gold-500/30 mb-20">
          
          {/* Sourcing Hub Navigation Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-10 pb-6 border-b border-slate-800">
            {ABOUT_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-gold-gradient text-white shadow-lg shadow-gold-500/25 ring-2 ring-gold-400'
                    : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 border border-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-gold-200" />
                <span>{pillar.title}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Side: Image Showcase with Overlay Badge */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 h-72 sm:h-96 group">
                <img
                  src={ABOUT_PILLARS[activeTab].image}
                  alt={ABOUT_PILLARS[activeTab].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-navy-900/90 text-gold-300 text-xs uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-lg border border-gold-500/30 backdrop-blur-md">
                  {ABOUT_PILLARS[activeTab].stat}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-lg font-serif font-bold text-white">
                    {ABOUT_PILLARS[activeTab].tagline}
                  </h4>
                </div>
              </div>

              {/* Right Side: Narrative & Key Highlights */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                    Operational Core 0{activeTab + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {ABOUT_PILLARS[activeTab].title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {ABOUT_PILLARS[activeTab].description}
                </p>

                <div className="space-y-3 pt-2">
                  {ABOUT_PILLARS[activeTab].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuote(ABOUT_PILLARS[activeTab].title)}
                    className="px-6 py-3 bg-gold-gradient hover:opacity-95 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center gap-2"
                  >
                    <span>Request Quotation for {ABOUT_PILLARS[activeTab].title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Visual Trade Pipeline Steps */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
              End-to-End International Export Pipeline
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-light mt-2">
              From contract sourcing to destination port clearance, our protocol guarantees food safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPORT_PIPELINE.map((pipe, idx) => (
              <div
                key={idx}
                className="bg-warm-100 p-6 rounded-2xl border border-warm-300 relative group hover:bg-white hover:shadow-executive hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="text-3xl font-serif font-extrabold text-gold-500/40 group-hover:text-gold-500 transition-colors mb-3">
                  {pipe.step}
                </div>
                <h4 className="text-base font-serif font-bold text-navy-900 mb-1.5">
                  {pipe.title}
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {pipe.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Commitment Callout */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 rounded-3xl p-8 sm:p-12 text-white border border-gold-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-gold-400">
              <Award className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold">Quality Commitment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to Expand Your Food Import Operations?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Connect with our international export trade desk for direct farm pricing, container shipping schedules, and packaging customization.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-8 py-4 bg-gold-gradient text-white font-semibold text-sm rounded-xl shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Immediate B2B Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
