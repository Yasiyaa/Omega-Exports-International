import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Products from './components/Products';
import Markets from './components/Markets';
import WhyOmega from './components/WhyOmega';
import Leadership from './components/Leadership';
import VisionCommitment from './components/VisionCommitment';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(productName || '');
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-sans">
      {/* Sticky Navigation Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Corporate Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <Introduction />
        <Products onOpenQuote={handleOpenQuote} />
        <Markets onOpenQuote={handleOpenQuote} />
        <WhyOmega onOpenQuote={handleOpenQuote} />
        <Leadership />
        <VisionCommitment onOpenQuote={handleOpenQuote} />
        <Insights onOpenQuote={handleOpenQuote} />
        <Contact onOpenQuote={handleOpenQuote} />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* B2B Quotation Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
