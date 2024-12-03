import React from 'react';
import ProductCard from './components/ProductCard';
import Oculuspro from './assets/oculusimg.jpg';

function App() {
    return (
        <div className="App">
            <ProductCard
                title="Oculus Pro"
                description="Virtual Animation"
                price={999.99}
                imageUrl={Oculuspro}
            />
        </div>
    );
}

export default App;
