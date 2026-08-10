import React from 'react';
import { SERVICES } from '../data/servicesData';
import { PackageCheck, ThermometerSnowflake, Tags, ShieldCheck, Check, ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services({ onOpenQuote }) {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-gold-500" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-6 h-6 text-gold-500" />;
      case 'Tags': return <Tags className="w-6 h-6 text-gold-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-gold-500" />;
      default: return <Briefcase className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-warm-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-600 text-[11px] sm:text-xs font-semibold uppercase tracking-widest border border-gold-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Core Export Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
            End-to-End Export Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Omega Exports International manages every aspect of food export trade, ensuring compliance, temperature control, and seamless delivery to world markets.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-executive hover:shadow-executive-hover border border-warm-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-warm-100 border border-gold-300/60 flex items-center justify-center shadow-inner group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    {getServiceIcon(srv.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900">
                      {srv.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gold-600 font-semibold">
                      Export Operations
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {srv.description}
                </p>

                <ul className="space-y-2 pt-1 sm:pt-2">
                  {srv.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-warm-200">
                <button
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy-900 hover:text-gold-600 transition-colors py-2 min-h-[40px]"
                >
                  <span>Request Service Details</span>
                  <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
