import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Services from './components/Services';
import About from './components/About';
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
    <div className="min-h-screen bg-warm-100 text-slate-800 flex flex-col font-sans">
      {/* Sticky Navigation Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <Products onOpenQuote={handleOpenQuote} />
        <Solutions onOpenQuote={handleOpenQuote} />
        <Services onOpenQuote={handleOpenQuote} />
        <About onOpenQuote={handleOpenQuote} />
        <Contact onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Reusable B2B Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
