// Google Analytics Configuration
// =============================

// SETUP INSTRUCTIONS:
// 1. Go to https://analytics.google.com/
// 2. Create a new Google Analytics 4 property
// 3. Get your Measurement ID (format: G-XXXXXXXXXX)
// 4. Create a .env file in your project root with:
//    REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
// 5. Replace G-XXXXXXXXXX with your actual Measurement ID

// DEVELOPMENT vs PRODUCTION:
// - DEVELOPMENT (localhost): Events are logged to console only (not sent to GA)
// - PRODUCTION (deployed): Events are sent to Google Analytics

export const GA_CONFIG = {
  // This reads from your .env file
  measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID,
  
  // Environment detection
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  
  // Localhost detection (automatically excluded from tracking)
  isLocalhost: typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || 
     window.location.hostname === '127.0.0.1' || 
     window.location.hostname.includes('localhost')),
  
  // Additional tracking options
  trackingOptions: {
    // Enable page view tracking
    pageViews: true,
    
    // Enable scroll tracking
    scrollTracking: true,
    
    // Enable file download tracking
    downloadTracking: true,
    
    // Enable external link tracking
    externalLinkTracking: true,
    
    // Enable form submission tracking
    formTracking: true,
    
    // Exclude localhost from tracking
    excludeLocalhost: true,
    
    // Only track in production
    productionOnly: true
  }
};

// Example .env file content:
// REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
// REACT_APP_EMAILJS_USER_ID=your_user_id

export default GA_CONFIG; 