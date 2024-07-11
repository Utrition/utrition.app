import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">UTRITION</h1>
        <h2 className="header-subtitle">Catalyze Health</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
