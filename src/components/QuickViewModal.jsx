import React from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Check } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="quick-view-grid">
          {/* Product Image Side */}
          <div className="quick-view-img">
            <img src={product.image} alt={product.title} />
          </div>

          {/* Details & Action Side */}
          <div className="quick-view-content">
            <div className="product-rating" style={{ marginBottom: 8 }}>
              <Star size={14} fill="#E6A100" stroke="none" />
              <span style={{ fontSize: 13, fontWeight: 600 }}>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <h3 style={{ fontSize: 28, marginBottom: 4 }}>{product.title}</h3>
            <p style={{ color: '#6B625C', fontSize: 14, marginBottom: 16 }}>{product.subtitle}</p>

            <div style={{ fontSize: 24, fontWeight: 700, color: '#2B2523', marginBottom: 16 }}>
              ${product.price}
            </div>

            <p style={{ fontSize: 14, color: '#6B625C', lineHeight: 1.6, marginBottom: 20 }}>
              {product.description}
            </p>

            {/* Specifications Grid */}
            {product.specs && (
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Capacity / Size</span>
                  <span className="spec-value">{product.specs.capacity}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Dimensions</span>
                  <span className="spec-value">{product.specs.dimensions}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Glaze Type</span>
                  <span className="spec-value">{product.specs.glaze}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Care Notes</span>
                  <span className="spec-value">{product.specs.care}</span>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A3C6B4', marginBottom: 24, fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>100% Transit Protection Guarantee</span>
            </div>

            <button 
              className="btn-terracotta"
              style={{ width: '100%', gap: 10, padding: 14 }}
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <ShoppingBag size={18} />
              <span>Add to Shopping Bag — ${product.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
