import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ThankYou.css'; // Add some styling

function ThankYou() {
  return (
    <div className="thank-you">
      <h2>🎉 Purchase Complete! 🎉</h2>
      <p>Thank you for your purchase! Highly appreciated</p>
      <Link to="/" className="home-btn">Return to Home</Link>
    </div>
  );
}

export default ThankYou;
