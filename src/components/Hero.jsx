import React, { useState, useEffect } from 'react';
import { ShieldCheck, ThermometerSnowflake, Globe2, ArrowRight, FileText, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    image: '/assets/hero_logistics.jpg',
    badge: 'Cold-Chain Shipping Logistics',
    title: 'Global Food Freight Operations',
    subtitle: 'Seamless ocean and air freight logistics delivering temperature-controlled consignments to international ports.'
  },
  {
    image: '/assets/beef_export.jpg',
    badge: 'Prime Beef Exports',
    title: 'Pasture-Raised Vacuum Sealed Cuts',
    subtitle: 'Chilled and deep-frozen prime beef cuts processed under strict sanitary and HACCP temperature standards.'
  },
  {
    image: '/assets/lamb_mutton.jpg',
    badge: 'Lamb & Mutton Sourcing',
    title: 'Export Grade Tender Lamb & Mutton',
    subtitle: 'Select lamb racks, loins, and carcasses packaged for global foodservice and retail distribution.'
  },
  {
    image: '/assets/vegetables_export.jpg',
    badge: 'Fresh Agriculture & Produce',
    title: 'Hydro-Cooled Fresh Vegetables',
    subtitle: 'Harvested at peak freshness and shipped in controlled atmosphere export packaging.'
  },
  {
    image: '/assets/fruits_export.jpg',
    badge: 'Premium Harvest Fruits',
    title: 'Orchard-Fresh Citrus, Apples & Berries',
    subtitle: 'Size and Brix-indexed export fruits sorted for international fresh produce markets.'
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
    <section id="home" className="relative min-h-[90vh] pt-24 sm:pt-32 pb-24 sm:pb-20 flex items-center bg-navy-950 text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6 text-left">
          
          {/* Company Brand Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-navy-950/80 border border-gold-400/50 text-gold-300 text-[10px] sm:text-sm font-semibold backdrop-blur-md shadow-lg"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold-400 animate-ping"></span>
            <span className="tracking-wide uppercase text-[10px] sm:text-[11px]">
              {HERO_SLIDES[currentSlide].badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            key={`headline-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1] drop-shadow-lg">
              Omega Exports International
            </h1>
            <p className="text-xl sm:text-3xl lg:text-4xl text-gold-gradient italic font-normal mt-1.5 sm:mt-2 drop-shadow-md">
              “Quality Beyond Borders”
            </p>
          </motion.div>

          {/* Subheading / Slide Description */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-100 text-sm sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl drop-shadow-lg"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <button
              onClick={() => onOpenQuote()}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-gradient text-white text-sm sm:text-base font-semibold rounded-xl shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 sm:gap-3 group"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-gold-100" />
              <span>Get a Quotation</span>
              <ArrowRight className="w-4 h-4 text-gold-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#products"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-navy-950/80 hover:bg-navy-900 text-white border border-gold-400/40 hover:border-gold-400/70 text-sm sm:text-base font-semibold rounded-xl backdrop-blur-md transition-all text-center"
            >
              Explore Product Lineup
            </a>
          </motion.div>

          {/* Export Capabilities Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6 sm:pt-8 border-t border-slate-600/50 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-3 bg-navy-950/75 p-2.5 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <ThermometerSnowflake className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">Logistics</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Cold-Chain Guaranteed</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-navy-950/75 p-2.5 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">Standard</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Full Quality Inspection</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-navy-950/75 p-2.5 sm:p-3 rounded-xl border border-slate-700/60 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 shrink-0">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-300 font-medium">Distribution</h4>
                <p className="text-xs sm:text-sm font-semibold text-white">Multimodal Freight</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Slider Controls & Indicators Responsive Box */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-10 sm:bottom-10 z-20 flex items-center justify-between sm:justify-start gap-3 bg-navy-950/90 p-2 sm:p-2.5 rounded-2xl border border-gold-500/40 backdrop-blur-md shadow-2xl">
        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
        </button>

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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
                  ? 'w-6 sm:w-8 bg-gold-400 shadow-gold-glow'
                  : 'w-2 sm:w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          title="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

    </section>
  );
}
