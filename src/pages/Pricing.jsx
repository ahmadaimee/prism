import React from 'react';
import { motion } from 'framer-motion';
import { Check, PhoneCall, Shield, TrendingUp, MonitorSmartphone, Share2 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Website Care Plan",
      price: "$199",
      period: "per month",
      description: "Ideal for businesses that just want everything handled and running smoothly.",
      icon: <Shield size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />,
      features: [
        "Website hosting & domain management",
        "Business email setup & support",
        "Security monitoring & core updates",
        "Bug fixes & minor adjustments",
        "Up to 5 blog posts per month",
      ],
      buttonText: "Get Standard Support",
      highlight: false
    },
    {
      name: "Growth Plan",
      price: "$399",
      period: "per month",
      description: "Designed for businesses that want to actively grow and generate more leads.",
      icon: <TrendingUp size={32} style={{ color: 'white', marginBottom: '1rem' }} />,
      features: [
        "Everything in Website Care Plan",
        "Full SEO optimization for top rankings",
        "Local business & Maps optimization",
        "Performance & speed improvements",
        "Enhanced content strategy support",
      ],
      buttonText: "Start Growing",
      highlight: true
    },
    {
      name: "Social Media + Web",
      price: "$599",
      period: "per month",
      description: "Best for businesses wanting their entire online presence handled expertly.",
      icon: <Share2 size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />,
      features: [
        "Everything in the Growth Plan",
        "Social media posting & creation",
        "Engagement & profile management",
        "Platform-wide content strategy",
        "Coordinated global branding",
      ],
      buttonText: "Get Full Bundle",
      highlight: false
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '30vh', paddingTop: '10rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--text-color)', fontSize: '3.5rem' }}>
            Flexible <span className="text-gradient">Pricing</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '1.5rem auto', fontWeight: 500 }}>
            Choose the specific plan that fuels your business growth. We handle the technical operations so you can focus on scale.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`glass ${plan.highlight ? 'pricing-highlight' : ''}`}
              style={{
                padding: '3.5rem 2.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: plan.highlight ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.8)',
                transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.highlight ? 10 : 1,
                background: plan.highlight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.45)'
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
                  color: 'white', padding: '0.4rem 1.5rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 'bold',
                  boxShadow: '0 4px 10px rgba(2, 132, 199, 0.3)', letterSpacing: '1px'
                }}>
                  MOST POPULAR
                </div>
              )}
              
              {plan.highlight ? (
                <div style={{ display: 'inline-block', padding: '1rem', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', borderRadius: '20px', alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  {React.cloneElement(plan.icon, { color: 'white' })}
                </div>
              ) : (
                <div style={{ display: 'inline-block', padding: '1rem', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '20px', alignSelf: 'flex-start', marginBottom: '1rem' }}>
                  {plan.icon}
                </div>
              )}

              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: plan.highlight ? 'var(--primary)' : 'var(--text-color)' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '48px', fontWeight: 500 }}>{plan.description}</p>
              
              <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '2.5rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: 'var(--text-color)' }}>{plan.price}</span>
                {plan.period && <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}> /{plan.period}</span>}
              </div>

              <div style={{ flexGrow: 1, marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem', color: 'var(--text-color)', fontWeight: 500, fontSize: '1.05rem' }}>
                      <Check size={20} style={{ color: plan.highlight ? 'var(--secondary)' : 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                      <span style={{ lineHeight: 1.4 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button style={{ 
                width: '100%', 
                background: plan.highlight ? 'linear-gradient(135deg, var(--secondary), var(--primary))' : 'rgba(255, 255, 255, 0.8)',
                color: plan.highlight ? '#fff' : 'var(--text-color)',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                padding: '1rem',
                boxShadow: plan.highlight ? '0 10px 25px rgba(2, 132, 199, 0.3)' : '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* One-Time Setup Banner */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <motion.div 
          className="glass" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          style={{ padding: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4))' }}
        >
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-color)' }}>One-Time Website Setup</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '2rem' }}>
              Prefer not to be on a monthly plan? We offer robust one-time setups ensuring you launch with a premium, custom-built digital foundation.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                <MonitorSmartphone size={24} style={{ color: 'var(--primary)' }} />
                Custom website design and comprehensive build
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                <Shield size={24} style={{ color: 'var(--primary)' }} />
                Basic setup of hosting, domain, and business email
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                <TrendingUp size={24} style={{ color: 'var(--primary)' }} />
                Initial configuration and frictionless launch
              </li>
            </ul>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '2rem', fontStyle: 'italic' }}>
              *All websites require standard third-party services (domain registration, hosting). Total setup support packages start around $600.
            </p>
          </div>
          
          <div style={{ flex: '0 1 300px', textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.8)', borderRadius: '24px', border: '1px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <p style={{ color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Starts At</p>
            <div style={{ fontSize: '4rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1 }}>$800</div>
            <button style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <PhoneCall size={18} /> Call us to Start
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Pricing;
