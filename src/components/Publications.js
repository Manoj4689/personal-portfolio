import React from 'react';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      id: 1,
      title: "Demand Forecasting Using Statistical Machine Learning Models",
      authors: "Madhu Jain, Eede Manoj Kumar, Nidhi Sharma",
      publication: "Advanced Machine Learning and Evolutionary Computing Algorithms for Financial Decision-Making",
      editors: "D.K. Sharma, H.S. Hota, and K. Brown",
      publisher: "Springer Nature",
      year: "2026",
      status: "Forthcoming",
      type: "Book Chapter",
      description: "A comprehensive study of the effectiveness of statistical and machine learning models for demand forecasting",
      tags: ["Machine Learning", "Time Series Forecasting", "Statistical Models", "Deep Learning", "Finance"],
      icon: "fa-book"
    }
  ];

  return (
    <section id="publications" className="publications section">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">
          Academic contributions and research publications
        </p>

        <div className="publications-card">
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={pub.id} className="publication-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="pub-icon">
                  <i className={`fas ${pub.icon}`}></i>
                </div>
                
                <div className="pub-content">
                  <div className="pub-header">
                    <h4 className="pub-title">{pub.title}</h4>
                    <div className="pub-meta">
                      <span className="pub-status">{pub.status}</span>
                    </div>
                  </div>
                  
                  <div className="pub-details">
                    <p className="pub-authors">
                      <i className="fas fa-user"></i>
                      <strong>Authors:</strong> {pub.authors}
                    </p>
                    <p className="pub-publication">
                      <i className="fas fa-book-open"></i>
                      <strong>In:</strong> <em>{pub.publication}</em>
                    </p>
                    <p className="pub-editors">
                      <i className="fas fa-users"></i>
                      <strong>Editors:</strong> {pub.editors}
                    </p>
                    <p className="pub-publisher">
                      <i className="fas fa-building"></i>
                      <strong>Publisher:</strong> {pub.publisher}, {pub.year}
                    </p>
                  </div>

                  <p className="pub-description">{pub.description}</p>
                  
                  <div className="pub-tags">
                    {pub.tags.map((tag, idx) => (
                      <span key={idx} className="pub-tag">{tag}</span>
                    ))}
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

export default Publications;
