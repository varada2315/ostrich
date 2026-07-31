import React, { useState } from 'react';
import ProductCatalog, { productsData } from '../components/ProductCatalog';
import { Search, SlidersHorizontal, ShoppingBag } from 'lucide-react';

export default function ProductsPage({ onAddToCart, onQuickView }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');

  return (
    <div className="page-products" style={{ paddingTop: 40 }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 48, 
            fontWeight: 700, 
            color: 'var(--color-text-dark)',
            marginBottom: 12
          }}>
            Handcrafted Pottery Shop
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Browse our complete collection of coffee mugs, tea cups, tableware sets, and decorative ceramic vases.
          </p>
        </div>

        {/* Search & Sort Controls Bar */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
          marginBottom: 32,
          backgroundColor: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {/* Search Box */}
          <div style={{ position: 'relative', flexGrow: 1, maxWidth: 400 }}>
            <Search size={18} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#969696' }} />
            <input 
              type="text" 
              placeholder="Search coffee mugs, bowls, vases..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border-subtle)',
                fontFamily: 'inherit',
                fontSize: 14,
                outline: 'none',
                backgroundColor: 'var(--bg-page)'
              }}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <SlidersHorizontal size={18} style={{ color: 'var(--color-terracotta)' }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-dark)' }}>Sort by:</span>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                fontFamily: 'inherit',
                fontSize: 13,
                backgroundColor: 'var(--bg-page)',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured Artisanal</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Catalog Grid */}
      <ProductCatalog 
        onAddToCart={onAddToCart}
        onQuickView={onQuickView}
      />
    </div>
  );
}
