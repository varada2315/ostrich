import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, cartCount, onOpenCart }) {
  return (
    <header className="header-wrapper">
      <div className="container header-container">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="brand-logo" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <div className="logo-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12l1 4h-14z"/>
              <path d="M5 7c0 8 2 13 7 13s7-5 7-13"/>
              <path d="M9 3v4"/>
              <path d="M15 3v4"/>
            </svg>
          </div>
          <div className="brand-title">
            <span>Ostra Craft</span>
            <span className="brand-tagline">Crafted for Timeless Living</span>
          </div>
        </a>

        {/* Navigation Bar strictly with 4 page links */}
        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-link ${activePage === 'home' ? 'active-page' : ''}`}
                onClick={() => onNavigate('home')}
                style={{ 
                  fontWeight: activePage === 'home' ? 700 : 500,
                  color: activePage === 'home' ? 'var(--color-terracotta)' : 'var(--color-text-dark)'
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'about' ? 'active-page' : ''}`}
                onClick={() => onNavigate('about')}
                style={{ 
                  fontWeight: activePage === 'about' ? 700 : 500,
                  color: activePage === 'about' ? 'var(--color-terracotta)' : 'var(--color-text-dark)'
                }}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'products' ? 'active-page' : ''}`}
                onClick={() => onNavigate('products')}
                style={{ 
                  fontWeight: activePage === 'products' ? 700 : 500,
                  color: activePage === 'products' ? 'var(--color-terracotta)' : 'var(--color-text-dark)'
                }}
              >
                Products
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activePage === 'contact' ? 'active-page' : ''}`}
                onClick={() => onNavigate('contact')}
                style={{ 
                  fontWeight: activePage === 'contact' ? 700 : 500,
                  color: activePage === 'contact' ? 'var(--color-terracotta)' : 'var(--color-text-dark)'
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a 
            href="https://wa.me/918126308803?text=Hello%20Ostra%20Craft,%20I'm%20interested%20in%20your%20handcrafted%20pottery%20products." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          <button className="btn-terracotta" onClick={() => onNavigate('products')}>
            <span>Shop Now</span>
          </button>

          <button className="cart-trigger-btn" onClick={onOpenCart} aria-label="Cart">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
