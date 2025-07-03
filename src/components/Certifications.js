import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Certifications.css';

const Certifications = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      id: 1,
      title: "AI Agents Certification",
      issuer: "Hugging Face",
      date: "2025",
      description: "Advanced training in building and deploying AI agents using state-of-the-art machine learning models and frameworks.",
      logo: "/personal-portfolio/certifications/hugging_face.png",
      category: "AI/ML",
      skills: ["AI Agents", "Transformers", "LLM", "SmolAgents"],
      credentialId: "Manojkumareede",
      verifyLink: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Manojkumareede/2025-02-16.png"
    },
    {
      id: 2,
      title: "Model Context Protocol Certification",
      issuer: "Hugging Face",
      date: "2025",
      description: "Specialized certification in model context protocols, focusing on efficient tools integration and context management.",
      logo: "/personal-portfolio/certifications/hugging_face.png",
      category: "AI/ML",
      skills: ["Client Server Architecture", "Context Management", "Model Optimization", "Protocol Design"],
      credentialId: "Manojkumareede",
      verifyLink: "https://huggingface.co/datasets/mcp-course/certificates/resolve/main/certificates/Manojkumareede/2025-06-08.png"
    },
    {
      id: 3,
      title: "Time Series Analysis, Forecasting and Machine Learning",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering time series forecasting, ARIMA models, and machine learning applications in temporal data analysis.",
      logo: "/personal-portfolio/certifications/udemy.png",
      category: "Data Science",
      skills: ["Time Series", "ARIMA", "Forecasting", "Statistical Analysis"],
      credentialId: "UC-41ecf699-62fa-4ad3-9c91-b3ed005555b2",
      verifyLink: "https://ude.my/UC-41ecf699-62fa-4ad3-9c91-b3ed005555b2"
    },
    {
      id: 4,
      title: "Deep Learning Specialization",
      issuer: "Udemy",
      date: "2023",
      description: "In-depth specialization covering neural networks, CNNs, RNNs, and advanced deep learning architectures for real-world applications.",
      logo: "/personal-portfolio/certifications/udemy.png",
      category: "AI/ML",
      skills: ["Neural Networks", "CNN", "RNN", "Deep Learning", "TensorFlow"],
      credentialId: "UC-DL-2023",
      verifyLink: "#"
    },
    {
      id: 5,
      title: "Machine Learning Regression Master Class in Python",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced regression techniques and machine learning algorithms with hands-on implementation and real-world case studies.",
      logo: "/personal-portfolio/certifications/udemy.png",
      category: "Machine Learning",
      skills: ["Regression Analysis", "Feature Engineering", "Model Selection", "Loss Functions"],
      credentialId: "UC-4edf020f-ef1c-4d26-9c74-e2aa56ea0154",
      verifyLink: "https://ude.my/UC-4edf020f-ef1c-4d26-9c74-e2aa56ea0154"
    }
  ];


  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">Certifications & Learning</h2>
        <p className="section-subtitle">
          Continuous learning and professional development in cutting-edge technologies
        </p>


        {/* Certifications Timeline Card */}
        <div className="certifications-timeline-card">
          <div className="timeline-header">
            <h3>
              <i className="fas fa-award"></i>
              Professional Certifications
            </h3>
            <p>Validated expertise in AI, Machine Learning, and Data Science</p>
          </div>

          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="certification-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="cert-header">
                  <div className="cert-logo">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="logo-fallback" style={{display: 'none'}}>
                      <i className="fas fa-certificate"></i>
                    </div>
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">
                      <i className="fas fa-building"></i>
                      {cert.issuer}
                    </p>
                    <p className="cert-date">
                      <i className="fas fa-calendar-alt"></i>
                      {cert.date}
                    </p>
                  </div>
                  <div className="cert-meta">
                    <div className="cert-category">{cert.category}</div>
                    <button 
                      className="verify-btn" 
                      onClick={() => window.open(cert.verifyLink, '_blank')}
                      title="Verify Certificate"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Verify
                    </button>
                  </div>
                </div>
                
                <div className="cert-body">
                  <p className="cert-description">{cert.description}</p>
                  
                  <div className="cert-details">
                    <div className="skills-section">
                      <h6>Skills Covered</h6>
                      <div className="skills-tags">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="credential-section">
                      <h6>Credential ID</h6>
                      <div className="credential-id">{cert.credentialId}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="certifications-cta">
          <div className="cta-content">
            <h3>Ready to leverage expertise?</h3>
            <p>Let's discuss how my certified skills can contribute to your next project!</p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              <i className="fas fa-handshake"></i>
              Start Collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 