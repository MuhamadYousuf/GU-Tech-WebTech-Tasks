import React from 'react';
import '../assets/LandingPage.css';

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-content">
        <h1 className='lh'>Taste The <span style={{color: '#FFD700'}}>KababJees</span> Magic</h1>
        <p className='lp'>Crispy, Delicious Chicken That Keeps You Coming Back!</p>
        <button><img
            src="/cart.png"
            alt="Cart"
            className="cart-icon"
          />Order Now</button>
      </div>
      <div className="landing-image">
        <img
          src="https://images.deliveryhero.io/image/fd-pk/LH/qcve-listing.jpg"
          alt="Landing"
        />
      </div>
    </section>
  );
}

export default LandingPage;
