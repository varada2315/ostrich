import React, { useState } from 'react';
import { Eye, Plus, Star, Sparkles } from 'lucide-react';

export const productsData = [
  // Mugs & Teacups
  {
    id: 'prod-1',
    category: 'mugs',
    title: 'Solstice Sunbeam Mug',
    subtitle: 'Hand-carved sun emblem in terracotta clay',
    price: 28,
    rating: 4.9,
    reviews: 24,
    tag: 'Best Seller',
    image: '/images/mug_solntse.png',
    specs: { capacity: '350 ml', dimensions: '9.5 x 8.5 cm', glaze: 'Natural Matte Wax', care: 'Dishwasher Safe' },
    description: 'Rediscover the simple joy of sipping your morning coffee from a perfectly imperfect, hand-carved cup that holds warmth and tells a story.'
  },
  {
    id: 'prod-2',
    category: 'mugs',
    title: 'Speckled Solitude Cup',
    subtitle: 'High-fire stoneware with natural speckles',
    price: 24,
    rating: 4.8,
    reviews: 19,
    tag: 'Hand-thrown',
    image: '/images/cup_masterclass.png',
    specs: { capacity: '280 ml', dimensions: '8.5 x 8 cm', glaze: 'Speckled Oat White', care: 'Microwave Safe' },
    description: 'Minimalist stoneware coffee cup featuring subtle organic speckles and a cozy ergonomic thumb-rest handle.'
  },
  {
    id: 'prod-3',
    category: 'mugs',
    title: 'Mist Grey Teacup & Saucer',
    subtitle: 'Soft grey-green glaze with matching saucer',
    price: 32,
    rating: 5.0,
    reviews: 31,
    tag: 'Artisan Pick',
    image: '/images/bowls_tuman.png',
    specs: { capacity: '240 ml', dimensions: '12 cm saucer', glaze: 'Sage Mist Satin', care: 'Handwash Recommended' },
    description: 'Elegantly proportioned tea set designed for contemplative tea rituals and peaceful morning moments.'
  },
  {
    id: 'prod-4',
    category: 'mugs',
    title: 'Rustic Earth Espresso Cup',
    subtitle: 'Raw clay exterior with glazed interior',
    price: 22,
    rating: 4.7,
    reviews: 14,
    tag: 'New Edition',
    image: '/images/vase_zemlya.png',
    specs: { capacity: '120 ml', dimensions: '6.5 x 6.5 cm', glaze: 'Raw Terracotta & Cream', care: 'Dishwasher Safe' },
    description: 'Double-shot espresso cup combining the raw tactility of unglazed clay with a velvety smooth drinking lip.'
  },

  // Tableware & Bowls
  {
    id: 'prod-5',
    category: 'tableware',
    title: 'Earth & Sky Serving Bowl',
    subtitle: 'Generous artisanal bowl for salads & pasta',
    price: 48,
    rating: 4.9,
    reviews: 18,
    tag: 'Statement Piece',
    image: '/images/hero_pottery.png',
    specs: { capacity: '1.8 Liters', dimensions: '26 x 10 cm', glaze: 'Dappled Terracotta & Sage', care: 'Dishwasher Safe' },
    description: 'A striking center-table serving bowl handcrafted to turn family gatherings into memorable culinary celebrations.'
  },
  {
    id: 'prod-6',
    category: 'tableware',
    title: 'Stackable Mist Grey Bowls',
    subtitle: 'Set of 3 nesting pottery bowls',
    price: 42,
    rating: 5.0,
    reviews: 42,
    tag: 'Set of 3',
    image: '/images/bowls_tuman.png',
    specs: { capacity: '350 ml / 550 ml / 850 ml', dimensions: 'Nested Stack', glaze: 'Mist Grey Satin', care: 'Dishwasher Safe' },
    description: 'Versatile trio of nesting bowls ideal for morning granola, warm soups, and evening tapas.'
  },
  {
    id: 'prod-7',
    category: 'tableware',
    title: 'Terracotta Dinner Plate Set',
    subtitle: 'Set of 2 hand-poured dinner plates',
    price: 65,
    rating: 4.9,
    reviews: 12,
    tag: 'Tableware',
    image: '/images/cup_masterclass.png',
    specs: { capacity: 'N/A', dimensions: '27 cm Diameter', glaze: 'Earthy Cream Satin', care: 'Microwave & Oven Safe' },
    description: 'Heirloom dinner plates featuring raised organic rims and tactile underside textures.'
  },
  {
    id: 'prod-8',
    category: 'tableware',
    title: 'Tapas & Dip Ceramic Bowl',
    subtitle: 'Compact serving dish for appetizers',
    price: 18,
    rating: 4.8,
    reviews: 15,
    tag: 'Essential',
    image: '/images/sculpting_masterclass.png',
    specs: { capacity: '180 ml', dimensions: '11 x 5 cm', glaze: 'Terracotta Rust', care: 'Dishwasher Safe' },
    description: 'Charming small bowl designed for olives, dips, dipping oils, and sea salt.'
  },

  // Vases & Home Decor
  {
    id: 'prod-9',
    category: 'vases',
    title: 'Terra Signature Amphora Vase',
    subtitle: 'Hand-sculpted organic vase for dried flora',
    price: 38,
    rating: 5.0,
    reviews: 29,
    tag: 'Iconic Design',
    image: '/images/vase_zemlya.png',
    specs: { capacity: 'Water Sealed', dimensions: '22 x 14 cm', glaze: 'Raw Earth Matte', care: 'Wipe with Cloth' },
    description: 'Sculptural terracotta vase designed to add grounding organic texture and timeless elegance to any room.'
  },
  {
    id: 'prod-10',
    category: 'vases',
    title: 'Imperfect Beauty Pitcher Jug',
    subtitle: 'Artisanal water jug & floral pitcher',
    price: 45,
    rating: 4.9,
    reviews: 22,
    tag: 'Limited Edition',
    image: '/images/hero_pottery.png',
    specs: { capacity: '1.2 Liters', dimensions: '20 x 13 cm', glaze: 'Speckled Sand Wax', care: 'Handwash Only' },
    description: 'Dual-function ceramic pitcher that serves refreshing iced drinks or holds tall botanical stems with grace.'
  },
  {
    id: 'prod-11',
    category: 'vases',
    title: 'Botanical Clay Planter',
    subtitle: 'Breathable terracotta planter with tray',
    price: 36,
    rating: 4.8,
    reviews: 16,
    tag: 'Eco Friendly',
    image: '/images/clay_materials.png',
    specs: { capacity: 'Drain Hole Included', dimensions: '16 x 15 cm', glaze: 'Unglazed Natural Clay', care: 'Indoor / Outdoor' },
    description: 'Natural porous terracotta planter that allows plant roots to breathe and thrive in healthy soil.'
  },
  {
    id: 'prod-12',
    category: 'vases',
    title: 'Weathered Clay Candle Holder',
    subtitle: 'Hand-formed candlestick holder',
    price: 26,
    rating: 4.7,
    reviews: 9,
    tag: 'Cozy Atmosphere',
    image: '/images/mug_solntse.png',
    specs: { capacity: 'Standard Taper', dimensions: '10 x 8 cm', glaze: 'Matte Weathered Cream', care: 'Wipe Clean' },
    description: 'Rustic candlestick holder crafted to catch wax drips while creating a warm, enchanting evening ambiance.'
  }
];

export default function ProductCatalog({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section className="catalog-section" id="catalog">
      <div className="container">
        {/* Catalog Header */}
        <div className="catalog-header">
          <h2>Explore Handcrafted Pottery</h2>
          <p>
            Each piece is individually wheel-thrown and hand-glazed at Ostra Craft using 100% natural eco-friendly clay.
          </p>

          {/* Category Filter Pills */}
          <div className="category-filter-bar">
            <button 
              className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Pottery ({productsData.length})
            </button>
            <button 
              className={`filter-pill ${activeCategory === 'mugs' ? 'active' : ''}`}
              onClick={() => setActiveCategory('mugs')}
            >
              Mugs & Teacups
            </button>
            <button 
              className={`filter-pill ${activeCategory === 'tableware' ? 'active' : ''}`}
              onClick={() => setActiveCategory('tableware')}
            >
              Tableware & Bowls
            </button>
            <button 
              className={`filter-pill ${activeCategory === 'vases' ? 'active' : ''}`}
              onClick={() => setActiveCategory('vases')}
            >
              Vases & Home Decor
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="catalog-grid">
          {filteredProducts.map((product) => (
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
      </div>
    </section>
  );
}
