
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const First: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <section className="professional-intro">
      <motion.div 
        className="hero-bg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: "linear" }}
      >
        <div className="overlay-vignette"></div>
        
        <AnimatePresence>
          <div className="content-wrap">
            <motion.div 
              className="line-decorator"
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 1, duration: 1.5 }}
            ></motion.div>

            <motion.div 
              className="text-reveal-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="curated-text">The journey starts here.</p>
              
              <h1 className="official-title">
                WELCOME TO <span className="gold-gradient">MY UNIVERSE</span>
              </h1>
              
              <motion.p 
                className="flicker-subtext"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                JUNNU'S PORTFOLIO
              </motion.p>
            </motion.div>

            <motion.div 
              className="bottom-bracket"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2, duration: 2 }}
            ></motion.div>
          </div>
        </AnimatePresence>
      </motion.div>

      <style>{`
        .professional-intro {
          height: 100vh; width: 100vw;
          position: fixed; top: 0; left: 0;
          z-index: 100000; background: #000;
          overflow: hidden;
        }

        .hero-bg {
          width: 100%; height: 100%;
          background: url('/hellllllll.jpg') no-repeat center center;
          background-size: cover; 
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }

        .overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
        }

        .content-wrap {
          position: relative;
          z-index: 10;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .line-decorator {
          height: 1px;
          background: #b78e40; 
          margin-bottom: 20px;
        }

        .curated-text {
          color: #674507;
          letter-spacing: 8px;
          font-size: 0.85rem;
          font-weight: 300;
          margin-bottom: 10px;
          font-family: 'Inter', sans-serif;
        }

        .official-title {
          color: #eee8e8;
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 200;
          letter-spacing: 12px;
          text-transform: uppercase;
          margin: 0;
          font-family: 'Playfair Display', serif;
        }

        .gold-gradient {
          font-weight: 400;
          background: linear-gradient(180deg, #FFFFFF 0%, #C5A059 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .flicker-subtext {
          color: rgba(255,255,255,0.5);
          font-size: 0.7rem;
          letter-spacing: 4px;
          margin-top: 25px;
          font-family: 'Inter', sans-serif;
        }

        .bottom-bracket {
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.5), transparent);
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .official-title { font-size: 1.2rem; letter-spacing: 6px; }
          .curated-text { letter-spacing: 4px; font-size: 0.6rem; }
          .hero-bg { background-size: cover; }
        }
      `}</style>
    </section>
  );
};

export default First;




