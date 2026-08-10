import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Globe, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: defaultProduct || 'Prime Beef',
    quantity: '',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => setSubmitted(false), 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-warm-300 my-4 sm:my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-navy-900 px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b border-gold-500/20 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse"></span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-semibold">B2B Trade Inquiries</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mt-0.5">
                Request an Export Quotation
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8 space-y-4"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
                  Quotation Request Received
                </h4>
                <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-base leading-relaxed">
                  Thank you, <span className="font-semibold text-navy-900">{formData.name}</span>. Our international trade desk is reviewing your requirements for <span className="font-semibold text-gold-600">{formData.product}</span>.
                </p>

                <div className="bg-warm-100 p-4 rounded-xl max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 border border-warm-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-medium text-navy-900">{formData.company || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Destination:</span>
                    <span className="font-medium text-navy-900">{formData.destination || 'Unspecified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Quantity:</span>
                    <span className="font-medium text-navy-900">{formData.quantity || 'Standard FCL'}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  A representative will reach out to <span className="underline">{formData.email}</span> within 24 business hours.
                </p>

                <button
                  onClick={onClose}
                  className="mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md"
                >
                  Close & Continue Browsing
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm">
                  Complete the export inquiry details below to receive competitive bulk pricing, freight schedules, and technical packaging specifications.
                </p>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. wright@importcorp.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Global Foods Trading Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    />
                  </div>

                  {/* Product Category */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Product Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    >
                      <option value="Prime Beef">Beef (Chilled & Frozen Cuts)</option>
                      <option value="Lamb & Mutton">Lamb & Mutton (Racks, Loins, Carcass)</option>
                      <option value="Specialty Meats">Assorted Specialty Meats</option>
                      <option value="Fresh Vegetables">Fresh Vegetables (Cold-Chain Produce)</option>
                      <option value="Premium Fruits">Premium Fruits (Citrus, Apples, Berries)</option>
                      <option value="Multiple Product Categories">Multiple Product Mix</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Estimated Quantity <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      placeholder="e.g. 1 x 40ft Reefer / 20 Metric Tons"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Destination Country / Port <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="e.g. Port of Rotterdam / Singapore"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Message / Specifications
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Specify cut requirements, packaging preferences, temperature constraints, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-warm-50 border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-base sm:text-sm text-slate-800"
                  ></textarea>
                </div>

                {/* Trust Badges & Submit */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-warm-200 mt-3">
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      Direct Export Pricing
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      Global Sea & Air Freight
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gold-gradient text-white hover:opacity-95 font-semibold rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50 min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
