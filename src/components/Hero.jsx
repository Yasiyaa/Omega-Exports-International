import React, { useState, useEffect } from 'react';
import { ShieldCheck, ThermometerSnowflake, Globe2, ArrowRight, FileText, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_INFO } from '../data/siteData';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1920&q=85',
    badge: 'Australian Quality. Global Ambition.',
    title: 'Connecting Australian Products with International Markets',
    subtitle: 'Omega Exports International Pty Ltd is an Australian based international export and trading company.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85',
    badge: 'Premium Meat & Protein',
    title: 'Quality Australian Meat Exports',
    subtitle: 'Sourcing quality Australian meat and protein products for international customers.'
  },
  {
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1920&q=85',
    badge: 'Fresh Agricultural Produce',
    title: 'Australian Fruits & Fresh Vegetables',
    subtitle: 'Connecting international buyers with quality Australian fresh produce and food products.'
  }
];

export default function Hero({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="home" className="relative min-h-[100dvh] pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-24 flex items-center bg-navy-950 text-white overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal, ultra-light gradient overlays for maximum image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-transparent to-navy-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-3.5 sm:space-y-6 text-left">
          
          {/* Company Brand Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-navy-950/80 border border-gold-400/50 text-gold-300 text-[10px] sm:text-sm font-semibold backdrop-blur-md shadow-lg"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 animate-ping"></span>
            <span className="tracking-wide uppercase text-[9px] sm:text-[11px] truncate">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1] drop-shadow-lg">
              OMEGA EXPORTS INTERNATIONAL
            </h1>
            <p className="text-xl xs:text-2xl sm:text-4xl text-gold-300 font-serif font-semibold italic drop-shadow-md">
              {BRAND_INFO.tagline}
            </p>
          </motion.div>

          {/* Key Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gold-200 text-base sm:text-2xl font-serif font-medium drop-shadow-md"
          >
            Connecting Australian products with international markets.
          </motion.p>

          {/* Subheading / Description Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl drop-shadow-lg"
          >
            {BRAND_INFO.heroText}
          </motion.p>

          {/* Vision statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gold-300 font-serif italic text-sm sm:text-lg font-normal"
          >
            {BRAND_INFO.heroVision}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-2 sm:pt-4"
          >
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-gradient text-white text-sm sm:text-base font-semibold rounded-xl shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 sm:gap-3 group min-h-[44px]"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gold-100" />
              <span>Get a Quotation</span>
              <ArrowRight className="w-4 h-4 text-gold-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#products"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-navy-950/80 hover:bg-navy-900 text-white border border-gold-400/40 hover:border-gold-400/70 text-sm sm:text-base font-semibold rounded-xl backdrop-blur-md transition-all text-center flex items-center justify-center min-h-[44px]"
            >
              Explore Our Products
            </a>
          </motion.div>

          {/* Export Capabilities Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 sm:pt-8 border-t border-slate-600/50 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4"
          >
            <div className="flex items-center gap-2.5 bg-navy-950/75 p-2 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-1.5 sm:p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <ThermometerSnowflake className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">Logistics</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Cold-Chain Guaranteed</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-navy-950/75 p-2 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-1.5 sm:p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">Standard</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Full Quality Inspection</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-navy-950/75 p-2 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-1.5 sm:p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">Distribution</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Multimodal Freight</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Slider Controls & Indicators Responsive Box */}
      <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-8 sm:bottom-8 z-20 flex items-center justify-between sm:justify-start gap-2 sm:gap-3 bg-navy-950/90 p-1.5 sm:p-2.5 rounded-2xl border border-gold-500/40 backdrop-blur-md shadow-2xl">
        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          title="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-1">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? 'w-5 sm:w-8 bg-gold-400 shadow-gold-glow'
                  : 'w-2 sm:w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          title="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

    </section>
  );
}

