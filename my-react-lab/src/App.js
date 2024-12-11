import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SpecialityMenu from './components/SpecialityMenu';
import Footer from './components/Footer';

const item1 = {
  name: "Spicy Chicken Wings",
  description: "Our signature spicy wings",
  price: "Rs. 500",
  image:
    "https://images.deliveryhero.io/image/fd-pk/Products/49411247.jpg?width=%s",
};
const item2 = {
  name: "Classic Fried Chicken",
  description: "Traditional recipe",
  price: "Rs. 350",
  image:
    "https://images.deliveryhero.io/image/fd-pk/Products/26754778.jpg?width=%s",
};
const item3 = {
  name: "Chicken Burger Combo",
  description: "Burger with fries and drink",
  price: "Rs. 650",
  image:
    "https://images.deliveryhero.io/image/fd-pk/Products/58219340.jpg?width=%s",
};

const menuItems = [item1, item2, item3];

function App() {
  return (
    <div className="app">
      <Navbar />
      <LandingPage />
      <SpecialityMenu items={menuItems} />
      <Footer />
    </div>
  );
}

export default App;
