import React from 'react';
import { SOLUTIONS } from '../data/solutionsData';
import { Store, UtensilsCrossed, Factory, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solutions({ onOpenQuote }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Store': return <Store className="w-6 h-6 text-gold-400" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-gold-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-gold-400" />;
      default: return <Layers className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Tailored Export Trade Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Industry Solutions for Global Importers
          </h2>
          <p className="text-slate-300 text-sm sm:text-lg font-light leading-relaxed">
            Whether you operate nationwide retail supermarket networks, high-end hospitality chains, or commercial food processing facilities, Omega Exports provides customized sourcing programs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTIONS.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-navy-900/80 rounded-2xl p-5 sm:p-8 border border-gold-500/20 hover:border-gold-500/50 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4 sm:space-y-6">
                
                {/* Header Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-navy-950 border border-gold-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                  {getIcon(sol.icon)}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gold-400/90 font-medium uppercase tracking-wider mt-1">
                    {sol.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {sol.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 pt-3 sm:pt-4 border-t border-slate-800">
                  {sol.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Action */}
              <div className="pt-6 sm:pt-8">
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-3 bg-navy-950 hover:bg-gold-gradient text-white text-xs font-semibold uppercase tracking-wider rounded-xl border border-gold-500/30 hover:border-transparent transition-all flex items-center justify-center gap-2 group-hover:shadow-lg min-h-[44px]"
                >
                  <span>Inquire for {sol.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

