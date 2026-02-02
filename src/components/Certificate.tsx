
import React, { useRef } from 'react';


import certBG from '../assets/dangg1.jpg';

interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  skills: string[]; 
  icon: string; 
  link: string;
  color: string;
}

const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const certs: CertificateItem[] = [
    { 
      title: "Problem Solving Through Programming In C", 
      issuer: "NPTEL", 
      year: "2025",  
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", 
      skills: ["C Programming", "Algorithms"],
      link: "YOUR_LINK",
      color: "#00599C"
    },
    { 
      title: "Web Full Stack Developer", 
      issuer: "Eduskills", 
      year: "2025", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      skills: ["React", "NodeJS", "MongoDB"],
      link: "YOUR_LINK",
      color: "#61DAFB"
    },
    { 
      title: "Programming In Java", 
      issuer: "NPTEL", 
      year: "2025", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      skills: ["Java SE", "OOPs"],
      link: "YOUR_LINK",
      color: "#E76F00"
    },
    { 
      title: "Employability Skills", 
      issuer: "Wadhwani Foundation", 
      year: "2025",  
      icon: "https://img.icons8.com/fluency/96/handshake.png", 
      skills: ["Communication", "Soft Skills"],
      link: "YOUR_LINK",
      color: "#F59E0B"
    },
    { 
      title: "GEN-AI", 
      issuer: "Eduskills", 
      year: "2025",  
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png", 
      skills: ["LLMs", "Prompt Engineering"],
      link: "YOUR_LINK",
      color: "#8B5CF6"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 420 : scrollLeft + 420;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="certificates" className="pro-cert-section" style={{
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.85)), url(${certBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="section-header" style={{ position: 'relative', zIndex: 2, textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
 }}>
        
        <h2 className="title">CERTIFICATES</h2>
        <div className="divider"></div>
      </div>

      <div className="cert-slider-container" style={{ position: 'relative', zIndex: 2 }}>
        <button onClick={() => scroll('left')} className="slide-btn left">〈</button>
        
        <div className="cert-grid" ref={scrollRef}>
          {certs.map((cert, index) => (
            <div key={index} className="pro-card" style={{ '--accent': cert.color } as any}>
              <div className="card-top">
                <div className="icon-wrapper">
                  <img src={cert.icon} alt={cert.title} className="realistic-img-icon" />
                </div>
                <span className="badge">Verified</span>
              </div>
              <div className="card-body">
                <p className="issuer-text">{cert.issuer}</p>
                <h3 className="cert-title-text">{cert.title}</h3>
                <div className="tags-container">
                  {cert.skills.map((s: string) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
                <div className="card-footer-info">
                  
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="slide-btn right">〉</button>
      </div>

      <style>{`
        .pro-cert-section { padding: 100px 5%; color: white; text-align: center; }
        .section-header { margin-bottom: 60px; }
        .title { font-size: 2.5rem; font-weight: 900; color: #f8fafc; letter-spacing: 1px; }
        .divider { width: 60px; height: 4px; background: #ec4899; margin: 15px auto; border-radius: 10px; }
        .subtitle { text-transform: uppercase; letter-spacing: 2px; color: #8892b0; font-size: 0.8rem; margin-bottom: 5px; }

        .cert-slider-container { position: relative; display: flex; align-items: center; max-width: 1300px; margin: 0 auto; }
        .cert-grid { display: flex; gap: 30px; overflow-x: auto; scroll-behavior: smooth; padding: 30px 10px; scrollbar-width: none; }
        .cert-grid::-webkit-scrollbar { display: none; }

        .pro-card { 
          min-width: 380px; 
          background: rgba(15, 23, 42, 0.7); 
          backdrop-filter: blur(10px);
          border-radius: 24px; text-align: left; 
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05); position: relative;
        }
        .pro-card:hover { transform: translateY(-12px); border-color: var(--accent); box-shadow: 0 20px 40px -20px var(--accent); }

        .card-top { height: 140px; background: rgba(10, 17, 32, 0.5); display: flex; align-items: center; justify-content: center; position: relative; }
        .icon-wrapper { width: 80px; height: 80px; background: rgba(255,255,255,0.03); border-radius: 20px; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px); border: 1px solid rgba(255,255,255,0.1); }
        .realistic-img-icon { width: 50px; height: 50px; object-fit: contain; filter: drop-shadow(0 0 8px rgba(255,255,255,0.2)); }
        
        .badge { position: absolute; top: 15px; right: 15px; font-size: 0.7rem; color: #10b981; background: rgba(16,185,129,0.1); padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(16,185,129,0.2); font-weight: 600; }

        .card-body { padding: 30px; }
        .issuer-text { color: var(--accent); font-size: 0.85rem; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; }
        .cert-title-text { font-size: 1.2rem; font-weight: 700; color: #f1f5f9; height: 2.8em; line-height: 1.4; margin-bottom: 20px; }

        .tags-container { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 25px; height: 35px; }
        .skill-tag { font-size: 0.75rem; background: rgba(255,255,255,0.05); color: #94a3b8; padding: 5px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); }

        .card-footer-info { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px; }
        .cert-link { color: #ec4899; text-decoration: none; font-weight: bold; font-size: 0.9rem; transition: 0.3s; }
        .cert-link:hover { text-shadow: 0 0 10px #ec4899; }

        .slide-btn { width: 50px; height: 50px; border-radius: 50%; background: #1e293b; color: white; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: 0.3s; z-index: 10; display: flex; align-items: center; justify-content: center; }
        .slide-btn:hover { background: #ec4899; transform: scale(1.1); box-shadow: 0 0 20px rgba(236,72,153,0.4); }
      `}</style>
    </section>
  );
};

export default Certificates;



