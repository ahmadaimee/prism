import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Hexagon, Phone, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <nav className="navbar" style={{ padding: '1rem 0' }}>
        <div className="container">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo-modern">
              <Hexagon size={28} color="var(--primary)" fill="rgba(0, 242, 254, 0.2)" />
              PRISM PRESENCE
            </div>
          </Link>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
            <Link to="/about" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>About</Link>
            <Link to="/services" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>Services</Link>
            <Link to="/pricing" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>Pricing</Link>
            <Link to="/blog" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
            <Link to="/contact">
              <button style={{ padding: '0.6rem 1.5rem', boxShadow: 'none' }}>Get Started</button>
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Chatbot />

      <footer className="footer" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', padding: '4rem 0', marginTop: 'auto', background: 'rgba(15, 23, 42, 0.02)' }}>
        <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="footer-col">
            <div className="logo-modern" style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>
              <Hexagon size={24} color="var(--primary)" fill="rgba(0, 242, 254, 0.2)" />
              PRISM PRESENCE
            </div>
            <p style={{ color: 'var(--text-muted)' }}>Elevating brands through forward-thinking design and marketing.</p>
          </div>
          <div className="footer-col">
            <h3 style={{ marginBottom: '1.5rem' }}>Global HQ</h3>
            <p style={{ color: 'var(--text-muted)' }}>Digital Remote First</p>
            <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Delivering digital impact on a global scale.</p>
          </div>
          <div className="footer-col">
            <h3 style={{ marginBottom: '1.5rem' }}>Contact Us</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Ready to start your project?</p>
            <div className="contact-highlight" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 700 }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="tel:+13052827544" style={{ color: 'inherit' }}><Phone size={24} /></a>
                <a href="https://wa.me/13052827544" style={{ color: '#25D366' }}><MessageCircle size={24} /></a>
              </div>
              +1 (305) 282-7544
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
