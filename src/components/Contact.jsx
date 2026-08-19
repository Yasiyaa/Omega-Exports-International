import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building, Globe, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_INFO } from '../data/siteData';

export default function Contact({ onOpenQuote }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: 'Meat & Protein',
    quantity: '',
    destination: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activationNeeded, setActivationNeeded] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setActivationNeeded(false);

    try {
      const payload = new FormData();
      payload.append("_subject", `New B2B Export Quotation Request: ${formData.product} - ${formData.company || formData.name}`);
      payload.append("_replyto", formData.email);
      payload.append("_template", "table");
      payload.append("_captcha", "false");
      payload.append("Customer Name", formData.name);
      payload.append("Customer Email", formData.email);
      payload.append("Company Name", formData.company);
      payload.append("Product Category", formData.product);
      payload.append("Quantity Required", formData.quantity);
      payload.append("Destination Port / Country", formData.destination);
      payload.append("Special Message / Requirements", formData.message || "No additional message specified.");

      const response = await fetch("https://formsubmit.co/ajax/omegaexpintl@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: payload
      });

      const result = await response.json();
      console.log("Contact FormSubmit Result:", result);

      if (result.message && result.message.toLowerCase().includes("activation")) {
        setActivationNeeded(true);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Contact submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf8f5] text-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-700 text-xs font-semibold uppercase tracking-widest">
            <Mail className="w-4 h-4 text-gold-600" />
            <span>International Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            Contact & Quotation Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Connecting Australian producers with international buyers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Corporate Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#072042] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-gold-500/30 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Australian Office</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  OMEGA EXPORTS INTERNATIONAL Pty Ltd
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 font-light leading-relaxed">
                  Australian based international export and trading company connecting quality products with overseas markets.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Australian Direct Line</span>
                    <a
                      href={BRAND_INFO.phoneTel}
                      className="font-medium text-white hover:text-gold-300 transition-colors text-sm sm:text-base font-semibold block"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters</span>
                    <span className="font-medium text-white">Melbourne, Victoria, Australia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Entity Type</span>
                    <span className="font-medium text-white">Australian Proprietary Company (Pty Ltd)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={BRAND_INFO.phoneTel}
                  className="w-full py-3.5 bg-gold-gradient text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-lg hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-gold-100" />
                  <span>Call Us Now</span>
                </a>

                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-gold-300 border border-gold-500/30 text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors text-center block min-h-[40px]"
                >
                  Open Quotation Request Form
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gold-500/20 shadow-sm space-y-2">
              <span className="text-xs font-serif font-bold text-[#072042] uppercase tracking-wider block">
                Brand Promise
              </span>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Quality Beyond Borders. From Australia to the World. Premium products, trusted partnerships, global reach.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gold-500/20">
            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className={`w-16 h-16 ${activationNeeded ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'} rounded-full flex items-center justify-center mx-auto shadow-inner`}>
                  {activationNeeded ? <Mail className="w-10 h-10" /> : <CheckCircle2 className="w-10 h-10" />}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#072042]">
                  {activationNeeded ? "One-Time Activation Required" : "Request Submitted"}
                </h3>
                {activationNeeded ? (
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl max-w-md mx-auto text-left text-xs sm:text-sm text-amber-950 space-y-2">
                    <p className="font-semibold text-amber-900">
                      📩 FormSubmit sent a 1-click activation link to <span className="underline">omegaexpintl@gmail.com</span>!
                    </p>
                    <p className="text-amber-800 text-xs leading-relaxed">
                      Please open your Gmail inbox, check Spam/Promotions if needed, and click <strong>"Activate Form"</strong> once. After activating, all future quotation requests will deliver to your inbox automatically!
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in Omega Exports International. Requirement details have been sent to <span className="font-semibold text-[#072042]">omegaexpintl@gmail.com</span>.
                  </p>
                )}
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-8 py-3 bg-[#072042] hover:bg-navy-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md cursor-pointer min-h-[44px]"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#072042]">
                    Tell Us What You Are Looking For
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mt-1">
                    Looking for Australian meat, fresh produce or selected food products? Send us your requirements and our team can review your request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>

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
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Product <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    >
                      <option value="Meat & Protein">Meat & Protein</option>
                      <option value="Fresh Produce">Fresh Produce</option>
                      <option value="Food & Agricultural Products">Food & Agricultural Products</option>
                      <option value="Multiple Product Portfolio">Multiple Product Portfolio</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Quantity <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      required
                      placeholder={formData.product === 'Food & Agricultural Products' ? 'e.g. Bulk Commercial Volume' : 'e.g. Kg to Container'}
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Destination <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="Destination Port / Country"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Provide details about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#faf8f5] border border-warm-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-gold-500 focus:bg-white focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gold-gradient hover:opacity-95 text-white font-semibold uppercase tracking-wider text-xs sm:text-sm rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 min-h-[44px] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Request...</span>
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

        </div>

      </div>
    </section>
  );
}
