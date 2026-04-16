import React from 'react';
import { motion } from 'framer-motion';
import IntroAnimation from '../components/ui/scroll-morph-hero';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '60vh', paddingTop: '10rem', paddingBottom: '4rem', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: '4rem', color: 'var(--text-color)' }}>
            About <span className="text-gradient">Prism Presence</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto', fontWeight: 500 }}>
            We are a premier global digital agency dedicated to elevating brands through cutting-edge design, data-driven marketing, and exceptional corporate branding. We don't just build websites; we craft digital experiences that capture audiences worldwide.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '3rem' }}>
        <div style={{ height: '700px', width: '100%', marginBottom: '4rem' }}>
          <IntroAnimation />
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="glass" style={{ padding: '4rem', position: 'relative', zIndex: 10 }}>
          <h2 className="text-gradient" style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Our Global Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)', fontWeight: 500 }}>
            Our mission is simple: to make your business stand out in a crowded digital world regardless of borders. Whether you are a dedicated startup or an established international enterprise, we bring the same level of passion, strategic thinking, and creative excellence to every project. We believe in transparency, consistent communication, and delivering globally measured results.
          </p>
          
          <h2 className="text-gradient" style={{ marginTop: '4rem', marginBottom: '2rem', fontSize: '2.5rem' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div style={{ padding: '2rem', background: 'rgba(2, 132, 199, 0.05)', borderRadius: '20px', border: '1px solid rgba(2, 132, 199, 0.1)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.6rem' }}>Elite Global Team</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>We bring together top-tier international talent in design, advanced engineering, and digital marketing.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(225, 29, 72, 0.05)', borderRadius: '20px', border: '1px solid rgba(225, 29, 72, 0.1)' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.6rem' }}>Tailored Strategy</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>No cookie-cutter solutions. Everything we architect is uniquely customized for your brand's specific growth targets.</p>
            </div>
            <div style={{ padding: '2rem', background: 'rgba(79, 70, 229, 0.05)', borderRadius: '20px', border: '1px solid rgba(79, 70, 229, 0.1)' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.6rem' }}>Result-Oriented</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>We focus purely on the metrics that define success: targeted traffic, deep engagement, and unparalleled conversions.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
