import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import AnimatedAddToCartButton from './AnimatedAddToCartButton';
import '../styles/ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>Rs {product.price.toFixed(2)}</p>
        <div className="buttons">
          <Link to="/" className="back-button">
            Back to Home
          </Link>
          <AnimatedAddToCartButton onClick={() => addToCart(product)} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
