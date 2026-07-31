import React from 'react';
import { X, Shield, FileText, RotateCcw } from 'lucide-react';

export default function LegalModal({ isOpen, type, onClose }) {
  if (!isOpen || !type) return null;

  const contentMap = {
    terms: {
      title: "Terms of Service",
      icon: <FileText size={24} style={{ color: '#D4685C' }} />,
      text: (
        <>
          <p style={{ marginBottom: 12 }}>Welcome to <strong>Ostra Craft</strong> (by Yadu Solanki). By using our website and purchasing our handcrafted pottery products, you agree to the following terms and conditions.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>1. Artisanal Imperfection</h4>
          <p style={{ marginBottom: 12 }}>Every piece at Ostra Craft is uniquely handcrafted using natural clay and organic glazes. Slight variations in size, color, texture, and glaze patterns are celebrated features of authentic pottery and do not constitute defects.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>2. Orders & Payments</h4>
          <p style={{ marginBottom: 12 }}>All orders are subject to acceptance and availability. Prices displayed are final. Payments are processed securely prior to shipment or workshop participation.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>3. Contact & Support</h4>
          <p>For inquiries, contact founder Yadu Solanki via WhatsApp/Phone at <strong>+91 8126308803</strong>.</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      icon: <Shield size={24} style={{ color: '#D4685C' }} />,
      text: (
        <>
          <p style={{ marginBottom: 12 }}>At <strong>Ostra Craft</strong>, we prioritize your privacy and are committed to protecting your personal data.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>1. Information We Collect</h4>
          <p style={{ marginBottom: 12 }}>We collect essential information such as your name, e-mail address, phone number, and delivery address to fulfill orders and workshop bookings.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>2. Data Usage</h4>
          <p style={{ marginBottom: 12 }}>Your personal information is strictly used for processing transactions, shipping handcrafted tableware, and sending brand updates if subscribed.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>3. Security</h4>
          <p>We implement industry-standard encryption to keep your details safe. We never sell or share your data with third parties.</p>
        </>
      )
    },
    refund: {
      title: "Refund & Return Policy",
      icon: <RotateCcw size={24} style={{ color: '#D4685C' }} />,
      text: (
        <>
          <p style={{ marginBottom: 12 }}>We take immense pride in the heirloom quality of <strong>Ostra Craft</strong> pottery.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>1. Transit Damage Guarantee</h4>
          <p style={{ marginBottom: 12 }}>If your ceramics arrive damaged or broken during transit, notify us within 48 hours of delivery with photos via WhatsApp (+91 8126308803) for a free immediate replacement or full refund.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>2. 14-Day Return Window</h4>
          <p style={{ marginBottom: 12 }}>Unused items in original packaging can be returned within 14 days of receipt. Customer covers return shipping unless the item was defective.</p>
          <h4 style={{ margin: '16px 0 8px', fontSize: 16 }}>3. Workshop Cancellations</h4>
          <p>Workshop reservations can be rescheduled or fully refunded up to 24 hours prior to the scheduled session.</p>
        </>
      )
    }
  };

  const current = contentMap[type] || contentMap.terms;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: 24, right: 24 }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          {current.icon}
          <h3 style={{ margin: 0 }}>{current.title}</h3>
        </div>

        <div style={{ fontSize: 14, color: '#4A4540', lineHeight: 1.6 }}>
          {current.text}
        </div>

        <div style={{ marginTop: 28, textAlign: 'right' }}>
          <button className="btn-terracotta" onClick={onClose}>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
