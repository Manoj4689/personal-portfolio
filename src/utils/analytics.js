import ReactGA from 'react-ga4';

// Replace this with your actual Google Analytics 4 Measurement ID
// You can get this from your Google Analytics account
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

// Check if we're in production environment
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

// Check if we're on localhost
const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || 
   window.location.hostname === '127.0.0.1' || 
   window.location.hostname.includes('localhost'));

// Initialize Google Analytics
export const initGA = () => {
  if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    if (isProduction && !isLocalhost) {
      // Only initialize in production and not on localhost
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        debug: false,
        gtagOptions: {
          debug_mode: false
        }
      });
      console.log('🔍 Google Analytics initialized for production with ID:', GA_MEASUREMENT_ID);
    } else {
      console.log('🚧 Development Mode: Google Analytics tracking disabled for localhost');
      console.log('📊 Tracking events will be logged to console instead');
    }
  } else {
    console.warn('⚠️ Google Analytics Measurement ID not found. Please set REACT_APP_GA_MEASUREMENT_ID in your environment variables.');
  }
};

// Track page views
export const trackPageView = (path, title) => {
  if (isProduction && !isLocalhost && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title
    });
    console.log('📊 Page view tracked:', path, title);
  } else if (isDevelopment || isLocalhost) {
    console.log('🔍 [DEV] Page view would be tracked:', path, title);
  }
};

// Track custom events
export const trackEvent = (action, category = 'General', label = '', value = 0) => {
  if (isProduction && !isLocalhost && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      action: action,
      category: category,
      label: label,
      value: value
    });
    console.log('📊 Event tracked:', { action, category, label, value });
  } else if (isDevelopment || isLocalhost) {
    console.log('🔍 [DEV] Event would be tracked:', { action, category, label, value });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, section = 'Unknown') => {
  trackEvent('click', 'Button', `${section} - ${buttonName}`);
};

// Track external link clicks
export const trackExternalLink = (url, linkText = '') => {
  trackEvent('click', 'External Link', `${linkText} - ${url}`);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'Form', formName);
};

// Track file downloads
export const trackDownload = (fileName, fileType = 'unknown') => {
  trackEvent('download', 'File', `${fileType} - ${fileName}`);
};

// Track social media clicks
export const trackSocialClick = (platform, action = 'click') => {
  trackEvent(action, 'Social Media', platform);
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackExternalLink,
  trackFormSubmission,
  trackDownload,
  trackSocialClick
}; 