import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; // Use global Styles.css
import Newslogo from './assests/Icons/NavBar-Icons/Dark-mode-news.webp'
import Loginlogo from './assests/Icons/NavBar-Icons/Dark-mode-login.webp'

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    { path: '/Projects', icon: '📁', label: 'Projects' },
    { path: '/About', icon: 'ℹ️', label: 'About Me' },
    { path: '/Contact', icon: '✉️', label: 'Contact' },
    {path: '/Scocials', icon: '🔗', label: 'Socials'},
  ];

  return (
    <>
      <div 
        className="sidebar"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="sidebar-header">
          <Link to="/" className="logo">
            p
          </Link>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="sidebar-item"
              title={item.label}
            >
              <div className="sidebar-icon">
                <span>{item.icon}</span>
              </div>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="top-right-nav">
        <Link to="/News" className="top-nav-item news-item" title="News">
          <img src={Newslogo} alt="News Icon" className="top-nav-icon" />
        </Link>
        <Link to="/Login" className="top-nav-item login-item" title="Login">
          <img src={Loginlogo} alt="Login Icon" className="top-nav-icon" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
