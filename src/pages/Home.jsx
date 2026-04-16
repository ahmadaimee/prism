import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Edit3, Type, Share2, Star, ArrowRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import abstractImage from '../assets/abstract_glow.png';

const Home = () => {
  const services = [
    { title: 'Local Web Design', icon: <Palette size={32} />, desc: 'Custom websites for Lehigh Acres & Miami FL businesses tailored to convert.' },
    { title: 'Miami SEO Strategies', icon: <TrendingUp size={32} />, desc: 'Rank #1 locally in Florida. Data-driven SEO for organic traffic and leads.' },
    { title: 'Content Marketing', icon: <Edit3 size={32} />, desc: 'Engaging Florida-focused copy that transforms your average visitors into paying clients.' },
  ];

  const reviews = [
    { name: "Sarah J.", role: "Miami Real Estate", comment: "Prism Presence completely transformed our digital footprint in Miami. Our local organic traffic tripled in 3 months!" },
    { name: "Mark R.", role: "Lehigh Acres Plumber", comment: "The local SEO maps strategy got us ranking #1 in Lehigh Acres. We are getting phone calls daily now." },
    { name: "Elena G.", role: "Florida Marketing", comment: "Incredible attention to detail. The custom website package offered unbelievable value." },
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
          <source src="https://cdn.coverr.co/videos/coverr-digital-network-connections-5311/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="bg-glow" style={{ opacity: 0.4, right: '-200px', top: '20%' }}></div>
        
        <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={itemVariants} className="anniversary-badge" whileHover={{ scale: 1.05 }} style={{ background: 'rgba(244, 63, 94, 0.1)', borderColor: 'var(--accent)', letterSpacing: '0.05em', color: 'var(--accent)' }}>
            📍 #1 Rated Digital Agency in Lehigh Acres & Miami, FL
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--text-color)' }}>
            Elevate Your Local <br />
            <span className="text-gradient">
              <Typewriter
                words={['Florida Business', 'SEO Rankings', 'Web Design', 'Digital Legacy']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto 2.5rem', fontWeight: 500 }}>
            We are the premier digital agency serving <strong>Lehigh Acres, Miami, FL</strong>, and surrounding areas. From hyper-local maps SEO to high-performance web design, we dominate search results so you can dominate your market.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/services">
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Local Services <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/blog">
              <button style={{ background: 'rgba(15, 23, 42, 0.05)', border: '1px solid rgba(15,23,42,0.1)', boxShadow: 'none', color: 'var(--text-color)' }}>
                Read SEO Blog
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div style={{ background: 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '2rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.7 }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif", color: 'var(--text-muted)' }}>Top Rated in Miami</h2>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif", color: 'var(--text-muted)' }}>Lehigh Acres Best SEO</h2>
          <h2 style={{ fontSize: '1.5rem', fontFamily: "'Outfit', sans-serif", color: 'var(--text-muted)' }}>Florida Web Experts</h2>
        </div>
      </div>

      <section className="container" style={{ padding: '8rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dominate Florida Search</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>South Florida is competitive. Our tailored strategies put you ahead of the rest.</p>
        </motion.div>
        
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card glass" whileHover={{ y: -10, scale: 1.02 }} style={{ padding: '3rem 2rem' }}>
              <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '1.5rem', background: 'rgba(2, 132, 199, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '15px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 500 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/services"><button>View All Marketing Services</button></Link>
        </div>
      </section>

      <section className="promo-section" style={{ position: 'relative' }}>
        <div className="promo-glow" style={{ background: 'var(--secondary-glow)', opacity: 0.5 }}></div>
        <motion.div className="container" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="promo-card glass" style={{ padding: '5rem 3rem', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
            <div className="promo-badge" style={{ background: 'linear-gradient(135deg, var(--secondary), var(--primary))', boxShadow: '0 4px 15px rgba(2,132,199,0.3)', color: 'white' }}>LOCAL BUSINESS EXCLUSIVE</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>Lehigh Acres & Miami Custom Websites</h2>
            <div className="price" style={{ margin: '2rem 0', color: 'var(--text-color)' }}>$250<span style={{ color: 'var(--text-muted)' }}>/mo</span></div>
            <ul className="promo-features" style={{ margin: '3rem 0', color: 'var(--text-muted)', fontWeight: 500 }}>
              <li><CheckIcon /> Premium Florida-Tailored Design</li>
              <li><CheckIcon /> Local SEO Optimization</li>
              <li><CheckIcon /> Domain & Fast Hosting</li>
              <li><CheckIcon /> Dedicated Local Support</li>
            </ul>
            <p className="slots-left" style={{ color: 'var(--accent)', fontWeight: 700 }}>🚨 High Demand! Only 3 local spots left this month.</p>
            <Link to="/pricing">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '2rem', padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>Lock In Your Spot Request</motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container" style={{ padding: '8rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Success in Miami & Lehigh</h2>
        </motion.div>
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reviews.map((review, i) => (
            <motion.div key={i} variants={itemVariants} className="service-card glass" style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: "#eab308" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 500 }}>"{review.comment}"</p>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
                <h4 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.2rem' }}>{review.name}</h4>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>{review.role}</small>
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
