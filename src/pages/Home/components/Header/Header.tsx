import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Audio</div>
        <div className="user-info">
          <span>Hi, Andrea</span>
          <img src="imgs/avatar_small.png" alt="User Avatar" className="avatar" />
        </div>
      </div>
      <h1>What are you looking for today?</h1>
    </header>
  );
}

export default Header;
