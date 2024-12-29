import React, { useState } from 'react';
import '../styles/AnimatedAddToCartButton.css';

function AnimatedAddToCartButton({ onClick }) {
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2600); // Adjust duration for animation
      if (onClick) onClick(e);
    }
    e.preventDefault();
  };

  return (
    <button
      className={`animated-add-to-cart-button ${loading ? 'loading' : ''}`}
      onClick={handleClick}
    >
      <span>Add to cart</span>
      <div className="cart">
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </div>
    </button>
  );
}

export default AnimatedAddToCartButton;
