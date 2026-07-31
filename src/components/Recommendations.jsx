import React from 'react';
import { Plus } from 'lucide-react';

export default function Recommendations({ onAddToCart }) {
  const recommendedItems = [
    {
      id: 'rec-1',
      title: 'Pottery Wheel Session',
      desc: 'Hands-on pottery wheel throwing with master guidance & studio tea.',
      price: 45,
      image: '/images/wheel_masterclass.png'
    },
    {
      id: 'rec-2',
      title: 'Hand Sculpting Workshop',
      desc: 'Free-form hand building techniques for organic tableware.',
      price: 50,
      image: '/images/sculpting_masterclass.png'
    },
    {
      id: 'rec-3',
      title: 'Custom Cup Crafting',
      desc: 'Craft your own heirloom terracotta coffee or tea mug from scratch.',
      price: 35,
      image: '/images/cup_masterclass.png'
    }
  ];

  return (
    <section className="recommendations-section" id="workshops">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <h2>Recommended Experiences</h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="recommendations-grid">
          {recommendedItems.map((item) => (
            <div key={item.id} className="rec-card">
              <div className="rec-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="rec-card-body">
                <h3 className="rec-card-title">{item.title}</h3>
                <p className="rec-card-desc">{item.desc}</p>
                <div className="rec-card-footer">
                  <span className="rec-price">${item.price}</span>
                  <button 
                    className="btn-add-circle"
                    onClick={() => onAddToCart(item)}
                    title="Book Workshop"
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
