import React from 'react';
import '../assets/SpecialityMenu.css';

function SpecialityMenu({ items }) {
  return (
    <section className="speciality-menu">
      <h2>Our Speciality Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src={items[0].image} alt="text" />
          <h3>{items[0].name}</h3>
          <p>{items[0].description}</p>
          <p className="price">{items[0].price}</p>
          <button>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src={items[1].image} alt="text" />
          <h3>{items[1].name}</h3>
          <p>{items[1].description}</p>
          <p className="price">{items[1].price}</p>
          <button>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src={items[2].image} alt="text" />
          <h3>{items[2].name}</h3>
          <p>{items[2].description}</p>
          <p className="price">{items[2].price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default SpecialityMenu;
