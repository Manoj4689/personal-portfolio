import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const navigate = useNavigate();

  const educationTimeline = [
    {
      id: 1,
      degree: "Mathematics and Computing",
      specialization: "Integrated Masters",
      institution: "IIT Roorkee",
      period: "2019 - 2024",
      cgpa: "8.78/10",
      location: "Roorkee, India",
      logo: "/personal-portfolio/education/iit_roorkee.png",
      description: "Comprehensive 5-year integrated program combining theoretical mathematics with practical computing applications, focusing on applied mathematics.",
      highlights: [
        "Graduated with Distinction",
        "INSPIRE Scholarship by DST, MHRD - Recieved 60,000/year for 5 years (Top <1% All Over India)"
      ],
      coursework: [
        "Data Structures and Algorithms",
        "Object Oriented Programming", 
        "Database Management System",
        "Discrete Mathematics",
        "Digital Image Processing",
        "Graph Theory"
      ]
    },
    {
      id: 2,
      degree: "Intermediate (Class XII)",
      specialization: "Higher Secondary Education",
      institution: "BIIT Junior College",
      period: "2017 - 2019",
      cgpa: "10/10",
      location: "Guntur, India",
      logo: "/personal-portfolio/education/bhashyam.png", 
      description: "Completed higher secondary education with perfect CGPA, focusing on Mathematics, Physics, and Chemistry.",
      highlights: [
        "Perfect CGPA of 10/10"
      ],
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry"
      ]
    },
    {
      id: 3,
      degree: "Matriculation (Class X)",
      specialization: "Secondary Education",
      institution: "Bhashyam High School",
      period: "2016 - 2017",
      cgpa: "10/10",
      location: "Guntur, India",
      logo: "/personal-portfolio/education/bhashyam.png",
      description: "Completed secondary education with perfect CGPA, demonstrating consistent academic excellence from early education.",
      highlights: [
        "Perfect CGPA of 10/10"
      ],
      coursework: [
        "Mathematics",
        "Physical Sciences",
        "English"
      ]
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
          <div className="timeline-header">
            <h3>
              <i className="fas fa-graduation-cap"></i>
              Educational Timeline
            </h3>
            <p>A journey of academic excellence and continuous learning</p>
          </div>

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

                  <div className="education-body">
                    <p className="specialization">{edu.specialization}</p>
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-details">
                      <div className="highlights-section">
                        <h6>Key Highlights</h6>
                        <ul className="highlights-list">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx}>
                              <i className="fas fa-star"></i>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="coursework-section">
                        <h6>Key Subjects</h6>
                        <div className="coursework-tags">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="course-tag">
                              {course}
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

        {/* CTA Section */}
        <div className="education-cta">
          <div className="cta-content">
            <h3>Interested in my academic foundation?</h3>
            <p>Let's discuss how my educational background can contribute to your team!</p>
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

export default Education; 