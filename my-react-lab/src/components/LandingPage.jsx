import React from 'react';
import '../styles/LandingPage.css';
import logo from '../assets/wikipedia logo.jpg';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="logo-container">
        <img src={logo} alt="Wikipedia Logo" className="landing-page-logo" />
      </div>
      <h1 className="landing-title">Welcome to Wikipedia Clone</h1>
      <p className="landing-subtitle">
        Explore a world of knowledge, languages, and innovation. Your gateway to a wealth of information at your fingertips.
      </p>

      <div className="language-section">
        <h3 className="language-heading">Select Your Language</h3>
        <div className="language-links">
          <a href="#" className="language-link">English</a>
          <a href="#" className="language-link">Urdu</a>
          <a href="#" className="language-link">Pashto</a>
          <a href="#" className="language-link">Sindhi</a>
        </div>
      </div>

      <div className="form-container">
        <h2>Get in Touch</h2>
        <p className="form-description">We'd love to hear from you! Fill out the form below, and our team will get back to you shortly.</p>
        <form className="user-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
