import './footer.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const navItems = [
  { id: 'home', label: 'Home', icon: '⌂', path: '/' },
  { id: 'experience', label: 'Experience', icon: '◷', path: '/experience' },
  { id: 'education', label: 'Education', icon: '✎', path: '/education' },
  { id: 'projects', label: 'Projects', icon: '⚡', path: '/projects' },
  { id: 'contact', label: 'Contact', icon: '✉', path: '/contact' },
  { id: 'github', label: 'Github', icon: '⎇', path: 'https://github.com' },
  { id: 'instagram', label: 'Instagram', icon: '◈', path: 'https://instagram.com' },
  { id: 'theme', label: 'Toggle Theme', icon: '☾', path: null },
];

const Footer = () => {
  // State management for tooltip display and theme
  const [showTooltip, setShowTooltip] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigate = useNavigate();

  // Theme toggle handler
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  // Navigation handler for both internal and external links
  const handleNavigation = (path) => {
    if (path) {
      if (path.startsWith('http')) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
    }
  };

  return (
    <div
      className={`footer-nav ${isDarkTheme ? 'dark' : 'light'}`}
      style={{
        '--tooltip-bg': isDarkTheme ? '#2a2a2a' : '#ffffff',
        '--tooltip-text': isDarkTheme ? '#ffffff' : '#000000',
        '--nav-bg': isDarkTheme ? '#1a1a1a' : '#f5f5f5',
        '--icon-color': isDarkTheme ? '#ffffff' : '#000000',
        '--hover-bg': isDarkTheme ? '#333333' : '#e0e0e0',
      }}
    >
      <nav>
        {navItems.map((item) => (
          <div
            key={item.id}
            className="nav-item"
            onMouseEnter={() => setShowTooltip(item.id)}
            onMouseLeave={() => setShowTooltip('')}
            onClick={() => item.id === 'theme' ? toggleTheme() : handleNavigation(item.path)}
          >
            <span className="icon">{item.icon}</span>
            {showTooltip === item.id && (
              <div className="tooltip">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
