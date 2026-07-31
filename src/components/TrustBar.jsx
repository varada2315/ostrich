import React from 'react';
import { Sparkles, Leaf, ShieldCheck, PackageCheck } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: <Sparkles size={20} />,
      title: "Master Artisan Crafted",
      sub: "Wheel-thrown by Yadu Solanki"
    },
    {
      icon: <Leaf size={20} />,
      title: "100% Natural Eco Clay",
      sub: "Unrefined organic minerals"
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Heirloom Quality Guarantee",
      sub: "High-fired for lifetime durability"
    },
    {
      icon: <PackageCheck size={20} />,
      title: "Plastic-Free Shipping",
      sub: "100% recyclable kraft wrapping"
    }
  ];

  return (
    <section className="trust-bar-section">
      <div className="container">
        <div className="trust-card-wrapper">
          <div className="trust-badges-row">
            {trustItems.map((item, idx) => (
              <div key={idx} className="trust-pill-card">
                <div className="trust-icon-circle">
                  {item.icon}
                </div>
                <div className="trust-text-group">
                  <span className="trust-title">{item.title}</span>
                  <span className="trust-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
