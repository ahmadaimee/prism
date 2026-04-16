import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Edit3, Type, Share2, MonitorSmartphone, Target, Search, BarChart, Users, Star } from 'lucide-react';
import abstractImage from '../assets/abstract_glow.png';

const Services = () => {
  const allServices = [
    { title: 'Website Design & Development', icon: <MonitorSmartphone size={40} />, desc: 'We build responsive, ultra-fast, and stunning websites tailored to represent your brand perfectly across all devices. We focus on UX/UI that converts.' },
    { title: 'Search Engine Optimization (SEO)', icon: <TrendingUp size={40} />, desc: 'Climb the search rankings with our comprehensive on-page, off-page, and technical SEO strategies. Dominating local and global search results.' },
    { title: 'Expert Content Writing', icon: <Edit3 size={40} />, desc: 'Words matter. We craft compelling copy for your landing pages, ads, and email campaigns to drive conversions and resonate with your audience.' },
    { title: 'Blog & Article Writing', icon: <Type size={40} />, desc: 'Keep your audience engaged and boost your site’s authority with well-researched, SEO-optimized blog posts on a consistent schedule.' },
    { title: 'Social Media Management', icon: <Share2 size={40} />, desc: 'From content creation to community management, we handle your social channels so you can focus on running your business and scaling operations.' },
    { title: 'Brand Identity Strategy', icon: <Palette size={40} />, desc: 'We help you forge a memorable brand that resonates with your target audience through visual identity, logo design, and clear messaging.' },
    { title: 'PPC & Paid Advertising', icon: <Target size={40} />, desc: 'Maximize your ROI with targeted ad campaigns across Google Ads and Meta. We optimize every click to bring high-quality leads.' },
    { title: 'Local SEO & Maps', icon: <Search size={40} />, desc: 'Capture local foot traffic. We optimize your Google Business Profile and local directory listings so nearby customers find you instantly.' },
    { title: 'Data Analytics & Reporting', icon: <BarChart size={40} />, desc: 'We do not guess. We track, measure, and analyze performance metrics to continuously improve campaigns and highlight clear ROI.' },
  ];

  const serviceReviews = [
    { name: "John M.", role: "Local Business Owner", comment: "The Local SEO package started bringing us calls within weeks!" },
    { name: "Amanda P.", role: "E-Commerce Founder", comment: "Their team rebuilt our Shopify store from the ground up. Sales are up 45%!" },
    { name: "Carlos R.", role: "Startup CEO", comment: "The branding and website design perfectly captures what our tech startup stands for." },
    { name: "Rebecca T.", role: "Marketing VP", comment: "We outsourced our blog writing and social media to Prism Presence, and it was the best decision we made this year." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '50vh', paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <img src={abstractImage} alt="Background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, zIndex: 0 }} />
        <div className="bg-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
           <h1 style={{ fontSize: '4rem' }}>
            Comprehensive <br />
            <span className="text-gradient">Digital Solutions</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto' }}>
            We provide a full-spectrum digital toolkit designed to generate more leads, sales, and explosive growth for your brand.
          </p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {allServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass" 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ padding: '3rem 2rem', background: 'rgba(255,255,255,0.02)' }}
            >
               <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '2rem', display: 'inline-flex', padding: '1rem', background: 'rgba(0, 242, 254, 0.1)', borderRadius: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '8rem', paddingTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem' }}>Service Feedback</h2>
            <p style={{ color: 'var(--text-muted)' }}>See what clients say about specific offerings.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
           {serviceReviews.map((review, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: "#fbbf24" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#e2e8f0', fontSize: '0.95rem' }}>"{review.comment}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'white' }}>{review.name}</h4>
                  <small style={{ color: 'var(--text-muted)' }}>{review.role}</small>
                </div>
              </div>
            </div>
           ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
