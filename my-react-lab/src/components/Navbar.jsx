import React from 'react';
import '../assets/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuCqF-y46CtWSswTYuDXGKCFVED-CCpbhlg&s"
          alt="Logo"
        />
        <p className='navbar-text'>Kabab Jees Fried Chikes</p>
      </div>
      <div className="navbar-texts">
        <p className='p1'>Home</p>
        <p className='p2'>Meny</p>
        <button className='navbarbut'><img
            src="/cart.png"
            alt="Cart"
            className="cart-icon"
          />Order Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
