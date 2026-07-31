import React from 'react';
import { Eye, Plus, Star, ArrowRight } from 'lucide-react';
import { productsData } from './ProductCatalog';

export default function FeaturedProducts({ onAddToCart, onQuickView, onViewAll }) {
  // Show top 4 curated featured products for Home Page
  const featuredList = productsData.slice(0, 4);

  return (
    <section className="catalog-section" style={{ padding: '40px 0 60px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="catalog-header" style={{ marginBottom: 36 }}>
          <h2>Featured Handcrafted Pottery</h2>
          <p>
            Curated bestsellers designed to bring warmth, texture, and character to your daily table setting.
          </p>
        </div>

        {/* 4 Curated Products Grid */}
        <div className="catalog-grid" style={{ marginBottom: 40 }}>
          {featuredList.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.title} />
                <span className="product-tag-chip">{product.tag}</span>
                
                <button 
                  className="quick-view-overlay-btn"
                  onClick={() => onQuickView(product)}
                >
                  <Eye size={14} />
                  <span>Quick View</span>
                </button>
              </div>

              <div className="product-card-body">
                <div className="product-rating">
                  <Star size={13} fill="#E6A100" stroke="none" />
                  <span>{product.rating} ({product.reviews})</span>
                </div>

                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-sub">{product.subtitle}</p>

                <div className="product-card-footer">
                  <span className="product-price">${product.price}</span>
                  <button 
                    className="btn-add-circle"
                    onClick={() => onAddToCart(product)}
                    title="Add to Cart"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div style={{ textAlign: 'center' }}>
          <button 
            className="btn-terracotta" 
            onClick={onViewAll}
            style={{ gap: 10, padding: '14px 32px' }}
          >
            <span>Explore All Pottery Products ({productsData.length})</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
