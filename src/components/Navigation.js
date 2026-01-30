import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're already on a section page, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Otherwise navigate to the section route
    const sectionRoutes = {
      'hero': '/home',
      'about': '/about',
      'experience': '/experience',
      'education': '/education',
      'certifications': '/certifications',
      'publications': '/publications',
      'projects': '/projects',
      'opensource': '/opensource',
      'contact': '/contact'
    };
    
    const route = sectionRoutes[sectionId];
    if (route) {
      navigate(route);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Open Source', id: 'opensource' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Check if we're already on the resume page
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
      // If we're already on the resume page, just scroll to it
      resumeElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to resume page
      navigate('/resume');
      // Add a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById('resume');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text gradient-text signature">Manoj Kumar Eede</span>
        </Link>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
              >
                {item.name}
              </button>
            </li>
          ))}
          <li className="nav-item">
            <Link 
              to="/resume" 
              className="nav-link resume-link"
              onClick={handleResumeClick}
            >
              <i className="fas fa-file-pdf"></i>
              Resume
            </Link>
          </li>
        </ul>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;