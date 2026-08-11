import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact({ onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Trade Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-warm-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-600 text-[11px] sm:text-xs font-semibold uppercase tracking-widest border border-gold-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
            International Trade Desk & Contact
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Get in touch with our food export division to discuss product specifications, cold-chain freight schedules, or custom packaging options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-navy-900 rounded-2xl p-5 sm:p-8 text-white shadow-xl border border-gold-500/20 space-y-5 sm:space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold">Trade Enquiries</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">Omega Exports Trade Office</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 font-light">
                  Our trade desk provides responsive service for global importers across multiple timezones.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Export Inquiries Email</span>
                    <span className="font-medium text-white break-all">trade@omegaexports.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Global Trade Line</span>
                    <span className="font-medium text-white">+1 (800) OMEGA-FOOD / International Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Operating Hours</span>
                    <span className="font-medium text-white">Monday – Friday: 08:00 – 18:00 (UTC/GMT)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-3.5 bg-gold-gradient text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-lg hover:opacity-95 transition-all text-center block min-h-[44px]"
                >
                  Open Quotation Request Form
                </button>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-warm-300 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-navy-900 font-semibold text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Fast Business Response</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                For detailed freight schedules and price quotations, please use the quotation form to specify your target destination port and container volume.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-8 shadow-executive border border-warm-300">
            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">Message Sent Successfully</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out to Omega Exports International. Our trade desk will respond to your inquiry shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 bg-navy-900 text-white text-xs font-semibold rounded-xl min-h-[44px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 mb-2">Send a General Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. s.jenkins@globalimporters.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Apex Commodities"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    >
                      <option value="General Trade Inquiry">General Trade Inquiry</option>
                      <option value="Product Specifications">Product Specifications</option>
                      <option value="Logistics & Shipping Lines">Logistics & Shipping Lines</option>
                      <option value="Private Label Sourcing">Private Label Sourcing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your inquiry here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-warm-50 border border-warm-300 rounded-xl text-base sm:text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

