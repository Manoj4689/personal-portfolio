import React from 'react';
import './Experience.css';

const Experience = () => {

  const experiences = [
    {
      id: 1,
      title: [
        { role: "Member of Technical Staff II", period: "Jan 2026 - Present" },
        { role: "Member of Technical Staff", period: "Sept 2024 - Jan 2026" }
      ],
      company: "Adobe",
      location: "Noida, India",
      description: "Leading end-to-end development of innovative AI-powered solutions and Distributed Systems, driving external rollout and monetization strategies.",
      technologies: ["Java", "Python", "ReactJS", "ArgoCD", "Kubernetes", "Docker", "Spring Boot"]
    },
    {
      id: 2,
      title: [
        { role: "Data Scientist", period: "June 2024 - Sept 2024" }
      ],
      company: "Asper.ai",
      location: "Bangalore, India",
      description: "Led client engagement for major contracts with forecasting algorithm designs and enhanced internal dynamic demand forecasting engine.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Azure", "Kubernetes", "MLOps"]
    },
    {
      id: 3,
      title: [
        { role: "Research Intern", period: "May 2023 - July 2023" }
      ],
      company: "Adobe Research Lab",
      location: "Bangalore, India",
      description: "Applied Large Language Models for controlled text generation and developed automated commenting pipeline using advanced NLP techniques.",
      technologies: ["Python", "Flask", "ReactJS", "NLP", "LLMs", "Embeddings", "PyTorch"]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="experience-card card">
                  <div className="experience-header">
                    {exp.title.length > 1 ? (
                      <div className="title-progression">
                        {exp.title.map((t, idx) => (
                          <div key={idx} className={`title-item ${idx === 0 ? 'current' : 'previous'}`}>
                            <div className="title-item-content">
                              <h3 className="job-title">{t.role}</h3>
                              <div className="title-period">
                                <i className="fas fa-calendar-alt"></i>
                                {t.period}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="single-title-box">
                        <h3 className="job-title">{exp.title[0].role}</h3>
                        <div className="title-period">
                          <i className="fas fa-calendar-alt"></i>
                          {exp.title[0].period}
                        </div>
                      </div>
                    )}
                    <div className="company-info">
                      <span className="company gradient-text">{exp.company}</span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="experience-body">
                    <p className="description">{exp.description}</p>
                    
                    <div className="technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 