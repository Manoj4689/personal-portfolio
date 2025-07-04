import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Google Analytics
import { initGA, trackPageView } from './utils/analytics';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

// Component to handle scrolling to sections based on URL and track page views
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view for Google Analytics
    const pageTitles = {
      '/': 'Home',
      '/home': 'Home',
      '/about': 'About',
      '/experience': 'Experience', 
      '/education': 'Education',
      '/certifications': 'Certifications',
      '/projects': 'Projects',
      '/resume': 'Resume',
      '/contact': 'Contact'
    };

    const pageTitle = pageTitles[location.pathname] || 'Portfolio';
    trackPageView(location.pathname, `${pageTitle} - Manoj Kumar Eede Portfolio`);

    // Scroll to section logic (existing)
    const pathToSectionMap = {
      '/': 'hero',
      '/home': 'hero',
      '/about': 'about',
      '/experience': 'experience',
      '/education': 'education', 
      '/certifications': 'certifications',
      '/projects': 'projects',
      '/resume': 'resume',
      '/contact': 'contact'
    };

    const sectionId = pathToSectionMap[location.pathname];
    
    if (sectionId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
};

// Main page component with all sections
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Certifications />
    <Projects />
    <Contact />
  </>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Initialize Google Analytics on app start
  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Navigation darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleDarkMode} />
        <ScrollToSection />
        
        <main>
          <Routes>
            {/* Main page route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Section-specific routes that show full page but scroll to section */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/experience" element={<HomePage />} />
            <Route path="/education" element={<HomePage />} />
            <Route path="/certifications" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            
            {/* Resume route shows only resume component */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App; 