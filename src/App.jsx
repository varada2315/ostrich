import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import LegalModal from './components/LegalModal';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'products' | 'contact'
  
  const [cartItems, setCartItems] = useState([
    {
      id: 'prod-1',
      title: 'Solstice Sunbeam Mug',
      subtitle: 'Hand-carved sun emblem',
      price: 28,
      quantity: 1,
      image: '/images/mug_solntse.png'
    }
  ]);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Scroll to top when changing page views
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.title}" to your shopping bag!`);
  };

  const handleUpdateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from shopping bag.');
  };

  const handleCheckout = () => {
    setCartItems([]);
    setIsCartOpen(false);
    showToast('Thank you for choosing Ostra Craft! Our team will contact you on WhatsApp shortly.');
  };

  const handleSubscribe = (email) => {
    showToast(`Thank you for subscribing (${email}) to Ostra Craft updates!`);
  };

  const handleContactSubmit = (formData) => {
    showToast(`Thank you ${formData.name}! Your message has been sent to Yadu Solanki.`);
  };

  return (
    <div className="app-main">
      {/* Prominent Abstract Floating Background Blobs */}
      <div className="abstract-bg-container">
        <div className="abstract-blob blob-1"></div>
        <div className="abstract-blob blob-2"></div>
        <div className="abstract-blob blob-3"></div>
      </div>

      <Navbar 
        activePage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage 
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage 
            onAddToCart={handleAddToCart}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactUsPage 
            onSubmitContact={handleContactSubmit}
          />
        )}
      </main>

      <Footer 
        onSubscribe={handleSubscribe} 
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <QuickViewModal 
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <LegalModal 
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp Action Button */}
      <a 
        href="https://wa.me/918126308803?text=Hello%20Ostra%20Craft,%20I'm%20interested%20in%20your%20handcrafted%20pottery%20products." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-fab"
        title="Chat on WhatsApp (+91 8126308803)"
      >
        <MessageCircle size={28} />
      </a>

      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={18} style={{ color: '#A3C6B4' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
