

import React from 'react';
import contactBG from '../assets/hmmmm1.png';
const Contact: React.FC = () => {

  return (
    <section id="contact" className="contact-wrap" style={{
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.75), rgba(5, 5, 5, 0.95)), url(${contactBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <div className="contact-grid">
        <div className="left-hero">
          <div className="name-wrapper">
            <h1 className="main-name">DASARI <span className="pink-glow">JHANSI</span></h1>
            <div className="animated-line"></div>
          </div>
          
          <div className="branch-info">
            <p className="branch-text">Computer Science Engineering (AI&ML)</p>
            <p className="college-text">Gayatri Vidya Parishad College Of Engineering For Women</p>
            <div className="status-tag">
              <span className="dot"></span> Available for Opportunities
            </div>
          </div>
        </div>

        <div className="connect-card-outer">
          <div className="connect-card-inner">
            <h2 className="connect-heading">LET'S CONNECT</h2>
            <div className="header-glow"></div>

            <div className="link-list">
              <a href="mailto:jhansicsm.genai@gmail.com" className="glow-link">
                <img src="https://img.icons8.com/fluency/48/gmail-new.png" alt="Email" className="contact-icon-img" />
                <div className="link-content">
                  <label>Email</label>
                </div>
              </a>

              <a href="https://github.com/Jhansi-1123" target="_blank" rel="noopener noreferrer" className="glow-link">
                <img src="https://img.icons8.com/glyph-neue/64/ffffff/github.png" alt="GitHub" className="contact-icon-img" />
                <div className="link-content">
                  <label>GitHub</label>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/jhansi-dasari-74938a331" target="_blank" rel="noopener noreferrer" className="glow-link">
                <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="contact-icon-img" />
                <div className="link-content">
                  <label>LinkedIn</label>
                </div>
              </a>
              
              <div className="glow-link no-click">
                <img src="https://img.icons8.com/fluency/48/marker.png" alt="Location" className="contact-icon-img" />
                <div className="link-content">
                  <label>Location</label>
                  <p>Visakhapatnam, AP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="final-footer">
        <p>© 2026 Developed with ❤️ by Junnu</p>
      </footer>

      <style>{`
        .contact-wrap { padding: 120px 8%; color: white; overflow: hidden; position: relative; }
        .contact-grid { display: flex; justify-content: space-between; align-items: center; gap: 60px; flex-wrap: wrap; position: relative; z-index: 2; }

        .left-hero { flex: 1; min-width: 350px; }
        .main-name { font-size: 4.5rem; font-weight: 900; letter-spacing: -2px; margin: 0; animation: slideUp 0.8s ease-out; }
        .pink-glow { color: #ec4899; text-shadow: 0 0 30px rgba(236, 72, 153, 0.5); }

        .animated-line { width: 0; height: 6px; background: linear-gradient(90deg, #ec4899, transparent); margin: 20px 0; border-radius: 10px; animation: growLine 1.5s forwards 0.5s; }
        .branch-text { font-size: 1.6rem; font-weight: 600; color: #cbd5e1; animation: fadeIn 1s forwards 1s; opacity: 0; }
        .college-text { color: #8892b0; font-size: 1.1rem; margin-top: 5px; animation: fadeIn 1s forwards 1.2s; opacity: 0; }

        .status-tag { display: inline-flex; align-items: center; gap: 10px; background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 8px 16px; border-radius: 20px; margin-top: 30px; font-size: 0.9rem; border: 1px solid rgba(16, 185, 129, 0.2); animation: fadeIn 1s forwards 1.4s; opacity: 0; }
        .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; }

        .connect-card-outer { flex: 0.8; min-width: 380px; padding: 2px; background: linear-gradient(45deg, #ec4899, #0f172a, #ec4899); border-radius: 35px; animation: cardFloat 4s ease-in-out infinite; }
        .connect-card-inner { background: #0f172a; padding: 40px; border-radius: 33px; position: relative; }
        .connect-heading { font-size: 1.8rem; font-weight: 800; text-align: center; margin-bottom: 30px; letter-spacing: 2px; color: white; }

        .glow-link { display: flex; align-items: center; gap: 20px; padding: 15px; border-radius: 15px; text-decoration: none; transition: 0.3s; margin-bottom: 10px; border: 1px solid transparent; }
        .glow-link:hover { background: rgba(255, 255, 255, 0.05); border-color: rgba(236, 72, 153, 0.3); transform: translateX(10px); }
        
        .contact-icon-img { width: 32px; height: 32px; object-fit: contain; }

        .link-content label { display: block; font-size: 0.75rem; color: #ec4899; font-weight: bold; text-transform: uppercase; }
        .link-content p { margin: 0; color: #cbd5e1; font-size: 0.95rem; }

        .final-footer { text-align: center; margin-top: 100px; padding-top: 40px; border-top: 1px solid #1e293b; color: #4b5563; font-size: 0.9rem; position: relative; z-index: 2; }

        @keyframes growLine { to { width: 120px; } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes cardFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        @media (max-width: 768px) {
          .main-name { font-size: 2.8rem; }
          .contact-grid { flex-direction: column; text-align: center; }
          .animated-line { margin: 20px auto; }
          .connect-card-outer { min-width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;



