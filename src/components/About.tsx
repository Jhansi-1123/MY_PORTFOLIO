
import React from 'react';
import aboutBG from '../assets/contact1.png'; 

const About: React.FC = () => {
  return (
    <section id="about" style={{
      padding: '120px 10%',
      textAlign: 'center',
      perspective: '1000px',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.65), rgba(5, 5, 5, 0.85)), url(${aboutBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed' 
    }}>
        <div style={{
        display: 'inline-block',
        padding: '5px 20px',
        borderRadius: '30px',
        background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))',
        color: '#d8b4fe',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        border: '1px solid rgba(147, 51, 234, 0.5)',
        boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)'
      }}>
        ✨ #About.Me
      </div>
      
      <h1 style={{ 
        fontSize: 'clamp(3rem, 8vw, 5rem)', 
        margin: '0 0 50px 0', 
        fontWeight: '900',
        color: 'white',
        textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
      }}>
        WHO <span style={{ color: '#ec4899' }}>I AM</span>
      </h1>

      <div 
        className="about-card"
        style={{
          backgroundColor: 'rgba(13, 17, 23, 0.8)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '30px',
          padding: '60px',
          textAlign: 'left',
          maxWidth: '1000px',
          margin: '0 auto',
          border: '2px solid rgba(168, 85, 247, 0.6)',
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)',
        }}
      >
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
              <div style={{ 
                width: '60px', height: '60px', background: '#9333ea', 
                borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', 
                fontSize: '2rem', boxShadow: '0 0 30px #9333ea'
              }}>🎓</div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'white' }}>Computer Science Engineer</h2>
                <p style={{ margin: 0, color: '#a855f7' }}>Specializing in AI & ML</p>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '1.2rem', lineHeight: '1.8' }}>
              I am a student at <span style={{color: '#ec4899', fontWeight: 'bold'}}>Gayatri Vidya Parishad College Of Engineering For Women</span>. 
              Passionate about integrating Neural Networks with elegant web design to build smarter digital worlds. Currently focusing on building data-driven systems that transform complex algorithms into seamless user experiences.
            </p>
          </div>

          <div style={{ 
            flex: 1, 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '30px', 
            borderRadius: '20px',
            border: '1px solid rgba(168, 85, 247, 0.3)'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, color: 'white', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#ec4899' }}>⚡</span> B.Tech 3rd Year
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#ec4899' }}>⚡</span> CGPA: 8.5/10
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#ec4899' }}>⚡</span> Tech Enthusiast
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#ec4899' }}>⚡</span> Building Smarter Digital Worlds
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-card:hover {
          transform: translateY(-15px) rotateX(5deg) rotateY(-2deg);
          box-shadow: 0 0 70px rgba(168, 85, 247, 0.6), 
                      0 0 20px rgba(236, 72, 153, 0.4); 
          border-color: #ec4899;
        }
      `}</style>
    </section>
  );
};

export default About;




