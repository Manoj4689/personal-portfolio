import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { trackFormSubmission, trackButtonClick, trackSocialClick } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  // EmailJS configuration - reading from .env file
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_USER_ID);
      console.log('✅ EmailJS initialized successfully with User ID:', EMAILJS_USER_ID);
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    console.log('🚀 Starting email submission...');
    console.log('📧 Form data:', formData);
    
    // Validate environment variables are loaded
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
      console.error('❌ EmailJS environment variables not loaded properly');
      console.error('Missing variables:', {
        SERVICE_ID: !EMAILJS_SERVICE_ID,
        TEMPLATE_ID: !EMAILJS_TEMPLATE_ID,
        USER_ID: !EMAILJS_USER_ID
      });
      console.error('Make sure .env file exists in project root and restart the development server');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      console.error('❌ Form validation failed - missing required fields');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Track form submission
      trackFormSubmission('Contact Form');
      
      // Prepare template parameters exactly as needed
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Manoj Kumar Eede',
        reply_to: formData.email
      };

      console.log('📋 Template parameters:', templateParams);
      console.log('🔧 EmailJS Config:', {
        SERVICE_ID: EMAILJS_SERVICE_ID,
        TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
        USER_ID: EMAILJS_USER_ID
      });

      console.log('📤 Sending email...');

      // Use emailjs.send method with direct parameters
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      console.log('✅ Email sent successfully:', result);
      console.log('📊 Result status:', result.status);
      console.log('📝 Result text:', result.text);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('🎉 Form reset and success status set');
      } else {
        throw new Error(`Unexpected status: ${result.status}`);
      }
      
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      console.error('🔍 Error details:', {
        name: error.name,
        message: error.message,
        status: error.status,
        text: error.text,
        stack: error.stack
      });
      
      // Check for specific error types
      if (error.message && error.message.includes('network')) {
        console.error('🌐 Network error - check internet connection');
      } else if (error.status === 422) {
        console.error('🔧 Template error - check EmailJS template variables');
      } else if (error.status === 401) {
        console.error('🔑 Authentication error - check User ID');
      } else if (error.status === 404) {
        console.error('🔍 Not found - check Service ID and Template ID');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToProjects = () => {
    trackButtonClick('View My Projects', 'Contact CTA');
    navigate('/projects');
  };

  const handleNavigateToResume = () => {
    trackButtonClick('View My Resume', 'Contact CTA');
    navigate('/resume');
  };

  const handleSocialClick = (platform) => {
    trackSocialClick(platform, 'click');
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'manojkumar.ede@gmail.com',
      link: 'mailto:manojkumar.ede@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 8688640213',
      link: 'tel:+918688640213'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Bangalore, India',
      link: 'https://maps.google.com/?q=Bangalore,India'
    },
    {
      icon: 'fas fa-calendar',
      label: 'Availability',
      value: 'Open to opportunities',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/Manoj4689',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/manojkumareede',
      color: '#0077b5'
    },
    {
      name: 'Medium',
      icon: 'fab fa-medium',
      url: 'https://medium.com/@manojkumar.ede',
      color: '#0077b5'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm actively seeking new opportunities and exciting career prospects. Let's connect!
        </p>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in discussing new opportunities, career prospects, 
                and exciting roles in technology, AI, and software development. Whether you're 
                a recruiter, hiring manager, or just want to network, I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="contact-method" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="contact-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value" target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{animationDelay: `${index * 0.1}s`}}
                    title={social.name}
                    onClick={() => handleSocialClick(social.name)}
                  >
                    <i className={social.icon}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container slide-in-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Write your message here or just say hi!"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`form-status ${submitStatus}`}>
                  {submitStatus === 'success' ? (
                    <>
                      <i className="fas fa-check-circle"></i>
                      Message sent successfully! I'll get back to you soon.
                    </>
                  ) : (
                    <>
                      <i className="fas fa-exclamation-circle"></i>
                      Failed to send message. Please try again or contact me directly.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Ready to discuss opportunities?</h3>
            <p>Whether it's a full-time role, consulting opportunity, or networking - let's talk!</p>
            <div className="cta-buttons">
              <a 
                href="mailto:manojkumar.ede@gmail.com" 
                className="btn-primary"
                onClick={() => trackButtonClick('Email Me', 'Contact CTA')}
              >
                <i className="fas fa-envelope"></i>
                Email Me
              </a>
              <a 
                href="tel:+918688640213" 
                className="btn-secondary"
                onClick={() => trackButtonClick('Call Me', 'Contact CTA')}
              >
                <i className="fas fa-phone"></i>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 