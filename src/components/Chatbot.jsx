import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Jessica. How can I help you accelerate your digital growth today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsgs = [...messages, { id: Date.now(), text: input, sender: 'user' }];
    setMessages(newMsgs);
    setInput('');
    
    // Simple logic flow for Jessica chatbot
    setTimeout(() => {
      let botReply = '';
      if (step === 0) {
        botReply = "That sounds great! Are you looking for Website Design, SEO, or Social Media Management?";
        setStep(1);
      } else if (step === 1) {
        botReply = "Excellent choice. Our experts can definitely help with that. To get started, could you provide your email address?";
        setStep(2);
      } else if (step === 2) {
        if (input.includes('@')) {
          botReply = "Perfect! I've noted your email. One of our lead digital strategists will contact you shortly to schedule a free consultation. Is there anything else you need?";
          setStep(3);
        } else {
          botReply = "Hmm, that didn't look like a valid email. Could you please provide an email address like name@example.com?";
        }
      } else {
        botReply = "Thank you for chatting! We'll be in touch soon.";
      }
      
      setMessages(prev => [...prev, { id: Date.now(), text: botReply, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              style={{
                position: 'absolute',
                bottom: '5rem',
                right: 0,
                width: '350px',
                height: '500px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Header */}
              <div style={{ padding: '1.25rem', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Jessica</h3>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', padding: '0.25rem', boxShadow: 'none', border: 'none', color: 'white' }}>
                  <X size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div style={{ flexGrow: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.map((msg) => (
                  <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '80%', padding: '0.75rem 1rem', borderRadius: '18px', fontSize: '0.95rem', lineHeight: 1.4,
                      background: msg.sender === 'user' ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                      color: msg.sender === 'user' ? 'white' : 'var(--text-color)',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
                      borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '18px'
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} style={{ borderTop: '1px solid rgba(0,0,0,0.05)', padding: '1rem', display: 'flex', gap: '0.5rem', background: 'white' }}>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..." 
                  style={{ flexGrow: 1, padding: '0.75rem', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none', background: 'rgba(0,0,0,0.02)' }}
                />
                <button type="submit" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', flexShrink: 0 }}>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(2, 132, 199, 0.4)', padding: 0 }}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </>
  );
};

export default Chatbot;
