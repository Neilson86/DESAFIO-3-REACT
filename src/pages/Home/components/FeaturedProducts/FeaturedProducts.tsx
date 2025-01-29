import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts: React.FC = () => {
  return (
    <><div className="featured-products">
      <div className="product">
        <h2>TMA-2 Modular Headphone</h2>
        <button>Shop now</button>
      </div>
      <div className="carousel">
      <h3>TMA-2 Modular Headphone</h3>
        <div className="carousel-item">
          <img src="imgs/headphone.png" alt="TMA-2 HD Wireless" />
          <p>TMA-2 HD Wireless</p>
          <p>USD 350</p>
        </div>
        <div className="carousel-item">
          <img src="imgs/cable.png" alt="CO2 – Cable" />
          <p>CO2 – Cable</p>
          <p>USD 25</p>
        </div>
        <div className="carousel-item">
          <img src="imgs/headphone.png" alt="TMA-2 HD Wireless" />
          <p>TMA-2 HD Wireless</p>
          <p>USD 350</p>
        </div>
        <div className="carousel-item">
          <img src="imgs/cable.png" alt="CO2 – Cable" />
          <p>CO2 – Cable</p>
          <p>USD 25</p>
        </div>
      </div>
    </div>
    <div>Feature Products</div></>
  );
}

export default FeaturedProducts;
