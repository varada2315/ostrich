import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onExplore }) {
  const slides = [
    {
      id: 1,
      image: '/images/hero_banner_1.png',
      badge: 'Handcrafted Coffee & Tea Vessels',
      headline: 'Elevate Your Table Setting with Handcrafted Pottery Perfection',
      subtitle: 'Elevate Your Everyday with Handcrafted Pieces That Tell a Story and Create Lasting Memories, One Sip, One Savor at a Time.',
      chips: ['100% Natural Eco Clay', 'Handcrafted with Passion', 'Timeless Everyday Living']
    },
    {
      id: 2,
      image: '/images/hero_banner_2.png',
      badge: 'Artisanal Tableware & Bowls',
      headline: 'Functional Art Crafted for Everyday Celebrations',
      subtitle: 'Discover nesting bowls, hand-poured dinner plates, and textured serving dishes designed for warmth and connection.',
      chips: ['Heirloom Quality', 'Non-Toxic Organic Glazes', 'Dishwasher Safe']
    },
    {
      id: 3,
      image: '/images/hero_banner_3.png',
      badge: 'Master Artisan Studio Heritage',
      headline: 'Timeless Ceramic Sculptures & Heirloom Vases',
      subtitle: 'Each piece is individually wheel-thrown and high-fired by founder Yadu Solanki using 100% natural eco-clay.',
      chips: ['Wheel-Thrown Art', '100% Eco Friendly', 'Plastic-Free Shipping']
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="hero-banner-section" id="home-hero">
      <div className="container">
        {/* Slideshow Card Container */}
        <div className="hero-banner-card">
          {/* Slideshow Background Image Layer */}
          {slides.map((item, index) => (
            <div 
              key={item.id}
              className="hero-slide-bg"
              style={{
                backgroundImage: `url('${item.image}')`,
                opacity: index === currentSlide ? 1 : 0
              }}
            />
          ))}

          {/* Dark Overlay Gradient */}
          <div className="hero-banner-overlay"></div>
          
          {/* Active Slide Text Content */}
          <div className="hero-banner-content">
            <div className="hero-banner-badge">
              <Sparkles size={14} />
              <span>{slide.badge}</span>
            </div>

            <h1>{slide.headline}</h1>
            
            <p className="hero-banner-subtitle">
              {slide.subtitle}
            </p>

            <div className="hero-banner-actions">
              <button className="btn-terracotta" onClick={onExplore}>
                <span>Explore Collections</span>
                <ArrowRight size={18} />
              </button>

              <a href="#catalog" className="btn-banner-secondary">
                <span>View Full Catalog</span>
              </a>
            </div>

            {/* Feature Chips */}
            <div className="hero-banner-chips">
              <div className="banner-chip">
                <ShieldCheck size={16} />
                <span>{slide.chips[0]}</span>
              </div>
              <div className="banner-chip">
                <Heart size={15} />
                <span>{slide.chips[1]}</span>
              </div>
              <div className="banner-chip">
                <Coffee size={15} />
                <span>{slide.chips[2]}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls: Arrows & Pagination Dots */}
          <div className="slideshow-controls">
            <button className="slide-arrow-btn" onClick={handlePrev} title="Previous Slide">
              <ChevronLeft size={22} />
            </button>
            
            <div className="slide-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`slide-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button className="slide-arrow-btn" onClick={handleNext} title="Next Slide">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
