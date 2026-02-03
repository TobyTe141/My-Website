import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; // Use global Styles.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Portfolio</Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="cart-icon" aria-label="Shopping Cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">Backend</span>
        </Link>
        <Link to="/account" className="user-icon" aria-label="User Account">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;   