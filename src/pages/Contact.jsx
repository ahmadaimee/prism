import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual form submission logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '30vh', paddingTop: '10rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-color)', fontSize: '3.5rem' }}>
            Let's <span className="text-gradient">Connect</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '1.5rem auto', fontWeight: 500 }}>
            Ready to accelerate your digital growth? Reach out to our team of experts today.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Contact Info */}
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Whether you have a question about our services, pricing, or completely custom setups, our team is ready to answer all your questions.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}><Mail size={24} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-muted)', margin: 0 }}>Email Us</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: 600, fontSize: '1.1rem' }}>hello@prismpresence.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}><Phone size={24} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-muted)', margin: 0 }}>Call Us</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: 600, fontSize: '1.1rem' }}>+1 (555) 123-4567</p>
                </div>
              </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}><MapPin size={24} /></div>
                <div>
                  <h4 style={{ color: 'var(--text-muted)', margin: 0 }}>Global Headquarters</h4>
                  <p style={{ color: 'var(--text-color)', fontWeight: 600, fontSize: '1.1rem' }}>Digital Remote First</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="glass" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} style={{ padding: '3rem', borderRadius: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-color)' }}>Send a Message</h3>
            {submitted && (
              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--text-color)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', marginBottom: '2rem', fontWeight: 600 }}>
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Your Name</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  required 
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontFamily: 'inherit' }}
                  placeholder="John Doe"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Email Address</label>
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  required 
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontFamily: 'inherit' }}
                  placeholder="john@example.com"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Message</label>
                <textarea 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})} 
                  required 
                  rows="5"
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.8)', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
                  placeholder="How can we help you conquer the digital space?"
                ></textarea>
              </div>
              <button type="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
