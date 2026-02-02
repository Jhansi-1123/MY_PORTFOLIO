

import React from 'react';
import educationBG from '../assets/dangg1.jpg';

const Education: React.FC = () => {
  

  const eduData = [
    {
      degree: "Bachelor of Technology (Computer Science Engineering (AI&ML))",
      duration: "2023-27",
      location: "Visakhapatnam",
      details: "Specializing in Computer Science and Engineering. Focusing on Building data-driven systems.",
      skills: ["Machine Learning", "Java", "Problem Solving"]
    },
    {
      degree: "Intermediate (MPC)",
      duration: "2021-23",
      location: "Kanchili",
      details: "Completed Higher Secondary Education.",
      skills: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      duration: "2020-21",
      location: "Eedupuram",
      details: "Completed 10th grade with a strong academic foundation.",
      skills: ["General Science", "Mathematics", "Communication Skills"]
    }
  ];

  return (
    <section id="education" style={{
      padding: '100px 10%',
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.85)), url(${educationBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🎓</div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', letterSpacing: '-1px', textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
 }}>
          Education & <span style={{ color: '#ec4899' }}>Certifications</span>
        </h1>
        <p style={{ color: '#796533', fontSize: '1.1rem' }}>A journey through my academic achievements and continuous learning path.</p>
      </div>

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', zIndex: 2 }}>
        
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '0',
          bottom: '0',
          width: '3px',
          background: 'linear-gradient(to bottom, #ec4899, #73459e, #4c86e3)',
          transform: 'translateX(-50%)',
          borderRadius: '10px'
        }}></div>

        {eduData.map((edu, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            width: '100%',
            marginBottom: '60px',
            position: 'relative'
          }}>
            
            <div style={{
              position: 'absolute',
              left: '50%',
              width: '40px',
              height: '40px',
              background: '#0a192f',
              border: '2px solid #ec4899',
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)'
            }}>
              <span style={{ fontSize: '1rem' }}>🏫</span>
            </div>

            <div className="edu-card-interactive" style={{
              width: '42%',
              background: 'rgba(17, 34, 64, 0.5)', 
              padding: '30px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              textAlign: index % 2 === 0 ? 'right' : 'left',
              transition: '0.4s'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.4rem' }}>{edu.degree}</h3>
                <span style={{ 
                  fontSize: '0.8rem', background: '#ec4899', color: 'white', 
                  padding: '4px 12px', borderRadius: '15px', fontWeight: 'bold' 
                }}>{edu.duration}</span>
              </div>
              
              <p style={{ color: '#a855f7', fontWeight: 'bold', marginBottom: '10px' }}>📍 {edu.location}</p>
              <p style={{ color: '#8892b0', lineHeight: '1.6', fontSize: '1rem' }}>{edu.details}</p>
              
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                flexWrap: 'wrap', 
                marginTop: '15px',
                justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
              }}>
                {edu.skills.map(skill => (
                  <span key={skill} style={{ 
                    fontSize: '0.75rem', padding: '5px 12px', borderRadius: '20px', 
                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ccd6f6'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .edu-card-interactive:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #ec4899;
          box-shadow: 0 10px 40px rgba(236, 72, 153, 0.2);
          background: rgba(147, 51, 234, 0.1);
        }
        @media (max-width: 768px) {
          .edu-card-interactive { width: 80% !important; text-align: left !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;




