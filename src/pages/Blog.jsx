import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, User, X } from 'lucide-react';

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const blogs = [
    {
      title: "Why SEO is Crucial for Enterprise Businesses in 2026",
      excerpt: "Is your business struggling to capture organic market share? Discover why technical SEO and robust infrastructure are the modern secrets to hyper-growth.",
      content: "Search Engine Optimization (SEO) has evolved far beyond traditional keyword stuffing and basic backlinks. In 2026, enterprise SEO is entirely dictated by AI-driven semantic search, ultra-fast core web vitals, and algorithmic credibility. When a business ignores technical infrastructure, they aren't just losing a few visitors—they are suffocating their core revenue streams to competitors who have invested in search engine dominance. Enterprise algorithms now heavily reward organizations that produce deep, intent-driven content structures that explicitly answer consumer queries before they even load the page.",
      date: "April 15, 2026",
      author: "Growth Team",
      category: "Digital Marketing"
    },
    {
      title: "Top 5 Web Design Trends Dominating the Market",
      excerpt: "Global standards demand websites that execute flawlessly. From Liquid Glassmorphism to ultra-fast rendering, here is how top brands are winning online.",
      content: "The aesthetic bar has been raised permanently. In the current digital landscape, modern users make a trust decision about your brand within 50 milliseconds of page load. \n\nThe top trends dominating UX/UI right now include:\n1. Liquid Glassmorphism (High-fidelity blurs layered with dynamic gradients).\n2. Lightning-fast SPA rendering using modern frameworks.\n3. Micro-interactions that reward users instantly for scrolling.\n4. Hyper-minimalist dark modes with aggressive neon accents.\n5. Zero-latency video integration that doesn't drag down performance scores. \n\nBy adopting these architectural patterns, our agency is deploying platforms that universally increase conversion metrics.",
      date: "April 10, 2026",
      author: "UI/UX Experts",
      category: "Web Design"
    },
    {
      title: "How to Rank #1 on Google Globally",
      excerpt: "The digital landscape is fiercely competitive. Read our comprehensive technical guide on dominating global search engine results pages and driving organic leads.",
      content: "Ranking globally requires a highly systematic technical setup. It's no longer about just publishing blog posts—it's about how your entire internet presence is networked. \n\nFirstly, you must implement flawless internationalization (i18n) and hreflang tag structures so search engines understand exactly which territory content belongs to. Secondly, your server delivery must be edge-optimized (CDNs) so that a user in Tokyo gets the exact same sub-second response time as a user in New York. Finally, acquiring authoritative global backlinks from industry-leading publications signals to Google that your brand is an international authority, solidifying the number one spot across vast regions.",
      date: "April 02, 2026",
      author: "SEO Strategists",
      category: "Search Engine Optimization"
    }
  ];

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <section className="hero" style={{ minHeight: '30vh', paddingTop: '10rem', paddingBottom: '2rem', position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
             <h1 style={{ fontSize: '3.5rem', color: 'var(--text-color)' }}>
              Digital Growth <span className="text-gradient">Insights</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto', fontWeight: 500 }}>
              Strategies, technical tips, and UI/UX trends to help your business dominate global search and outpace the competition.
            </p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {blogs.map((blog, index) => (
              <motion.div 
                key={index} 
                className="glass" 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{ display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}
              >
                <div style={{ height: '4px', width: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
                <div style={{ padding: '2.5rem 2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    {blog.category}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-color)', lineHeight: 1.4 }}>
                    {blog.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontWeight: 500, marginBottom: '2rem', flexGrow: 1 }}>
                    {blog.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={14} /> {blog.author}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {blog.date}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedArticle(blog)}
                    style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2, 132, 199, 0.05)', color: 'var(--primary)', boxShadow: 'none', border: '1px solid rgba(2, 132, 199, 0.1)' }}
                  >
                    Read Article <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* Full Article Pop-up Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '800px',
                background: 'var(--bg-color)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                display: 'flex', flexDirection: 'column',
                maxHeight: '90vh'
              }}
            >
              {/* Modal Header */}
              <div style={{ padding: '2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', position: 'relative', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.05), transparent)' }}>
                <button 
                  onClick={() => setSelectedArticle(null)}
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(0,0,0,0.05)', color: 'var(--text-color)', padding: '0.5rem', borderRadius: '50%', border: 'none', boxShadow: 'none' }}
                >
                  <X size={20} />
                </button>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'block' }}>
                  {selectedArticle.category}
                </span>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-color)', lineHeight: 1.3, marginBottom: '1rem', paddingRight: '2rem' }}>
                  {selectedArticle.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={16} /> {selectedArticle.author}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={16} /> {selectedArticle.date}</div>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '3rem 2rem', overflowY: 'auto', flexGrow: 1 }}>
                <p style={{ color: 'var(--text-color)', fontSize: '1.1rem', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                  {selectedArticle.content}
                </p>
                
                <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(2, 132, 199, 0.05)', borderRadius: '16px', border: '1px solid rgba(2, 132, 199, 0.1)', textAlign: 'center' }}>
                  <h4 style={{ color: 'var(--text-color)', fontSize: '1.2rem', marginBottom: '1rem' }}>Ready to implement these strategies?</h4>
                  <a href="/contact" style={{ display: 'inline-block' }}>
                    <button style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Speak to an Expert</button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;
