import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, FileText, ArrowRight, ShieldCheck, ThermometerSnowflake, Globe2, X } from 'lucide-react';

const ARTICLES = [
  {
    id: 'meat-export-standards',
    category: 'Meat & Livestock',
    title: 'Australian Beef & Lamb Export Standards: Cold-Chain Integrity & Quality',
    snippet: 'An overview of Australia’s rigorous export regulations, meat grading standards, and end-to-end cold-chain logistics ensuring world-class protein delivery.',
    readTime: '4 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    content: [
      'Australia is recognized worldwide for producing some of the highest quality beef, lamb, and mutton. Strict biosecurity regulations, natural grass-fed pastures, and advanced processing facilities ensure that Australian red meat consistently meets international trade benchmarks.',
      'Maintaining cold-chain integrity is central to meat export logistics. From processing facilities to refrigerated sea containers and air freight pallets, temperature control is monitored to prevent spoilage and extend shelf life for overseas distributors, commercial caterers, and retail chains.',
      'Additionally, Australian red meat export processors adhere to strict international trade specifications, including AUS-MEAT language and grading, as well as accredited Halal certification processes for Islamic import requirements across the Middle East, South Asia, and Southeast Asia.',
      'At Omega Exports International, we work alongside certified Australian producers to deliver premium beef, lamb, and mutton tailored to international market specifications.'
    ]
  },
  {
    id: 'fresh-produce-sourcing',
    category: 'Agricultural Produce',
    title: 'Sourcing Fresh Australian Produce: Seasonal Supply & Export Quality',
    snippet: 'Discover how Australia’s diverse agricultural climates provide year-round access to premium fresh vegetables, citrus, and table grapes for global buyers.',
    readTime: '3 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85',
    content: [
      'Australia’s unique geography spans tropical, subtropical, and temperate growing regions. This climatic diversity enables Australian agricultural growers to produce high-grade fresh vegetables, citrus fruits, table grapes, and stone fruits across varying seasons.',
      'Export-grade produce is harvested at peak maturity and immediately hydro-cooled or pre-chilled to lock in freshness, flavor, and nutritional value. Rapid air freight and temperature-controlled sea freight ensure produce arrives in prime condition at destination ports.',
      'Global importers and commercial wholesalers choose Australian fresh produce for its food safety compliance, clean growing environment, and traceability standards.',
      'Omega Exports International coordinates directly with trusted Australian growers to source and deliver premium fresh produce tailored to international importer volume requirements.'
    ]
  },
  {
    id: 'export-logistics-compliance',
    category: 'Logistics & Trade',
    title: 'Navigating Freight Logistics & Compliance in International Food Export',
    snippet: 'Essential steps for international buyers requesting B2B food exports from Australia: documentation, sanitary certificates, and customs clearance.',
    readTime: '5 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=85',
    content: [
      'Successful international food trading requires meticulous compliance with both Australian export regulations and destination country import protocols. Key documentation includes Export Permits, Health & Phytosanitary Certificates issued by the Department of Agriculture, Fisheries and Forestry (DAFF), Certificates of Origin, and Bills of Lading.',
      'Efficient freight routing—combining refrigerated sea freight for bulk shipments with express air freight for perishable items—ensures optimal lead times and cost efficiency for B2B trade partners.',
      'Omega Exports International manages every stage of the export documentation process, ensuring seamlessly compliant customs documentation and reliable freight dispatch for commercial buyers worldwide.'
    ]
  }
];

const FAQS = [
  {
    question: 'What products does Omega Exports International export?',
    answer: 'Omega Exports International specializes in sourcing and supplying quality Australian meat (beef, lamb, mutton), fresh produce (fresh vegetables and seasonal fruits), and selected food products for international commercial buyers, distributors, and wholesalers.'
  },
  {
    question: 'How is cold-chain quality maintained during international shipment?',
    answer: 'All chilled and frozen shipments utilize continuous temperature monitoring, specialized reefer containers for ocean freight, and thermal insulation packaging for air freight, ensuring temperature integrity from Australian packing plants to international destination ports.'
  },
  {
    question: 'Are Halal-certified Australian meat products available?',
    answer: 'Yes. We partner with accredited Australian processing plants that follow strict Australian Government Supervised Halal Program (AGSHP) standards, providing full Halal certification documents for imported shipments upon request.'
  },
  {
    question: 'Which international markets does Omega Exports International serve?',
    answer: 'Our current primary export operations serve Sri Lanka, with strategic trade expansion planned into the United Kingdom (London), China, the Middle East, and broader international markets.'
  },
  {
    question: 'How can international buyers request an export quotation?',
    answer: 'Buyers can submit a quotation request through our online quotation modal or by contacting our export trade team directly at info@omegaexportsinternational.com.au or +61 405 350 097 with product specifications and target delivery destinations.'
  }
];

export default function Insights({ onOpenQuote }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="insights" className="py-16 sm:py-24 bg-[#faf8f5] text-navy-950 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-800 text-xs font-semibold uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Export Insights & Trade Knowledge</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#072042] tracking-tight">
            Industry Articles & Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed">
            Expert guidance on Australian agricultural exports, cold-chain standards, and international B2B trade compliance.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#072042]/90 text-gold-300 text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md border border-gold-500/30">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#072042] group-hover:text-gold-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {article.snippet}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#072042] group-hover:text-gold-700 transition-colors gap-1.5">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gold-500/20 shadow-xl space-y-8">
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-bold block mb-1">
              B2B Buyer FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#072042]">
              Frequently Asked Questions About Australian Food Export
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-serif font-bold text-[#072042] hover:text-gold-700 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/60 transition-colors text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-gold-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 bg-white"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Quick CTA Box inside FAQ */}
          <div className="p-6 rounded-2xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-gold-500/30">
            <div>
              <h4 className="font-serif font-bold text-lg text-gold-300">Ready to discuss your export requirements?</h4>
              <p className="text-xs text-slate-300 font-light">Request a tailored wholesale quotation for Australian meat or fresh produce.</p>
            </div>
            <button
              onClick={() => onOpenQuote && onOpenQuote()}
              className="px-6 py-3 bg-gold-gradient text-white text-xs font-semibold rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 min-h-[44px] flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Get a Quotation</span>
            </button>
          </div>
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-[#072042]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner Header */}
              <div className="relative h-56 sm:h-64 shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072042] via-[#072042]/40 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-navy-950/80 text-white hover:bg-gold-500 hover:text-[#072042] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-300 bg-[#072042]/80 px-2.5 py-0.5 rounded border border-gold-500/30">
                    {selectedArticle.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                    {selectedArticle.title}
                  </h3>
                </div>
              </div>

              {/* Modal Article Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">Published by Omega Exports International Trade Team</span>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      if (onOpenQuote) onOpenQuote();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-gold-gradient text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Inquire About Export Logistics</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
