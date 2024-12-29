import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AnimatedAddToCartButton from './AnimatedAddToCartButton';
import '../styles/Home.css';

function Home({ addToCart }) {
  const scrollToProducts = () => {
    const productSection = document.querySelector('.products');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Discover Your Style</h1>
        <p>Top-quality shoes for comfort and performance. Shop Now!</p>
        <button className="hero-button" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>

      {/* Product Section */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="details-link">
                View Details
              </Link>
              <AnimatedAddToCartButton onClick={() => addToCart(product)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
