import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo text-gradient" style={{ fontSize: '1.8rem', textDecoration: 'none' }}>Prism Presence</Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>About</Link>
            <Link to="/services" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Services</Link>
            <Link to="/pricing" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Pricing</Link>
            <button>Get Started</button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </AnimatePresence>

      <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0', marginTop: 'auto' }}>
        <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="footer-col">
            <div className="logo text-gradient" style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>Prism Presence</div>
            <p style={{ color: 'var(--text-muted)' }}>Elevating brands through forward-thinking design and marketing.</p>
          </div>
          <div className="footer-col">
            <h3 style={{ marginBottom: '1.5rem' }}>Location</h3>
            <p style={{ color: 'var(--text-muted)' }}>Miami, FL</p>
            <p style={{ color: 'var(--text-muted)' }}>Serving clients nationwide.</p>
          </div>
          <div className="footer-col">
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Us</h3>
            <p style={{ color: 'var(--text-muted)' }}>Ready to start your project?</p>
            <div className="contact-highlight" style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 700, marginTop: '1rem' }}>+1 (305) 282-7544</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
