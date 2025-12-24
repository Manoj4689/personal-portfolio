import React from 'react';
import './Education.css';

const Education = () => {

  const educationTimeline = [
    {
      id: 1,
      degree: "Integrated Masters in Mathematics and Computing",
      institution: "IIT Roorkee",
      period: "2019 - 2024",
      cgpa: "8.78/10",
      location: "Roorkee, India",
      logo: "/personal-portfolio/education/iit_roorkee.png",
      highlights: [
        "Graduated with Distinction",
        "INSPIRE Scholarship (Top <1% All Over India)"
      ]
    },
    {
      id: 2,
      degree: "Intermediate (Class XII)",
      institution: "BIIT Junior College",
      period: "2017 - 2019",
      cgpa: "10/10",
      location: "Guntur, India",
      logo: "/personal-portfolio/education/bhashyam.png"
    },
    {
      id: 3,
      degree: "Matriculation (Class X)",
      institution: "Bhashyam High School",
      period: "2016 - 2017",
      cgpa: "10/10",
      location: "Guntur, India",
      logo: "/personal-portfolio/education/bhashyam.png"
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic journey from school to premier institution
        </p>

        <div className="education-timeline-card">
          <div className="education-timeline">
            {educationTimeline.map((edu, index) => (
              <div key={edu.id} className="timeline-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="timeline-connector">
                  <div className="timeline-dot"></div>
                  {index < educationTimeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                
                <div className="education-content">
                  <div className="education-header">
                    <div className="institution-info">
                      <div className="institution-logo">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="logo-fallback" style={{display: edu.logo ? 'none' : 'flex'}}>
                          <i className="fas fa-university"></i>
                        </div>
                      </div>
                      <div className="institution-details">
                        <h4 className="degree-title">{edu.degree}</h4>
                        <h5 className="institution-name">{edu.institution}</h5>
                        <p className="institution-location">
                          <i className="fas fa-map-marker-alt"></i>
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <div className="education-meta">
                      <div className="period-badge">
                        <i className="fas fa-calendar-alt"></i>
                        {edu.period}
                      </div>
                      <div className="cgpa-badge">
                        <span className="cgpa-label">CGPA</span>
                        <span className="cgpa-value gradient-text">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {edu.highlights && (
                    <div className="education-body">
                      <ul className="highlights-list">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx}>
                            <i className="fas fa-star"></i>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 