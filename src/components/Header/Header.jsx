import React from 'react';
import './Header.css';
import SignUpButton from '../SignUpButton/SignUpButton';

export default function Header()  {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-main-text"><a href="#/">Utrition</a></h1>
        <nav>
          <a href="#/"><h3>Home</h3></a>
          <a href="#/vision"><h3>Vision</h3></a>
          {/* Removing for now along with route in index.js. <a href="#/company"><h3>Company</h3></a> */}
        </nav>
        
        {/* Sign Up Button Component */}
        <SignUpButton className="header-signup-button"/>
      </div>
    </header>
  );
}
