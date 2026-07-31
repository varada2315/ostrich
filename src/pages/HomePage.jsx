import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustBar from '../components/TrustBar';
import Collections from '../components/Collections';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage({ onNavigate, onAddToCart, onQuickView }) {
  return (
    <div className="page-home">
      {/* 1st Section: Hero Banner Slideshow */}
      <Hero onExplore={() => onNavigate('products')} />

      {/* 2nd Section: Featured Products (Curated 4 Items + View All Button) */}
      <FeaturedProducts 
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
        onViewAll={() => onNavigate('products')}
      />

      {/* 3rd Section: Human-Touch Trust Bar */}
      <TrustBar />

      {/* 4th Section: Flagship Collections */}
      <Collections onAddToCart={onAddToCart} />

      {/* 5th Section: Brand Experience Teaser */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #F0E8DD 0%, #E8DFD3 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '56px 48px',
            border: '1px solid var(--color-border-subtle)',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 48,
            alignItems: 'center'
          }}>
            <div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 8, 
                backgroundColor: 'rgba(212, 104, 92, 0.1)', 
                color: 'var(--color-terracotta)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 16
              }}>
                <Sparkles size={14} />
                <span>Crafted for Timeless Living</span>
              </div>

              <h2 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 40, 
                fontWeight: 700, 
                lineHeight: 1.15,
                marginBottom: 18,
                color: 'var(--color-text-dark)'
              }}>
                Rediscover the Joy of Handmade Pottery
              </h2>

              <p style={{ color: 'var(--color-text-muted)', fontSize: 16, lineHeight: 1.65, marginBottom: 32 }}>
                At Ostra Craft, we redefine the art of daily living through handcrafted pieces that elevate your morning rituals into lasting memories. Explore our full collection of coffee mugs, tea cups, serving bowls, and vases.
              </p>

              <button 
                className="btn-terracotta" 
                onClick={() => onNavigate('products')}
                style={{ gap: 10 }}
              >
                <span>View Full Catalog</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="item-thumb-circle" style={{ width: 280, height: 280, margin: '0 auto' }}>
                <img src="/images/hero_pottery.png" alt="Ostra Craft Pottery Showcase" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
