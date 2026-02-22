import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Java', icon: 'fab fa-java', color: '#f89820' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'Swift', icon: 'fab fa-swift', color: '#FA7343' },
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078d4' },
    { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: '#326ce5' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Linux', icon: 'fab fa-linux', color: '#fcc624' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' }
  ];

  const achievements = [
    { number: '~2', label: 'Years of Experience' }
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      logo: '/personal-portfolio/coding_platforms/leetcode.png',
      rating: '2047',
      rank: 'Top 2%',
      url: 'https://leetcode.com/19312009',
      color: '#FFA116'
    },
    {
      name: 'Codeforces',
      logo: '/personal-portfolio/coding_platforms/codeforces.png',
      rating: '1663',
      rank: 'Expert',
      url: 'https://codeforces.com/profile/codehacker4689',
      color: '#1F8ACB'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <div className="text-content">
              <h3 className="about-subtitle">
                I'm a passionate <span className="gradient-text">Software Engineer</span> with expertise in Full Stack Development, AI, and Data Science
              </h3>
              <p>
                Currently working as a Member of Technical Staff at Adobe, I specialize in building scalable 
                systems and AI-powered solutions. With a strong background in Mathematics and Computing from 
                IIT Roorkee, I bring both theoretical knowledge and practical experience to every project.
              </p>
              <p>
                I have led end-to-end development of innovative solutions like Distributed Systems, GenAI 
                Applications, and Demand Forecasting Engines. My work has enabled 300K+ monthly 
                transactions and contributed to multi-million dollar contracts.
              </p>
              <p>
                I'm passionate about competitive programming and constantly 
                learning new technologies. I enjoy solving complex problems and building systems that make a 
                real impact on businesses and users.
              </p>
            </div>
          </div>
          
          <div className="about-skills slide-in-right">
            <div className="skills-container">
              <h4>Technical Skills & Technologies</h4>
              <div className="skills-summary">
                {skills.map((skill, index) => (
                  <span 
                    key={skill.name} 
                    className="skill-pill" 
                    style={{animationDelay: `${index * 0.1}s`}}
                    title={skill.name}
                  >
                    <i className={skill.icon} style={{color: skill.color}}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="about-highlights">
              <div className="highlight">
                <i className="fas fa-code"></i>
                <span>Full-stack development</span>
              </div>
              <div className="highlight">
                <i className="fas fa-brain"></i>
                <span>Machine Learning & AI</span>
              </div>
              <div className="highlight">
                <i className="fas fa-chart-line"></i>
                <span>Data Science</span>
              </div>
              <div className="highlight">
                <i className="fas fa-cloud"></i>
                <span>Cloud & DevOps</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="achievements-platforms-wrapper">
          <div className="all-cards-container">
            {/* Experience Achievement Card */}
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="achievement-item fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="achievement-number gradient-text">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}

            {/* Coding Platform Cards */}
            {codingPlatforms.map((platform, index) => (
              <a 
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card fade-in"
                style={{animationDelay: `${(index + achievements.length) * 0.2}s`}}
              >
                <div className="platform-logo">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback" style={{display: 'none'}}>
                    <i className="fas fa-code"></i>
                  </div>
                </div>
                <div className="platform-info">
                  <h4 className="platform-name">{platform.name}</h4>
                  <div className="platform-stats">
                    <div className="stat">
                      <span className="stat-label">Max Rating</span>
                      <span className="stat-value" style={{color: platform.color}}>
                        {platform.rating}
                      </span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Rank</span>
                      <span className="stat-value">{platform.rank}</span>
                    </div>
                  </div>
                </div>
                <div className="platform-link">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 