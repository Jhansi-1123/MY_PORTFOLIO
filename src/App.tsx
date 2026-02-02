

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import First from './components/first';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import commonBG from './assets/dance1.png';
import TechStackMatrix from './components/Skills'; 
import TechStackMarquee from './components/TechStack'; 
import sharedBG from './assets/dangg1.jpg';
import './App.css';




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <First />
      ) : (
        <>
          <Navbar />
          <div style={{ marginTop: '70px' }}> 
            <Hero />
            <About />
            <div style={{
        backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.9)), url(${commonBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%'
      }}>
        
        <TechStackMarquee /> 
        <TechStackMatrix /> 
      </div>
            
            
            <Projects />
            <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${sharedBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100%'
      }}>
        <Education />
        <Certificate />
      </div>
           
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}

export default App;


