import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/siteData';

export default function Products({ onOpenQuote }) {
  return (
    <section id="products" className="py-16 sm:py-24 bg-[#faf8f5] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            What We Export
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Sourcing and supplying quality Australian meat, fresh produce, and food products for international customers.
          </p>
        </div>

        {/* 3 Premium Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gold-500/20 hover:shadow-2xl hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Image */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-[#072042]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072042]/90 via-[#072042]/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold px-2.5 py-0.5 border border-gold-500/40 rounded-md bg-[#072042]/80 backdrop-blur-md inline-block mb-1">
                    {product.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Content & Action */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full py-3 px-4 bg-[#072042] hover:bg-gold-gradient text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:shadow-lg min-h-[44px]"
                  >
                    <FileText className="w-4 h-4 text-gold-400 group-hover:text-white transition-colors" />
                    <span>Request Product Information</span>
                    <ArrowRight className="w-4 h-4 text-gold-400 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
