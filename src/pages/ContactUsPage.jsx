import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, MessageCircle, Mail } from 'lucide-react';

export default function ContactUsPage({ onSubmitContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      onSubmitContact(formData);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }
  };

  return (
    <div className="page-contact" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <div className="container">
        {/* Contact Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 48, 
            fontWeight: 700, 
            color: 'var(--color-text-dark)',
            marginBottom: 12
          }}>
            Contact Ostra Craft
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Have a question about custom pottery orders, tableware sets, or studio visits? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Grid: Form on Left, Direct Contact Details on Right */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr', 
          gap: 48,
          alignItems: 'start'
        }}>
          {/* Left Form Box */}
          <div style={{ 
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            border: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 30, marginBottom: 8 }}>
              Send Us a Message
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 28 }}>
              Fill out the form below and founder Yadu Solanki or our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label>Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 8126308803"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Pottery Order">Custom Pottery Order</option>
                    <option value="Wholesale & Restaurant Tableware">Wholesale & Restaurant Tableware</option>
                    <option value="Studio Visit">Studio Visit</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about the pottery pieces you are interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-subtle)',
                    fontFamily: 'inherit',
                    backgroundColor: 'white'
                  }}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-terracotta" style={{ width: '100%', marginTop: 8 }}>
                <Send size={16} />
                <span>Submit Message</span>
              </button>
            </form>
          </div>

          {/* Right Direct Contact Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* WhatsApp Card */}
            <div style={{ 
              backgroundColor: 'var(--bg-card-warm)',
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ 
                  width: 44, 
                  height: 44, 
                  borderRadius: '50%', 
                  backgroundColor: '#25D366', 
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Instant WhatsApp Inquiry</h3>
                  <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Fastest response time</span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 20 }}>
                Chat directly with founder Yadu Solanki on WhatsApp for order tracking, custom requests, and quick assistance.
              </p>
              <a 
                href="https://wa.me/918126308803?text=Hello%20Ostra%20Craft,%20I'm%20interested%20in%20your%20handcrafted%20pottery."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: 12 }}
              >
                <span>Chat on WhatsApp (+91 8126308803)</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '32px',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 20 }}>
                Studio Contact Details
              </h3>
              <ul className="contact-list" style={{ gap: 18 }}>
                <li className="contact-item">
                  <MapPin size={20} />
                  <span><strong>Ostra Craft Pottery Studio</strong><br />Artisan Guild Quarter</span>
                </li>
                <li className="contact-item">
                  <Clock size={20} />
                  <span>Open Daily: 09:00 AM – 08:00 PM</span>
                </li>
                <li className="contact-item">
                  <Phone size={20} />
                  <span>+91 8126308803</span>
                </li>
                <li className="contact-item">
                  <Mail size={20} />
                  <span>yadu@ostracraft.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
