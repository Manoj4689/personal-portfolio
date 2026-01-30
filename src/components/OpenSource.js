import React from 'react';
import './OpenSource.css';

const OpenSource = () => {
  const contributions = [
    {
      id: 1,
      project: "Docx4j",
      title: "Corrupted Documents Fix",
      description: "Identified and helped resolve a critical issue in the widely used open-source Docx4j library, preventing DOCX file corruption during processing. The fix was merged and is now part of the library's release.",
      link: "https://github.com/plutext/docx4j/issues/618",
      type: "Bug Fix",
      impact: "High",
      status: "Merged",
      tags: ["Java", "Document Processing", "Bug Fix", "XML"],
      icon: "fa-code-branch"
    }
  ];

  return (
    <section id="opensource" className="opensource section">
      <div className="container">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="section-subtitle">
          Contributing to the developer community through open source projects
        </p>

        <div className="opensource-card">
          <div className="contributions-list">
            {contributions.map((contrib, index) => (
              <div key={contrib.id} className="contribution-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="contrib-icon">
                  <i className={`fas ${contrib.icon}`}></i>
                </div>
                
                <div className="contrib-content">
                  <div className="contrib-header">
                    <div className="contrib-title-section">
                      <h4 className="contrib-project">{contrib.project}</h4>
                      <h5 className="contrib-title">{contrib.title}</h5>
                    </div>
                    <div className="contrib-meta">
                      <span className="contrib-type">{contrib.type}</span>
                      <span className={`contrib-impact impact-${contrib.impact.toLowerCase()}`}>
                        {contrib.impact} Impact
                      </span>
                      <span className="contrib-status">{contrib.status}</span>
                    </div>
                  </div>
                  
                  <p className="contrib-description">{contrib.description}</p>
                  
                  <div className="contrib-footer">
                    <div className="contrib-tags">
                      {contrib.tags.map((tag, idx) => (
                        <span key={idx} className="contrib-tag">{tag}</span>
                      ))}
                    </div>
                    
                    <a 
                      href={contrib.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contrib-link"
                    >
                      <i className="fab fa-github"></i>
                      View on GitHub
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
