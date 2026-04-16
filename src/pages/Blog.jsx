import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogs = [
    {
      title: "Why Local SEO is Crucial for Lehigh Acres Businesses in 2026",
      excerpt: "Is your Southwest Florida business struggling to get foot traffic? Discover why Google Maps and Local SEO are the secret weapons for Lehigh Acres growth.",
      date: "April 15, 2026",
      author: "Local SEO Team",
      category: "Local Marketing"
    },
    {
      title: "Top 5 Web Design Trends Dominating Miami",
      excerpt: "Miami's vibrant culture demands websites that pop. From translucent glassmorphism to ultra-fast loading times, here is how Miami brands are winning online.",
      date: "April 10, 2026",
      author: "Design Experts",
      category: "Web Design"
    },
    {
      title: "How to Rank #1 on Google in South Florida",
      excerpt: "Competition in Miami and Fort Myers is fierce. Read our comprehensive guide on dominating local search results and driving organic leads.",
      date: "April 02, 2026",
      author: "SEO Strategists",
      category: "Search Engine Optimization"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '30vh', paddingTop: '10rem', paddingBottom: '2rem', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
           <h1 style={{ fontSize: '3.5rem', color: 'var(--text-color)' }}>
            Digital Marketing <span className="text-gradient">Insights</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto', fontWeight: 500 }}>
            Strategies, tips, and trends to help your Florida business dominate local search and outpace the competition.
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
                <button style={{ marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2, 132, 199, 0.05)', color: 'var(--primary)', boxShadow: 'none', border: '1px solid rgba(2, 132, 199, 0.1)' }}>
                  Read Article <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
