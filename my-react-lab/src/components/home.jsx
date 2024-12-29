import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import AnimatedAddToCartButton from './AnimatedAddToCartButton';
import '../styles/Home.css';

function Home({ addToCart }) {
  return (
    <div className="home">
      <div className="hero">
        <h1>Discover Your Style</h1>
        <p>Top-quality shoes for comfort and performance. Shop Now!</p>
        <button className="hero-button" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
          Shop Now
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Rs {product.price.toFixed(2)}</p>
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
