import React from 'react';
import './Mob.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Tabs from './Tabs/Tabs';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Carousel from './Carousel/Carousel';

const Mob: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Tabs />
      <FeaturedProducts />
      <Carousel />
    </div>
  );
}

export default Mob;
