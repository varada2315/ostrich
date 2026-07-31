import React from 'react';
import { Leaf, Flame, Sparkles } from 'lucide-react';

export default function Materials({ onScrollToShop }) {
  return (
    <section className="materials-section">
      <div className="container">
        <div className="materials-card-container">
          {/* Left Text & Actions */}
          <div className="materials-content">
            <h2>The Craft & Clay Philosophy</h2>
            <p>
              At Ostra Craft, we believe in the quiet power of handmade objects. We source pure, unrefined eco-clay and formulate organic mineral glazes in-house, firing each piece to high temperatures for lasting durability and authentic beauty.
            </p>
            
            <button className="btn-terracotta" onClick={onScrollToShop}>
              <span>Discover Handcrafted Pottery</span>
            </button>

            <div className="materials-features-row">
              <div className="materials-pill">
                <Leaf size={18} />
                <span>100% Eco-Clay</span>
              </div>
              <div className="materials-pill">
                <Flame size={18} />
                <span>High Kiln Fired</span>
              </div>
              <div className="materials-pill">
                <Sparkles size={18} />
                <span>Non-Toxic Glazes</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="materials-image-frame">
            <img 
              src="/images/clay_materials.png" 
              alt="Ostra Craft Raw Pottery Materials and Studio Tools" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
