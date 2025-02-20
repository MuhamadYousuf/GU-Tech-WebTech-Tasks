import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Cart.css';

function Cart({ cart, removeFromCart, clearCart }) {
  const navigate = useNavigate(); 

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    clearCart(); 
    navigate('/thank-you'); 
  };

  return (
    <div className="cart">
      <h2 className='yourcart'>Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <img src="/images/Emcartpic.png" alt="Empty Cart" className="empty-cart-image" />
          <p className="empty-cart-text">Your cart is empty</p> 
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>$ {item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className='totaldiv'>
              <h3>Total: </h3>
              <p className='total'>$ {total.toFixed(2)}</p>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
