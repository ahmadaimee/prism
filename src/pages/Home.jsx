import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Edit3, Type, Share2, Star, ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import abstractImage from '../assets/abstract_glow.png';

const Home = () => {
  const services = [
    { title: 'Website Design', icon: <Palette size={32} />, desc: 'Custom, high-performing websites tailored to your brand.' },
    { title: 'SEO Strategies', icon: <TrendingUp size={32} />, desc: 'Data-driven rankings to attract organic traffic.' },
    { title: 'Content Writing', icon: <Edit3 size={32} />, desc: 'Engaging, optimized copy that converts visitors.' },
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
      <section className="hero" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '8rem', paddingTop: '10rem' }}>
        
        {/* Animated Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={abstractImage}
          className="video-background"
        >
          {/* A reliable public tech/abstract video from Pexels (Coverr) as a placeholder. We will fallback to the generated sexy poster if it fails */}
          <source src="https://cdn.coverr.co/videos/coverr-digital-network-connections-5311/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="bg-glow" style={{ opacity: 0.6, right: '-200px', top: '20%' }}></div>
        
        <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={itemVariants} className="anniversary-badge" whileHover={{ scale: 1.05 }} style={{ background: 'rgba(255,8,68,0.15)', borderColor: 'var(--accent)', letterSpacing: '0.05em' }}>
            🎉 1-Year Anniversary: 10% OFF Every Service!
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', fontWeight: 800, margin: '1rem 0' }}>
            Shape Your Digital <br />
            <span className="text-gradient">
              <Typewriter
                words={['Future', 'Growth', 'Brand', 'Legacy']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            We are a premium digital agency based in Miami. From stunning, high-performance website design to results-driven SEO, we craft experiences that convert.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/services">
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Services <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/pricing">
              <button style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', boxShadow: 'none' }}>
                View Pricing
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.6, filter: 'grayscale(100%)' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>Google Partner</h2>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>Meta Business</h2>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>Shopify Experts</h2>
        </div>
      </div>

      <section className="container" style={{ padding: '8rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Core Services</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Elevating your business with end-to-end digital excellence.</p>
        </motion.div>
        
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card glass" whileHover={{ y: -10, scale: 1.02 }} style={{ padding: '3rem 2rem' }}>
              <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '1.5rem', background: 'rgba(0, 242, 254, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '15px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/services"><button>View All Services</button></Link>
        </div>
      </section>

      <section className="promo-section" style={{ position: 'relative' }}>
        <img src={abstractImage} alt="Abstract Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, zIndex: 0 }} />
        <div className="promo-glow" style={{ background: 'var(--secondary-glow)' }}></div>
        <motion.div className="container" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="promo-card glass" style={{ background: 'rgba(255,255,255,0.04)', padding: '5rem 3rem', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
            <div className="promo-badge" style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', boxShadow: '0 4px 15px rgba(0,242,254,0.4)' }}>APRIL 2026 EXCLUSIVE</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Launch Your Custom Business Website</h2>
            <div className="price" style={{ margin: '2rem 0' }}>$250<span>/mo</span></div>
            <ul className="promo-features" style={{ margin: '3rem 0', color: '#e2e8f0' }}>
              <li><CheckIcon /> Premium Design</li>
              <li><CheckIcon /> Domain & Hosting</li>
              <li><CheckIcon /> Custom Logo</li>
              <li><CheckIcon /> Priority Support</li>
            </ul>
            <p className="slots-left" style={{ color: '#ff0844' }}>🚨 Hurry! Only 20 slots left for this package.</p>
            <Link to="/pricing">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '2rem', padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>Claim Your Spot Now</motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container" style={{ padding: '8rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Client Success Stories</h2>
        </motion.div>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((review, i) => (
            <motion.div key={i} variants={itemVariants} className="service-card glass" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: "#fbbf24" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>"{review.comment}"</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                <h4 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.2rem' }}>{review.name}</h4>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{review.role}</small>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

const CheckIcon = () => (
  <span style={{ color: 'var(--primary)', marginRight: '8px' }}>✔️</span>
);

export default Home;
