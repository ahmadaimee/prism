import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, Edit3, Type, Share2, MonitorSmartphone, Target, Search, BarChart, Star } from 'lucide-react';

const Services = () => {
  const allServices = [
    { title: 'Miami Web Design', icon: <MonitorSmartphone size={40} />, desc: 'We build responsive, ultra-fast websites tailored for the Florida market. We focus on local UX/UI that converts traffic into customers.' },
    { title: 'Miami SEO Strategies', icon: <TrendingUp size={40} />, desc: 'Climb the search rankings. We use proven on-page and off-page SEO strategies to make you the top-rated business in South Florida.' },
    { title: 'Florida Content Writing', icon: <Edit3 size={40} />, desc: 'Localize your message. We craft compelling copy for your landing pages that resonates specifically with Floridians.' },
    { title: 'Authority Blogging', icon: <Type size={40} />, desc: 'Boost your site’s topical authority with SEO-optimized blog posts specifically targeting high-intent Florida keywords.' },
    { title: 'Social Media Management', icon: <Share2 size={40} />, desc: 'Connect with your local community. We manage your social channels so you can focus on running your business.' },
    { title: 'Brand Identity', icon: <Palette size={40} />, desc: 'Stand out in Miami’s competitive market. We help you forge a memorable brand with stunning visual identity and logo design.' },
    { title: 'PPC & Paid Ads', icon: <Target size={40} />, desc: 'Hyper-targeted ad campaigns across Google and Meta to capture high-intent leads in your specific geographic zones.' },
    { title: 'Google Maps Optimization', icon: <Search size={40} />, desc: 'Capture local foot traffic. We optimize your Google Business Profile so nearby customers find your location instantly.' },
    { title: 'Reporting & Analytics', icon: <BarChart size={40} />, desc: 'Transparent reporting. We track metrics to show exactly how much your Miami market share is growing.' },
  ];

  const serviceReviews = [
    { name: "John M.", role: "South Florida Business", comment: "Their digital approach brought us phone calls within weeks! Absolutely unmatched service." },
    { name: "Amanda P.", role: "Miami E-Commerce", comment: "Their team rebuilt our store from the ground up. Online sales are up 45%!" },
    { name: "Carlos R.", role: "Tech Startup CEO", comment: "The branding perfectly captures the vibrant, modern energy of Miami." },
    { name: "Rebecca T.", role: "Local Marketing VP", comment: "We outsourced our local indexing and social media to Prism Presence. Unbelievable ROI." }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="liquid-blob blob-3" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.2 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
           <h1 style={{ fontSize: '4rem', color: 'var(--text-color)' }}>
            Digital Growth for <br />
            <span className="text-gradient">Miami Businesses</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '1.5rem auto', fontWeight: 500 }}>
            We provide a full-spectrum digital toolkit specifically optimized to help Florida businesses generate more leads and dominate their markets.
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
              style={{ padding: '3rem 2rem' }}
            >
               <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '2rem', display: 'inline-flex', padding: '1rem', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: 500 }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '8rem', paddingTop: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title text-gradient" style={{ fontSize: '2.5rem' }}>Local Feedback</h2>
            <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>See what our clients say about our robust solutions.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
           {serviceReviews.map((review, i) => (
            <div key={i} className="glass" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: "#eab308" }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 500 }}>"{review.comment}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-color)' }}>{review.name}</h4>
                  <small style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{review.role}</small>
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
