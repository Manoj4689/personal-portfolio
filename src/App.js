import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

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

// Component to handle scrolling to sections based on URL
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    // Handle section scrolling for main page routes
    if (location.pathname === '/') {
      if (location.hash) {
        const sectionId = location.hash.substring(1); // Remove the #
        scrollToElement(sectionId);
      }
    } else {
      // Handle direct section routes
      const sectionRoutes = {
        '/home': 'hero',
        '/about': 'about',
        '/experience': 'experience',
        '/education': 'education',
        '/certifications': 'certifications',
        '/projects': 'projects',
        '/contact': 'contact'
      };
      
      const sectionId = sectionRoutes[location.pathname];
      if (sectionId) {
        scrollToElement(sectionId);
      }
    }

    // Handle hash changes for direct hash navigation (e.g., #contact)
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        scrollToElement(sectionId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Navigation darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
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