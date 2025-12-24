import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: 'hero', route: '/home' },
    { name: 'About', href: 'about', route: '/about' },
    { name: 'Experience', href: 'experience', route: '/experience' },
    { name: 'Education', href: 'education', route: '/education' },
    { name: 'Certifications', href: 'certifications', route: '/certifications' },
    { name: 'Projects', href: 'projects', route: '/projects' },
    { name: 'Contact', href: 'contact', route: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Manoj4689' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/manojkumareede' },
    { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:manojkumareede@gmail.com' }
  ];

  const scrollToSection = (link) => {
    // If we're already on a section page, just scroll
    const element = document.getElementById(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // Otherwise navigate to the section route
    navigate(link.route);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo gradient-text">Manoj Kumar Eede</h3>
              <p className="footer-description">
                Member of Technical Staff at Adobe, passionate about building 
                scalable AI-powered solutions and full-stack applications.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:manojkumareede@gmail.com">manojkumareede@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Noida, India</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+918688640213">+91 8688640213</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} Manoj Kumar Eede. All rights reserved.</p>
            </div>
            <div className="footer-credits">
              <p>Built with React & ❤️</p>
            </div>
            <button className="back-to-top" onClick={scrollToTop} title="Back to top">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 