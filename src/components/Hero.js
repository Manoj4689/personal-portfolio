import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef(null);
  
  const roles = [
    'Member of Technical Staff II',
    'Data Scientist',
    'Research Intern'
  ];

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  // Update cursor position whenever displayText changes (only for desktop)
  useEffect(() => {
    if (!isMobile && textRef.current) {
      const updateCursor = () => {
        if (!displayText) {
          setCursorPosition(0);
          return;
        }
        // Measure the actual rendered text width using Range (matches DOM exactly)
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        const width = range.getBoundingClientRect().width;
        range.detach();
        setCursorPosition(width + 2);
      };
      requestAnimationFrame(updateCursor);
    } else {
      setCursorPosition(0);
    }
  }, [displayText, isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWorkClick = () => {
    trackButtonClick('View My Work', 'Hero');
    scrollToSection('projects');
  };

  const handleGetInTouchClick = () => {
    trackButtonClick('Get in Touch', 'Hero');
    scrollToSection('contact');
  };

  const handleSocialClick = (platform, url) => {
    trackButtonClick(`${platform} Social Link`, 'Hero');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Manoj Kumar Eede</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a{' '}
              <span className="typing-container">
                <span ref={textRef} className="typing-text gradient-text">{displayText}</span>
                <span 
                  className="cursor" 
                  style={isMobile ? {} : { left: `${cursorPosition}px` }}
                >|</span>
              </span>
            </h2>
            <p className="hero-description">
              Passionate about building scalable systems and AI-powered solutions. 
              I specialize in full-stack development, machine learning, and transforming complex problems into elegant solutions.
            </p>
            
            <div className="hero-buttons">
              <button 
                onClick={handleViewWorkClick}
                className="btn-primary"
              >
                <i className="fas fa-code"></i>
                View My Work
              </button>
              <button 
                onClick={handleGetInTouchClick}
                className="btn-secondary"
              >
                <i className="fas fa-envelope"></i>
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image slide-in-right">
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="/personal-portfolio/about/profile.jpg" 
                  alt="Manoj Kumar Eede"
                  className="profile-photo"
                />
              </div>
              <div className="social-links">
                <a href="https://github.com/Manoj4689" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('GitHub', 'https://github.com/Manoj4689')}>
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/manojkumareede" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/manojkumareede')}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:manojkumareede@gmail.com" onClick={() => handleSocialClick('Email', 'mailto:manojkumareede@gmail.com')}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator bounce">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero; 