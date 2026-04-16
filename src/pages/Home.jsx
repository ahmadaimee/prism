import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Edit3, Type, Share2, Star } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Website Design', icon: <Palette size={32} />, desc: 'Custom, high-performing websites tailored to your brand identity.' },
    { title: 'SEO', icon: <TrendingUp size={32} />, desc: 'Data-driven strategies to rank higher and attract organic traffic.' },
    { title: 'Content Writing', icon: <Edit3 size={32} />, desc: 'Engaging, optimized copy that converts visitors into loyal clients.' },
    { title: 'Blog Writing', icon: <Type size={32} />, desc: 'Consistent, native blog content to establish authority in your niche.' },
    { title: 'Social Media', icon: <Share2 size={32} />, desc: 'Dynamic social media management to grow your online community.' }
  ];

  const reviews = [
    { name: "Sarah Jenkins", role: "CEO, TechFlow", comment: "Prism Presence transformed our digital footprint! Their website design was flawless, and organic traffic tripled." },
    { name: "Mark Russo", role: "Founder, M-Estates", comment: "The SEO and content strategies they provided have been a game changer for our real estate business." },
    { name: "Elena Gomez", role: "Marketing Director", comment: "Incredible attention to detail. The promotional package offered an unbelievable value for an agency of this caliber." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" exit="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <section className="hero">
        <div className="bg-glow"></div>
        <div className="container hero-content">
          <motion.div variants={itemVariants} className="anniversary-badge" whileHover={{ scale: 1.05 }}>🎉 1-Year Anniversary: 10% OFF Every Service!</motion.div>
          <motion.h1 variants={itemVariants}>Shape Your Digital <span className="text-gradient">Future</span></motion.h1>
          <motion.p variants={itemVariants}>We are a premium digital agency based in Miami, FL. From stunning website design to results-driven SEO and social media management, we elevate your online presence.</motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/services">
              <button>Explore Services</button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container">
        <motion.h2 variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-title text-gradient">Our Services</motion.h2>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.slice(0, 3).map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card glass" whileHover={{ y: -10 }}>
              <div className="service-icon" style={{ color: "var(--primary)" }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services"><button>View All Services</button></Link>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-glow"></div>
        <motion.div className="container" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
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
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem' }}>Claim Your Spot Now</motion.button>
          </div>
        </motion.div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title text-gradient">Client Testimonials</motion.h2>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((review, i) => (
            <motion.div key={i} variants={itemVariants} className="service-card glass">
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: "var(--accent)" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#e0e0e0' }}>"{review.comment}"</p>
              <div>
                <h4 style={{ margin: 0, color: 'var(--primary)' }}>{review.name}</h4>
                <small style={{ color: 'var(--text-muted)' }}>{review.role}</small>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
