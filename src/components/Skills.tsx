

import React, { useEffect, useState, useRef } from 'react';
import skillBG from '../assets/dance1.png'; 


const StarRating = ({ percentage, isVisible }: { percentage: string; isVisible: boolean }) => {
  const value = parseInt(percentage);
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    let isFull = value >= i * 20 - 5;
    stars.push(
      <span 
        key={i} 
        className={`realistic-star ${isVisible ? 'animate-drop' : ''}`}
        style={{ 
          animationDelay: isVisible ? `${0.5 + (i * 0.1)}s` : '0s',
          color: isFull ? "#FFD700" : "#444"
        }}
      >
        ★
      </span>
    );
  }
  return <div className="stars-container">{stars}</div>;
};

const TechStack: React.FC = () => {
  

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: "Core Fundamentals",
      color: "#a855f7",
      skills: [
        { name: "Operating System", level: "90%" },
        { name: "Compiler Design", level: "85%" },
        { name: "Database Management System", level: "70%" }
      ]
    },
    {
      title: "AI & Data Science",
      color: "#06b6d4",
      skills: [
        { name: "Machine Learning", level: "95%" },
        { name: "Deep Learning", level: "75%" },
        { name: "Data Preprocessing", level: "70%" }
      ]
    },
    {
      title: "Programming",
      color: "#10b981",
      skills: [
        { name: "C-Language", level: "95%" }, 
        { name: "Java", level: "90%" }, 
        { name: "SQL", level: "70%" }
      ]
    },
    {
      title: "Soft Skills",
      color: "#f97316",
      skills: [
        { name: "Team Leadership", level: "95%" }, 
        { name: "Time Management", level: "90%" }, 
        { name: "Problem Solving", level: "85%" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="skills-nest-section" 
      ref={sectionRef}
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 0, 0.75), rgba(5, 5, 5, 0.95)), url(${skillBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
         textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'


      }}
    >
      
      <div className={`matrix-header ${isVisible ? 'header-reveal' : ''}`}>
        <h2 className="matrix-title">SKILL <span className="pink-text">MATRIX</span></h2>
        <p className="matrix-subtitle">A layered showcase of my technical depth and practical expertise across multiple domains.</p>
        <div className="header-underline"></div>
      </div>

      <div className={`nest-layout ${isVisible ? 'fade-in' : ''}`}>
        {skillGroups.map((group, idx) => (
          <div key={idx} className={`hex-card card-${idx + 1} floating-anim`} style={{ '--theme': group.color, '--delay': `${idx * 0.2}s` } as any}>
            <div className="hex-border">
              <div className="hex-content">
                <h3 className="group-title">{group.title}</h3>
                <div className="progress-list">
                  {group.skills.map((s, i) => (
                    <div key={i} className="skill-row" style={{ marginBottom: '15px' }}>
                      <div className="skill-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#cbd5e1', fontSize: '0.9rem' }}>
                        <span>{s.name}</span>
                        <StarRating percentage={s.level} isVisible={isVisible} />
                      </div>
                      <div className="bar-bg">
                        <div 
                          className={`bar-fill ${isVisible ? 'animate-grow' : ''}`} 
                          style={{ '--target-width': s.level, backgroundColor: group.color } as any}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hex-shadow"></div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-nest-section { 
            padding: 120px 0; 
            min-height: 100vh; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            overflow: hidden; 
            position: relative;
        }

        .matrix-header { 
            text-align: center; 
            margin-bottom: 60px; 
            opacity: 0; 
            transform: translateY(30px); 
            transition: all 1s ease-out;
            position: relative;
            z-index: 2;
        }
        .header-reveal { opacity: 1; transform: translateY(0); }
        .matrix-title { font-size: 3rem; font-weight: 900; letter-spacing: 2px; color: white; margin-bottom: 10px; }
        .pink-text { color: #ec4899; text-shadow: 0 0 15px rgba(236, 72, 153, 0.4); }
        .matrix-subtitle { color: #8892b0; font-size: 1.1rem; max-width: 600px; margin: 0 auto; line-height: 1.6; }
        .header-underline { width: 60px; height: 4px; background: #ec4899; margin: 20px auto; border-radius: 10px; }

        .nest-layout { display: grid; grid-template-columns: repeat(2, 380px); gap: 20px; position: relative; z-index: 2; }
        
        .hex-card { 
            width: 400px; 
            height: 440px; 
            position: relative; 
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease; 
            cursor: pointer;
        }

        .hex-card:hover {
            transform: translateY(-20px) scale(1.05) !important; 
            filter: brightness(1.2);
            z-index: 10;
        }

        .hex-card:hover .hex-shadow {
            opacity: 0.6; 
            filter: blur(40px);
        }

        .card-3 { margin-top: -100px; margin-left: -200px; }
        .card-4 { margin-top: -100px; margin-left: 20px; }
        .card-1 { margin-left: -20px; }
        .card-2 { margin-left: 200px; }

        .floating-anim { animation: float 6s ease-in-out infinite; animation-delay: var(--delay); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }

        .hex-border { width: 100%; height: 100%; background: var(--theme); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); display: flex; align-items: center; justify-content: center; z-index: 2; position: relative; }
        .hex-content { width: 97%; height: 97%; background: #0f172a; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        .group-title { color: white; font-size: 1.4rem; font-weight: 800; margin-bottom: 25px; text-align: center; border-bottom: 2px solid var(--theme); padding-bottom: 10px; }

        .stars-container { display: flex; gap: 3px; }
        .realistic-star { font-size: 1.2rem; display: inline-block; opacity: 0; transform: translateY(-30px); text-shadow: 0 0 10px rgba(255, 215, 0, 0.4); }
        .animate-drop { animation: starDrop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        @keyframes starDrop { to { opacity: 1; transform: translateY(0); } }

        .bar-bg { width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 10px; margin-top: 5px; }
        .bar-fill { height: 100%; border-radius: 10px; width: 0; box-shadow: 0 0 10px var(--theme); }
        .animate-grow { animation: growWidth 1.5s ease-out forwards; animation-delay: 0.3s; }
        @keyframes growWidth { to { width: var(--target-width); } }

        .hex-shadow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--theme); filter: blur(50px); opacity: 0.15; z-index: 1; transition: 0.4s ease; }

        @media (max-width: 900px) {
            .nest-layout { display: flex; flex-direction: column; align-items: center; gap: 40px; }
            .hex-card { margin: 0 !important; width: 90vw; }
            .matrix-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;




