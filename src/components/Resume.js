import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const navigate = useNavigate();
  
  // Replace this with your actual resume PDF URL
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  // Try multiple PDF viewers
  const pdfViewers = [
    resumeUrl, // Direct PDF
    `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + process.env.PUBLIC_URL + '/resume.pdf')}&embedded=true`,
    `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + process.env.PUBLIC_URL + '/resume.pdf')}`
  ];
  const [currentViewerIndex, setCurrentViewerIndex] = useState(0);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume_ManojKumarEede.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    // Construct absolute URL to bypass React Router
    const absolutePdfUrl = `${window.location.protocol}//${window.location.host}${process.env.PUBLIC_URL}/resume.pdf`;
    
    // Use window.open with absolute URL
    window.open(absolutePdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFrameLoad = () => {
    setIsLoading(false);
  };

  const handleFrameError = () => {
    setIsLoading(false);
    if (currentViewerIndex < pdfViewers.length - 1) {
      setCurrentViewerIndex(currentViewerIndex + 1);
      setIsLoading(true);
    } else {
      setShowFallback(true);
    }
  };

  const navigateToSection = (route) => {
    navigate(route);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">
          Download or view my complete resume with detailed information about my experience and skills
        </p>

        <div className="resume-actions">
          <button onClick={handleDownload} className="btn-primary download-btn">
            <i className="fas fa-download"></i>
            Download PDF
          </button>
          <button onClick={handleOpenNewTab} className="btn-secondary">
            <i className="fas fa-external-link-alt"></i>
            Open in New Tab
          </button>
        </div>


        <div className="resume-container">
          {isLoading && (
            <div className="resume-loading">
              <div className="loading-spinner"></div>
              <p>Loading resume...</p>
            </div>
          )}
          
          {!showFallback ? (
            <div className="resume-viewer">
              <iframe
                src={pdfViewers[currentViewerIndex]}
                title="Resume"
                onLoad={handleFrameLoad}
                onError={handleFrameError}
                className={`resume-iframe ${isLoading ? 'loading' : ''}`}
              />
            </div>
          ) : (
            <div className="resume-fallback">
              <div className="fallback-content">
                <i className="fas fa-file-pdf"></i>
                <h3>Resume Preview</h3>
                <p>The PDF preview couldn't load in your browser. You can download the resume directly or view it in a new tab.</p>
                <div className="fallback-actions">
                  <button onClick={handleDownload} className="btn-primary">
                    <i className="fas fa-download"></i>
                    Download Resume
                  </button>
                  <button onClick={handleOpenNewTab} className="btn-secondary">
                    <i className="fas fa-external-link-alt"></i>
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>


        <div className="resume-cta">
          <div className="cta-card">
            <h3>Interested in my background?</h3>
            <p>Let's discuss how my experience can contribute to your team's success.</p>
            <button onClick={() => navigateToSection('/contact')} className="btn-primary">
              <i className="fas fa-handshake"></i>
              Let's Connect
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume; 