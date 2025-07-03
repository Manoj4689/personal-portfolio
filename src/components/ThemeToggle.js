import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button
      className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <i className={`fas ${darkMode ? 'fa-moon' : 'fa-sun'}`}></i>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 