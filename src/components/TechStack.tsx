
import React from 'react';
import marqueeBG from '../assets/dance1.png'; 

const TechStack: React.FC = () => {
  const tools = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "SQL", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
  ];

  return (
    <div 
      id="skills" 
      className="tech-section"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 0, 0.75), rgba(5, 5, 5, 0.9)), url(${marqueeBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textShadow: '0 0 20px rgba(168, 85, 247, 0.6)'

      }}
    >
      <h2 className="tech-title">
        MY <span className="highlight-text">TOOLS & TECH</span>
      </h2>

      <div className="marquee">
        <div className="marquee-content">
          {[...tools, ...tools].map((tool, index) => (
            <div key={index} className="tech-card-realistic">
              <div className="icon-wrapper">
                <img src={tool.icon} alt={tool.name} className="realistic-img" />
              </div>
              <span className="tech-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-section {
          padding: 100px 0; 
          overflow: hidden;
          position: relative;
        }

        .tech-title {
          text-align: center;
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 60px;
          font-weight: bold;
          position: relative;
          z-index: 2;
        }

        .highlight-text {
          color: #ec4899;
          text-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
        }

        .marquee {
          display: flex;
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .marquee-content {
          display: flex;
          gap: 40px;
          padding: 20px 0;
          animation: scroll-left 30s linear infinite;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        .tech-card-realistic {
          width: 160px;
          height: 160px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(8, 7, 47, 0.1);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
        }

        .tech-card-realistic:hover {
          border-color: #ec4899;
          transform: translateY(-15px);
          background: rgba(236, 72, 153, 0.1);
          box-shadow: 0 20px 40px rgba(136, 31, 210, 0.4), 0 0 20px rgba(236, 72, 153, 0.2);
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .realistic-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(20%);
          transition: 0.3s;
        }

        .tech-card-realistic:hover .realistic-img {
          filter: grayscale(0%) drop-shadow(0 0 8px rgba(23, 61, 78, 0.88));
          transform: scale(1.1);
        }

        .tech-name {
          color: #139ee9;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: 0.3s;
        }

        .tech-card-realistic:hover .tech-name {
          color: white;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .tech-card-realistic { width: 130px; height: 130px; }
          .icon-wrapper { width: 45px; height: 45px; }
        }
      `}</style>
    </div>
  );
};

export default TechStack;




