import React from 'react';
import { Plus } from 'lucide-react';

export default function Collections({ onAddToCart }) {
  const collectionProducts = [
    {
      id: 'prod-9',
      title: 'Terra Signature Vase',
      subtitle: 'Raw Earth Matte Glaze',
      price: 38,
      image: '/images/vase_zemlya.png'
    },
    {
      id: 'prod-6',
      title: 'Mist Grey Bowl Set',
      subtitle: 'Set of 3 Nesting Bowls',
      price: 42,
      image: '/images/bowls_tuman.png'
    },
    {
      id: 'prod-1',
      title: 'Solstice Sunbeam Mug',
      subtitle: 'Hand-carved Sun Emblem',
      price: 28,
      image: '/images/mug_solntse.png'
    }
  ];

  return (
    <section className="collections-section" id="collections">
      <div className="container">
        <div className="collections-card-container">
          {/* Left Description Column */}
          <div className="collections-intro">
            <h2>Flagship Masterpieces</h2>
            <p>Our most celebrated handcrafted creations, designed to anchor your home with natural warmth and character.</p>
            <a href="#catalog" className="btn-terracotta">
              <span>View Full Catalog</span>
            </a>
          </div>

          {/* Right Product Items (3 Morphing Blob Cards) */}
          <div className="collections-items-grid">
            {collectionProducts.map((item) => (
              <div key={item.id} className="collection-item-card">
                <div className="item-thumb-circle">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-sub">{item.subtitle}</p>
                
                <div className="item-price-row">
                  <span className="item-price">${item.price}</span>
                  <button 
                    className="btn-add-mini" 
                    onClick={() => onAddToCart(item)}
                    title="Add to Cart"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
