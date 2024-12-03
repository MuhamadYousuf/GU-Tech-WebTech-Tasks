import React from 'react';
import '../styles/ProductCard.css'; // Assuming the CSS file is in the style folder

const ProductCard = ({ title, description, price, imageUrl }) => {
    return (
        <div className='maindiv'>
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-card__image" />
            <div className="product-card__content">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__description">{description}</p>
                <p className="product-card__price">${price}</p>
                <hr className='hr'/>
                <div className='buynowdiv'>
                <button className='buynow'>Buy Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
