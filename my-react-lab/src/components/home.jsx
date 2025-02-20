import React from 'react';
import products from '../data/products';
import '../styles/Home.css';

function Home({ addToCart }) {
  return (
    <div className="home">
      {/* Product Grid Section */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            {/* Product Image */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Details */}
            <div className="product-details">
              <h3>{product.name}</h3>

              {/* Flex container for Price & Button */}
              <div className="product-info">
                <p>$ {product.price.toFixed(2)}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
