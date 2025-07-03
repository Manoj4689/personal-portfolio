import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      title: "Member of Technical Staff",
      company: "Adobe",
      period: "Sept 2024 - Present",
      location: "Noida, India",
      description: "Leading end-to-end development of innovative AI-powered solutions and APIs, driving external rollout and monetization strategies.",
      achievements: [
        "Recieved SPOT Award for exceptional performance and leadership",
        "Driving external rollout with estimated $1M ARR in initial phase",
        "Delivered API enhancements enabling 300K+ monthly transactions",
        "Built GenAI Financial Assistant for complex document analysis"
      ],
      technologies: ["Java", "Python", "ReactJS", "ArgoCD", "Kubernetes", "Docker", "Spring Boot"]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Asper.ai",
      period: "June 2024 - Sept 2024",
      location: "Bangalore, India",
      description: "Led client engagement for major contracts with forecasting algorithm designs and enhanced internal dynamic demand forecasting engine.",
      achievements: [
        "Led end-to-end client engagement for $3M contract with a leading US-based CPG company",
        "Increased inline demand planning accuracy by over 10% for 1,000+ SKUs",
        "Enhanced Dynamic Demand Forecasting Engine",
        "Designed scalable ML system frameworks for improved deployment"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Azure", "Kubernetes", "MLOps"]
    },
    {
      id: 3,
      title: "Research Intern",
      company: "Adobe Research Lab",
      period: "May 2023 - July 2023",
      location: "Bangalore, India",
      description: "Applied Large Language Models for controlled text generation and developed automated commenting pipelines using advanced NLP techniques.",
      achievements: [
        "Developed Automated Commenting Pipeline with advanced NLP",
        "Achieved >15% higher accuracy compared to baselines on curated NLPeer data",
        "Integrated solution into Adobe's GenAI framework"
      ],
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
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company gradient-text">{exp.company}</span>
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                    <div className="period">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="experience-body">
                    <p className="description">{exp.description}</p>
                    
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle"></i>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
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
        
        <div className="cta-section">
          <div className="cta-card card">
            <h3>Looking for a dedicated engineer?</h3>
            <p>I'm always interested in discussing new opportunities and exciting projects.</p>
            <button onClick={() => navigate('/contact')} className="btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 