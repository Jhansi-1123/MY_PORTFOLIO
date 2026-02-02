
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = (id: string): React.CSSProperties => ({
    textDecoration: 'none',
    color: '#cbd5e1',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    position: 'relative',
    padding: '5px 0',
  });

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: scrolled ? '60px' : '80px', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 8%',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent', 
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.2)' : 'none',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      color: 'white'
    }}>
      <div style={{ 
        fontSize: '1.6rem', 
        fontWeight: '900', 
        letterSpacing: '1px',
        cursor: 'pointer',
        textShadow: '0 0 15px rgba(168, 85, 247, 0.5)'
      }}>
        <span style={{ color: '#a855f7' }}>DJ</span>
        <span style={{ color: '#ec4899' }}>.</span>
      </div>
      
      <ul style={{ 
        display: 'flex', 
        gap: '35px', 
        listStyle: 'none', 
        alignItems: 'center'
      }}>
        {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item === 'Home' ? 'Hero' : item.toLowerCase()}`} 
              style={navLinkStyle(item)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#a855f7';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a 
          href="#contact" 
          style={{
            padding: '8px 20px',
            background: 'linear-gradient(45deg, #9333ea, #ec4899)',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 'bold',
            color: 'white',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;



