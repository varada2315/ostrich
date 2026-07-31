import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, MessageCircle } from 'lucide-react';

export default function Footer({ onSubscribe, onOpenLegal }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section" id="contacts">
      <div className="container">
        {/* Upper Card Container */}
        <div className="footer-card">
          <div className="footer-grid">
            {/* Left Block: Studio Contact & Founder Info */}
            <div className="footer-contact">
              <h3>Visit Our Studio</h3>
              <p style={{ color: '#6B625C', marginBottom: 20, fontSize: 15 }}>
                Ostra Craft by Yadu Solanki — Handcrafted functional art for timeless living.
              </p>
              <ul className="contact-list">
                <li className="contact-item">
                  <MapPin size={20} />
                  <span>Ostra Craft Pottery Studio<br />Artisan Guild Quarter</span>
                </li>
                <li className="contact-item">
                  <Clock size={20} />
                  <span>Open Daily: 09:00 AM – 08:00 PM</span>
                </li>
                <li className="contact-item">
                  <Phone size={20} />
                  <span>WhatsApp / Phone: +91 8126308803</span>
                </li>
              </ul>
            </div>

            {/* Right Block: Newsletter & Line Art Illustration */}
            <div className="newsletter-box">
              <h3>Stay Connected &<br />Receive Special Editions</h3>
              <form onSubmit={handleSubmit} className="newsletter-form-row">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="newsletter-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-terracotta">
                  <span>Subscribe</span>
                </button>
              </form>

              {/* Line Art Vector Illustration of Pottery Vessels & Kiln */}
              <div className="footer-line-art">
                <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Pot 1 */}
                  <path d="M20 50 C20 30, 10 30, 10 20 C10 15, 25 15, 25 20 C25 30, 15 30, 15 50 Z" stroke="#D4685C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <ellipse cx="17.5" cy="50" rx="7.5" ry="2.5" stroke="#D4685C" strokeWidth="1.5"/>
                  
                  {/* Kiln Oven */}
                  <rect x="130" y="20" width="40" height="35" rx="4" stroke="#D4685C" strokeWidth="1.5"/>
                  <path d="M140 35 C140 28, 160 28, 160 35 L160 55 L140 55 Z" stroke="#D4685C" strokeWidth="1.5"/>
                  <circle cx="150" cy="12" r="4" stroke="#D4685C" strokeWidth="1.5"/>

                  {/* Vases on shelf */}
                  <path d="M60 45 C55 35, 65 25, 60 20 L70 20 C65 25, 75 35, 70 45 Z" stroke="#D4685C" strokeWidth="1.5"/>
                  <path d="M85 45 C80 38, 90 30, 85 24 L95 24 C90 30, 100 38, 95 45 Z" stroke="#D4685C" strokeWidth="1.5"/>

                  {/* Pottery Wheel Stand */}
                  <ellipse cx="110" cy="40" rx="14" ry="4" stroke="#D4685C" strokeWidth="1.5"/>
                  <line x1="110" y1="44" x2="110" y2="55" stroke="#D4685C" strokeWidth="1.5"/>
                  <ellipse cx="110" cy="55" rx="18" ry="5" stroke="#D4685C" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Legal Links */}
        <div className="footer-bottom-bar">
          <div className="social-links">
            <a 
              href="https://wa.me/918126308803" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a href="#" className="social-icon-btn" title="Instagram">
              <span style={{ fontWeight: 700, fontSize: 13 }}>IG</span>
            </a>
            <a href="#" className="social-icon-btn" title="Pinterest">
              <span style={{ fontWeight: 700, fontSize: 13 }}>PT</span>
            </a>
          </div>

          <div className="copyright-text">
            © 2026 Ostra Craft by Yadu Solanki. All rights reserved.
          </div>

          <div className="footer-links">
            <button onClick={() => onOpenLegal('terms')}>Terms of Service</button>
            <button onClick={() => onOpenLegal('privacy')}>Privacy Policy</button>
            <button onClick={() => onOpenLegal('refund')}>Refund Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
