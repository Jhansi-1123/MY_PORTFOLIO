

import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import heroBG from '../assets/jjjj.jpg';

const Hero: React.FC = () => {
  const GithubIcon = FiGithub as any;
  const LinkedinIcon = FiLinkedin as any;
  const MailIcon = FiMail as any;
  
  const iconBoxStyle: React.CSSProperties = {
    width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: '15px', background: 'rgba(255, 255, 255, 0.05)', border: '1.2px solid rgba(168, 85, 247, 0.4)',
    color: '#cbd5e1', fontSize: '1.5rem', transition: 'all 0.3s ease', cursor: 'pointer', textDecoration: 'none',
  };

  return (
    <section id="Hero" style={{
      height: 'calc(100vh - 70px)',
      marginTop: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8%',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', 
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      <div style={{ flex: 1.2, zIndex: 10 }}>
        <h3 style={{ color: '#a855f7', fontSize: '1rem', marginBottom: '8px' }}>
          Welcome to my digital universe ✨
        </h3>
        
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', margin: '0', fontWeight: 'bold', textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'


           }}
        >
          DASARI <br /> 
          <span style={{ color: '#ec4899' }}>JHANSI</span>
        </motion.h1>
        
        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', margin: '20px 0', maxWidth: '480px' }}>
          I'm a B.Tech student | Weaving together clean code and creative design to redefine the modern web.
        </p>
        
        <div style={{ display: 'flex', gap: '15px', marginTop: '25px' }}>
          <button style={{ padding: '12px 28px', backgroundColor: '#9333ea', border: 'none', color: 'white', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold' }}>
            Explore My Work →
          </button>
          
          <a
            href={`${process.env.PUBLIC_URL}/resume2.pdf`} 
            target="_blank"                       
            rel="noreferrer"                       
            style={{ 
              textDecoration: 'none',
              padding: '12px 28px', 
              backgroundColor: 'orchid', 
              border: '1px solid white', 
              color: 'purple', 
              borderRadius: '50px', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              minWidth: '140px'
            }}
          >
            View Resume
          </a>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginTop: '45px' }}>
          <a href="https://github.com/Jhansi-1123" target="_blank" rel="noreferrer" style={iconBoxStyle} title="GitHub"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/jhansi-dasari-74938a331" target="_blank" rel="noreferrer" style={iconBoxStyle} title="LinkedIn"><LinkedinIcon /></a>
          <a href="mailto:jhansicsm.genai@gmail.com" style={iconBoxStyle} title="Email"><MailIcon /></a>
        </div>
      </div>

      <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} style={{ flex: 0.8, display: 'flex', justifyContent: 'center', zIndex: 10 }}>
        <div style={{ width: 'min(360px, 46vh)', height: 'min(360px, 46vh)', borderRadius: '50%', border: '6px solid rgba(255, 255, 255, 0.05)', overflow: 'hidden', boxShadow: '0 0 50px rgba(147, 51, 234, 0.3)' }}>
          <img src="https://via.placeholder.com/400" alt="Jhansi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;




