import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/wikipedia logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Wikipedia Logo" className="navbar-logo-image" />
        Wikipedia
      </div>
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">About</a></li>
        <li><a href="#" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
