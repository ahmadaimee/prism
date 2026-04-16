import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, TrendingUp, Edit3, ArrowRight, Star } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const services = [
    { title: 'UX/UI Web Design', icon: <Palette size={32} />, desc: 'Custom, high-performing websites engineered to convert global traffic into revenue.' },
    { title: 'Market Dominance', icon: <TrendingUp size={32} />, desc: 'Rank #1 in your industry. Data-driven digital strategies to capture international market share.' },
    { title: 'Brand Storytelling', icon: <Edit3 size={32} />, desc: 'Engaging, psychology-driven copy that transforms your average visitors into loyal clients.' },
  ];

  const reviews = [
    { name: "Sarah J.", role: "Tech Enterprise CEO", comment: "Prism Presence completely transformed our digital footprint globally. Our organic traffic tripled in 3 months!" },
    { name: "Mark R.", role: "E-Commerce Founder", comment: "Their digital strategy got us ranking #1 in competitive search terms. We are getting massive volume now." },
    { name: "Elena G.", role: "Marketing Director", comment: "Incredible attention to detail. The custom website package offered unbelievable value and immediate ROI." },
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
        
        <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={itemVariants} className="glass" whileHover={{ scale: 1.05 }} style={{ padding: '0.6rem 1.8rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 600, borderRadius: '50px', fontSize: '0.9rem' }}>
            🌍 Globally Recognized Digital Agency
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: '4.5rem', fontWeight: 800, margin: '1rem 0', color: 'var(--text-color)' }}>
            Elevate Your Global <br />
            <span className="text-gradient">
              <Typewriter
                words={['Market Share', 'Web Presence', 'Digital Growth', 'Brand Legacy']}
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
            We are the premier digital agency for ambitious brands. We engineer stunning websites and elite SEO strategies that turn searchers into long-term enterprise customers, anywhere in the world.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/services">
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore Solutions <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/pricing">
              <button className="glass" style={{ background: 'rgba(255, 255, 255, 0.5)', color: 'var(--text-color)', boxShadow: 'none' }}>
                View Pricing
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <div style={{ padding: '2rem 0', position: 'relative', zIndex: 10 }}>
        <div className="container glass" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', padding: '2rem', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>Top Rated Global SEO</h2>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>Elite Web Engineers</h2>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-muted)' }}>Verified Growth Partners</h2>
        </div>
      </div>

      <section className="container" style={{ padding: '6rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Dominate Digital Markets</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>The digital landscape is highly competitive. Our tailored strategies put you ahead of the rest.</p>
        </motion.div>
        
        <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="service-card glass" style={{ padding: '3rem 2rem' }}>
              <div className="service-icon" style={{ color: "var(--primary)", marginBottom: '1.5rem', background: 'rgba(2, 132, 199, 0.1)', display: 'inline-flex', padding: '1rem', borderRadius: '15px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-color)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 500 }}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/services"><button>View All Solutions</button></Link>
        </div>
      </section>

      <section className="promo-section" style={{ position: 'relative' }}>
        <motion.div className="container" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="promo-card glass" style={{ padding: '5rem 3rem', background: 'var(--text-color)', border: '1px solid var(--primary)' }}>
            <div className="promo-badge" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.4rem 1.2rem', background: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(2, 132, 199, 0.5)', color: '#38bdf8', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(2, 132, 199, 0.2)', marginBottom: '1rem' }}>
              <span style={{ marginRight: '0.6rem', width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8', display: 'inline-block' }}></span>
              ENTERPRISE EXCLUSIVE
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>Custom Global Websites</h2>
            <div className="price" style={{ margin: '2rem 0', color: '#ffffff' }}>$499<span style={{ color: 'rgba(255,255,255,0.6)' }}>/mo</span></div>
            <ul className="promo-features" style={{ margin: '3rem 0', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
              <li><CheckIcon /> Premium UX/UI Design</li>
              <li><CheckIcon /> Integrated Digital Strategy</li>
              <li><CheckIcon /> Global Edge Cloud Hosting</li>
              <li><CheckIcon /> Dedicated Support</li>
            </ul>
            <p className="slots-left" style={{ color: 'var(--accent)', fontWeight: 700 }}>🚨 High Demand! Only 2 spots left this quarter.</p>
            <Link to="/pricing">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ marginTop: '2rem', padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>Lock In Your Spot</motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="container" style={{ padding: '8rem 2rem' }}>
        <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h2 className="section-title text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Global Success Stories</h2>
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
