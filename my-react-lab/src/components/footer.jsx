import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Wikipedia</h3>
          <p>
            Wikipedia Clone is a simple platform to explore knowledge, languages,
            and global information, inspired by the original Wikipedia.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@wikipedia.com</p>
          <p>Phone: +92 123 456 789</p>
          <p>Location: Karachi, Pakistan</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Wikipedia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
