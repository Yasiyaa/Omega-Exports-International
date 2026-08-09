import React from 'react';
import { X, Check, Thermometer, ShieldCheck, Box, Calendar, FileText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetailModal({ product, onClose, onRequestQuote }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-warm-300 my-8"
        >
          {/* Header Bar */}
          <div className="bg-navy-900 px-6 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold px-2 py-0.5 rounded bg-navy-950">
                {product.category.toUpperCase()}
              </span>
              <h3 className="text-lg font-serif font-bold text-white truncate">
                {product.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Image Preview & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-warm-300 h-64 bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-gold-300 font-medium">{product.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-serif font-bold text-navy-900">{product.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Key Attributes */}
                <div className="space-y-2 pt-2">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2 border-b border-warm-200 pb-2">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                Technical Export Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="bg-warm-100 p-3 rounded-xl border border-warm-200">
                    <span className="text-[11px] font-semibold uppercase text-slate-500 block">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-navy-900 mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Minimum order sizes apply for full container loads (FCL) & air freight consignments.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onRequestQuote(product.name);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-gold-gradient text-white text-sm font-semibold rounded-xl shadow-lg shadow-gold-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <FileText className="w-4 h-4" />
                <span>Request Quotation for {product.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
