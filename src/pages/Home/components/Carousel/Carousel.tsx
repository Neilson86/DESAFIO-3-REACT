import React from 'react';
import './Carousel.css';

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
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
  );
}

export default Carousel;
