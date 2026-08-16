import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: defaultProduct || 'Meat & Protein',
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
          className="fixed inset-0 bg-[#072042]/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-gold-500/30 my-2 sm:my-8 max-h-[92dvh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="bg-[#072042] px-4 xs:px-6 py-3.5 sm:py-5 text-white flex items-center justify-between border-b border-gold-500/20 shrink-0 gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <img
                src="/assets/1 logo_Logo concept 1 copy 2.png"
                alt="Omega Exports Logo"
                className="h-7 xs:h-8 sm:h-10 w-auto object-contain filter brightness-110 contrast-125 shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold block truncate">
                  Omega Exports International
                </span>
                <h3 className="text-sm xs:text-base sm:text-2xl font-serif font-bold text-white mt-0.5 truncate">
                  Tell Us What You Are Looking For
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 xs:p-6 sm:p-8 overflow-y-auto flex-1">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#072042]">
                  Request Received
                </h4>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed font-light">
                  Thank you, <span className="font-semibold text-[#072042]">{formData.name}</span>. Our team is reviewing your requirements for <span className="font-semibold text-gold-700">{formData.product}</span>.
                </p>

                <div className="bg-[#faf8f5] p-4 rounded-2xl max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 border border-warm-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-medium text-[#072042]">{formData.company || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Destination:</span>
                    <span className="font-medium text-[#072042]">{formData.destination || 'Unspecified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Quantity:</span>
                    <span className="font-medium text-[#072042]">{formData.quantity || 'N/A'}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 pt-1">
                  We will contact you at <span className="underline font-medium">{formData.email}</span> shortly.
                </p>

                <button
                  onClick={onClose}
                  className="mt-4 px-8 py-3 bg-[#072042] hover:bg-navy-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md"
                >
                  Close & Continue
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  Looking for Australian meat, fresh produce or selected food products? Send us your requirements and our team can review your request.
                </p>

                {/* Form Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="business@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Company <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    />
                  </div>

                  {/* Product */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Product <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    >
                      <option value="Meat & Protein">Meat & Protein</option>
                      <option value="Fresh Produce">Fresh Produce</option>
                      <option value="Food & Agricultural Products">Food & Agricultural Products</option>
                      <option value="Multiple Product Categories">Multiple Product Portfolio</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Quantity <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      placeholder="e.g. Kg to Container"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Destination <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="Country / Destination Port"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Provide additional details regarding your request..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none transition text-sm text-slate-800"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-warm-200 mt-4">
                  <span className="text-xs text-slate-500 font-medium">
                    Omega Exports International Pty Ltd
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gold-gradient text-white hover:opacity-95 font-semibold uppercase tracking-wider rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50 min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request a Quotation</span>
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
