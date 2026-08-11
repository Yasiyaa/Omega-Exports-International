import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/productsData';
import ProductDetailModal from './ProductDetailModal';
import { ArrowRight, Eye, FileText, Sparkles, Thermometer, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Products({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-24 bg-warm-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-600 text-[11px] sm:text-xs font-semibold uppercase tracking-widest border border-gold-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Export Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
            Premium Food Export Catalog
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            From pasture-raised beef and lamb to orchard-fresh fruits and organic farm vegetables, our products meet stringent global food safety and temperature control standards.
          </p>
        </div>

        {/* Category Filter Tabs - Horizontally Scrollable on Mobile */}
        <div className="relative mb-8 sm:mb-12 max-w-full">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2 sm:pb-0 gap-2 sm:gap-3 -mx-4 px-4 sm:mx-0">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 min-h-[40px] ${
                  activeCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-md shadow-navy-900/20 ring-2 ring-gold-500/50'
                    : 'bg-white text-slate-700 hover:bg-warm-200 border border-warm-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-executive hover:shadow-executive-hover border border-warm-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Box */}
              <div className="relative h-52 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-navy-900/90 text-gold-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-gold-500/30">
                    {product.category.toUpperCase()}
                  </span>
                </div>

                {/* Subtitle Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-base sm:text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium truncate mt-0.5">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Quick Spec Highlights */}
                <div className="bg-warm-50 p-2.5 sm:p-3 rounded-xl border border-warm-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Thermometer className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="truncate">Storage:</span>
                    </span>
                    <span className="font-semibold text-navy-900 truncate ml-1">{product.specs[0].value.split('/')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="truncate">Standard:</span>
                    </span>
                    <span className="font-semibold text-navy-900 truncate ml-1">Cold-Chain Grade</span>
                  </div>
                </div>

                {/* Buttons Action Bar */}
                <div className="pt-1 sm:pt-2 flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 py-2.5 px-2.5 sm:px-3 bg-warm-100 hover:bg-warm-200 text-navy-900 text-xs font-semibold rounded-xl border border-warm-300 transition-colors flex items-center justify-center gap-1 min-h-[40px]"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote(product.name)}
                    className="flex-1 py-2.5 px-2.5 sm:px-3 bg-gold-gradient hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-md shadow-gold-500/20 transition-all flex items-center justify-center gap-1 min-h-[40px]"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold-100 shrink-0" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed inspection */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(prodName) => onOpenQuote(prodName)}
        />

      </div>
    </section>
  );
}
