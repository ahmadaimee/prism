import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '8rem' }}>
        <div className="bg-glow" style={{ left: '-200px', right: 'auto' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            About <span className="text-gradient">Prism Presence</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', marginTop: '1.5rem' }}>
            Founded in Miami, FL, we are a digital agency dedicated to elevating brands through cutting-edge design, data-driven marketing, and exceptional content. We don't just build websites; we craft digital experiences that capture audiences and drive real growth.
          </motion.p>
        </div>
      </section>

      <section className="container">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="glass" style={{ padding: '3rem', marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
          <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e0e0e0' }}>
            Our mission is simple: to make your business stand out in a crowded digital world. Whether you are a local startup or an established enterprise, we bring the same level of passion, strategic thinking, and creative excellence to every project. We believe in transparency, consistent communication, and delivering measured results.
          </p>
          
          <h2 className="text-gradient" style={{ marginTop: '3rem', marginBottom: '2rem' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)' }}>Expert Team</h3>
              <p style={{ color: 'var(--text-muted)' }}>We bring together top talent in design, development, and digital marketing.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--accent)' }}>Tailored Strategies</h3>
              <p style={{ color: 'var(--text-muted)' }}>No cookie-cutter solutions. Everything we do is customized for your brand's unique goals.</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--secondary)' }}>Result-Oriented</h3>
              <p style={{ color: 'var(--text-muted)' }}>We focus on metrics that matter: traffic, engagement, and conversions.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
