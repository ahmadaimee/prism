import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Edit3, Type, Share2, MonitorSmartphone } from 'lucide-react';

const Services = () => {
  const allServices = [
    { title: 'Website Design & Development', icon: <MonitorSmartphone size={40} />, desc: 'We build responsive, ultra-fast, and stunning websites tailored to represent your brand perfectly across all devices.' },
    { title: 'Search Engine Optimization (SEO)', icon: <TrendingUp size={40} />, desc: 'Climb the search rankings with our comprehensive on-page, off-page, and technical SEO strategies.' },
    { title: 'Expert Content Writing', icon: <Edit3 size={40} />, desc: 'Words matter. We craft compelling copy for your landing pages, ads, and email campaigns to drive conversions.' },
    { title: 'Blog & Article Writing', icon: <Type size={40} />, desc: 'Keep your audience engaged and boost your site’s authority with well-researched, SEO-optimized blog posts.' },
    { title: 'Social Media Management', icon: <Share2 size={40} />, desc: 'From content creation to community management, we handle your social channels so you can focus on running your business.' },
    { title: 'Brand Identity Strategy', icon: <Palette size={40} />, desc: 'We help you forge a memorable brand that resonates with your target audience through visual and messaging strategies.' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '8rem', paddingBottom: '2rem' }}>
        <div className="bg-glow" style={{ top: '20%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto' }}>
            Comprehensive digital marketing and design solutions designed to generate more leads, sales, and growth for your business.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
          {allServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass" 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '1.5rem' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
