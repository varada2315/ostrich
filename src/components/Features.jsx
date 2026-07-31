import React from 'react';
import { Sparkles, Flame, UserCheck, Home } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <Sparkles size={24} />,
      title: "Unique Artisanal Forms",
      desc: "Hand-sculpted in small batches using premium natural eco-friendly clay."
    },
    {
      icon: <Flame size={24} />,
      title: "Natural Earth Glazes",
      desc: "Custom non-toxic glazes fired to perfection in high-temperature kilns."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Master Craftsmanship",
      desc: "Created by experienced artisans with profound dedication and passion."
    },
    {
      icon: <Home size={24} />,
      title: "Serene Studio Space",
      desc: "Warm, tranquil, and authentic — a sanctuary for timeless functional art."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresList.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-box">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
