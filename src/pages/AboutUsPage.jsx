import React from 'react';
import MissionVision from '../components/MissionVision';
import Features from '../components/Features';
import Materials from '../components/Materials';
import { Sparkles, Heart, ShieldCheck, Coffee, ArrowRight } from 'lucide-react';

export default function AboutUsPage({ onNavigate }) {
  return (
    <div className="page-about">
      {/* Morphing Organic Blob Hero Section for About Us */}
      <section className="hero-section" id="about-hero">
        <div className="container hero-grid">
          {/* Left Text Column */}
          <div className="hero-content">
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: 8, 
              backgroundColor: 'var(--color-terracotta-light)', 
              color: 'var(--color-terracotta)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 16
            }}>
              <Heart size={14} />
              <span>Our Artisanal Heritage</span>
            </div>

            <h1>Crafting Functional Art for Timeless Living</h1>
            
            <p className="hero-subtitle">
              Founded by <strong>Yadu Solanki</strong>, Ostra Craft was born from an unrelenting passion to break free from impersonal tableware. We handcraft tactile pottery pieces designed to become family heirlooms for generations.
            </p>

            <div className="hero-cta-group">
              <button className="btn-terracotta" onClick={() => onNavigate('products')}>
                <span>Explore Our Pottery</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* 3 Feature Pills */}
            <div className="hero-features-row">
              <div className="hero-feature-pill">
                <Sparkles size={16} />
                <span>Unique Artisanal Forms</span>
              </div>

              <div className="hero-feature-pill">
                <Heart size={15} />
                <span>Made with Passion</span>
              </div>

              <div className="hero-feature-pill">
                <Coffee size={15} />
                <span>Timeless Daily Living</span>
              </div>
            </div>
          </div>

          {/* Right Morphing Organic Blob Frame Animation */}
          <div className="hero-image-wrapper">
            <div className="abstract-hero-shape"></div>
            
            <div className="hero-image-frame">
              <img 
                src="/images/sculpting_masterclass.png" 
                alt="Ostra Craft Master Artisan Sculpting Clay"
              />
            </div>

            {/* Floating 100% Natural Badge */}
            <div className="floating-badge">
              <div className="badge-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="badge-text">
                <span className="badge-title">100% Natural</span>
                <span className="badge-sub">Handcrafted Art</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Narrative Card */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 16 }}>
                The Story Behind Ostra Craft
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
                In a world flooded with disposable design, Ostra Craft offers an antidote: tactile, beautifully weighted ceramic vessels designed to celebrate the present moment.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                What sets us apart is our commitment to quality materials, meticulous hand-throwing techniques, and an unwavering passion for creating pieces that become an integral part of your personal story.
              </p>
              <button 
                className="btn-terracotta" 
                onClick={() => onNavigate('products')}
                style={{ gap: 8 }}
              >
                <span>Shop Handcrafted Pottery</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ height: 320, borderRadius: 24, overflow: 'hidden' }}>
              <img 
                src="/images/clay_materials.png" 
                alt="Ostra Craft Natural Clay Materials"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <Features />
      <Materials onScrollToShop={() => onNavigate('products')} />
    </div>
  );
}
