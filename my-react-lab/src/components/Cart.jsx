import React from 'react';
import '../styles/Cart.css';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart yet.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>Rs {item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rs {total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
