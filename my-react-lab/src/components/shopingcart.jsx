import React, { useState } from 'react';
import '../styles/shopingcart.css';

function ShoppingCart() {
    const itemsList = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Headphones', price: 100 },
        { id: 3, name: 'Smartphone', price: 700 },
        { id: 4, name: 'Keyboard', price: 50 },
    ];

    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1 className='carthead'>Shopping Cart</h1>

            <div className="items-list">
                <h3 className='avit'>Available Items: </h3>
                {itemsList.map((item) => (
                    <div key={item.id} className="item">
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                        <button onClick={() => addItemToCart(item)} className="add-button">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-items">
                <h3>Your Cart</h3>
                {cart.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <button onClick={() => removeItemFromCart(item.id)} className="remove-button">
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="total-price">
                <h3>Total: ${calculateTotal()}</h3>
            </div>
        </div>
    );
}

export default ShoppingCart;
