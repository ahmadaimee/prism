import React from 'react';
import { motion } from 'framer-motion';
import { Check, PhoneCall } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Digital Growth",
      price: "$199",
      period: "per month",
      description: "Accelerate your local presence with data-driven workflows in Southwest Florida.",
      features: [
        "Comprehensive Web Analytics",
        "Google Maps Integration",
        "Monthly Content Updates",
        "Florida Market Tracking",
      ],
      buttonText: "Start Growing",
      highlight: false
    },
    {
      name: "Miami Essential Presence",
      price: "$250",
      period: "per month",
      description: "Everything you need to keep your custom website running fast in Florida.",
      features: [
        "Premium Fast Cloud Hosting",
        "Routine Website Maintenance",
        "Monthly Technical Support",
        "Security & Uptime Monitoring",
        "Regular Cloud Backups"
      ],
      buttonText: "Get Standard Support",
      highlight: true
    },
    {
      name: "Enterprise Custom",
      price: "Custom",
      period: "flexible",
      description: "Tailored strategies for demanding digital ecosystems in South Florida.",
      features: [
        "Everything in previous tiers",
        "Dedicated Support Channel",
        "Custom Workflow Development",
        "Priority Response Times",
        "Strategic Consultation Calls"
      ],
      buttonText: "Contact for Pricing",
      highlight: false,
      callAction: true
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="hero" style={{ minHeight: '40vh', paddingTop: '8rem', paddingBottom: '2rem' }}>
        <div className="bg-glow" style={{ top: '10%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            Transparent <span className="text-gradient">Local Pricing</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '1.5rem auto', fontWeight: 500 }}>
            Choose the specific plan that fuels your Florida business.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`glass ${plan.highlight ? 'pricing-highlight' : ''}`}
              style={{
                padding: '3rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: plan.highlight ? '1px solid var(--primary)' : '1px solid rgba(0,0,0,0.05)',
                transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.highlight ? 10 : 1
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold',
                  boxShadow: '0 4px 10px rgba(2, 132, 199, 0.3)'
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: plan.highlight ? 'var(--primary)' : 'var(--text-color)' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '48px', fontWeight: 500 }}>{plan.description}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>{plan.price}</span>
                {plan.period && <span style={{ color: 'var(--text-muted)' }}> /{plan.period}</span>}
              </div>

              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-color)', fontWeight: 500 }}>
                      <Check size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button style={{ 
                width: '100%', 
                background: plan.highlight ? 'linear-gradient(135deg, var(--secondary), var(--primary))' : 'rgba(2, 132, 199, 0.05)',
                color: plan.highlight ? '#fff' : 'var(--primary)',
                border: plan.highlight ? 'none' : '1px solid rgba(2, 132, 199, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: plan.highlight ? '0 4px 15px var(--secondary-glow)' : 'none'
              }}>
                {plan.callAction && <PhoneCall size={18} />}
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
