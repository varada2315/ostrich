import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Bag ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} style={{ opacity: 0.3, marginBottom: 12 }} />
              <p>Your shopping bag is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  style={{ color: '#6B625C', opacity: 0.7 }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Subtotal:</span>
              <span>${totalAmount}</span>
            </div>
            <button 
              className="btn-terracotta" 
              style={{ width: '100%' }}
              onClick={onCheckout}
            >
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
