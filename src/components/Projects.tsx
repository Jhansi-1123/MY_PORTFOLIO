

import React from 'react';
import projectBG from '../assets/bai1.png';

const Projects: React.FC = () => {
  
  const projects = [
    {
      title: "Student Intelligence Portal",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&h=300&auto=format&fit=crop", 
      description: "An AI-powered academic assistant that predicts GPA and provides customized strategic study plans.",
      tags: ["Python", "Streamlit", "ML", "Plotly"],
      features: ["ML-based GPA & Mastery prediction",
        "Automated subject-specific strategic tips",
        "Interactive performance tracking graphs"],
      color: "#ec4899"
    },
    {
      title: "Personal AI Portfolio",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&h=300&auto=format&fit=crop", 
      description: "A high-end professional portfolio website featuring glassmorphism and smooth animations.",
      tags: ["React", "TypeScript", "Framer-motion", "CSS"],
      features: ["Dynamic Project Showcase with filtering",
        "Interactive Glassmorphism UI components",
        "Optimized for all device screen sizes"],
      color: "#60a5fa"
    },
    {
      title: "Chocolate Cake Recipe",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&h=300&auto=format&fit=crop", 
      description: "A comprehensive web-based recipe guide for baking with interactive steps.",
      tags: ["HTML", "CSS", "JS"],
      features: ["Interactive step-by-step instructions",
        "Responsive food photography gallery",
        "Ingredient calculator for servings"],
      color: "#f59e0b"
    },
    {
      title: "Digital Stopwatch",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&h=300&auto=format&fit=crop", 
      description: "A precision timing application built to track laps with a clean user interface.",
      tags: ["HTML", "CSS", "JS"],
      features: ["Millisecond accuracy timing logic",
        "Lap recording and history management",
        "Dark mode optimized neon UI"],
      color: "#a855f7"
    }
  ];

  return (
    <section 
      id="projects" 
      style={{ 
        padding: '80px 10%', 
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.95)), url(${projectBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white' 
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>PROJECTS</h1>
        <div style={{ width: '60px', height: '4px', background: '#86194f', margin: '10px auto' }}></div>
      </div>

      <div className="custom-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card-custom">
            <div className="img-wrapper">
              <img src={proj.image} alt={proj.title} />
              <span className={`status-badge-custom ${proj.status === "In Progress" ? "in-progress" : ""}`}>
                {proj.status}
              </span>
            </div>

            <div style={{ padding: '22px' }}>
              <h2 style={{ fontSize: '1.4rem', margin: '0 0 10px 0' }}>{proj.title}</h2>
              <p style={{ color: '#8892b0', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '15px' }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '15px' }}>
                {proj.tags.map(tag => (
                  <span key={tag} className="tag-pill-custom">{tag}</span>
                ))}
              </div>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {proj.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '5px' }}>
                    <span style={{ color: proj.color }}>⭐</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .custom-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(300px, 420px));
          justify-content: center;
          gap: 35px;
          margin: 0 auto;
        }

        @media (max-width: 800px) {
          .custom-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card-custom {
          background: rgba(17, 34, 64, 0.5); 
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          overflow: hidden;
          transition: 0.3s ease;
        }

        .project-card-custom:hover {
          transform: translateY(-8px);
          border-color: #ec4899;
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.15);
        }

        .img-wrapper { position: relative; height: 190px; overflow: hidden; }
        .img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        
        .status-badge-custom {
          position: absolute; top: 12px; left: 12px;
          background: rgba(16, 185, 129, 0.15); color: #10b981;
          padding: 3px 10px; border-radius: 12px; border: 1px solid #10b981;
          font-size: 0.7rem; z-index: 2;
        }
        .status-badge-custom.in-progress {
          background: rgba(245, 158, 11, 0.15); color: #f59e0b; border-color: #f59e0b;
        }

        .tag-pill-custom {
          background: #112240; color: #ccd6f6;
          padding: 3px 10px; border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.05); font-size: 0.75rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;



