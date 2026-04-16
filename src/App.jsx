import React from 'react';
import './App.css';

function App() {
  const services = [
    { title: 'Website Design', icon: '🎨', desc: 'Custom, high-performing websites tailored to your brand identity.' },
    { title: 'SEO', icon: '🔍', desc: 'Data-driven strategies to rank higher and attract organic traffic.' },
    { title: 'Content Writing', icon: '✍️', desc: 'Engaging, optimized copy that converts visitors into loyal clients.' },
    { title: 'Blog Writing', icon: '📰', desc: 'Consistent, native blog content to establish authority in your niche.' },
    { title: 'Social Media', icon: '📱', desc: 'Dynamic social media management to grow your online community.' }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo text-gradient">Prism Presence</div>
          <button>Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <div className="bg-glow"></div>
        <div className="container hero-content">
          <div className="anniversary-badge">🎉 1-Year Anniversary: 10% OFF Every Service!</div>
          <h1>Shape Your Digital <span className="text-gradient">Future</span></h1>
          <p>We are a premium digital agency based in Miami, FL. From stunning website design to results-driven SEO and social media management, we elevate your online presence.</p>
          <button>Explore Services</button>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title text-gradient">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-glow"></div>
        <div className="container">
          <div className="promo-card glass">
            <div className="promo-badge">APRIL 2026 EXCLUSIVE</div>
            <h2>Launch Your Custom Business Website</h2>
            <div className="price">$250<span>/mo</span></div>
            <ul className="promo-features">
              <li>✔️ Premium Design</li>
              <li>✔️ Domain & Hosting</li>
              <li>✔️ Custom Logo</li>
              <li>✔️ Basic Support</li>
            </ul>
            <p className="slots-left">🚨 Hurry! Only 20 slots left for this package.</p>
            <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }}>Claim Your Spot Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="logo text-gradient" style={{ marginBottom: '1rem' }}>Prism Presence</div>
            <p>Elevating brands through forward-thinking design and marketing.</p>
          </div>
          <div className="footer-col">
            <h3>Location</h3>
            <p>Miami, FL</p>
            <p>Serving clients nationwide.</p>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p>Ready to start your project?</p>
            <div className="contact-highlight">+1 (305) 282-7544</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
