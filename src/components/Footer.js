import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <form className="newsletter-form">
        <input type="email" placeholder="Subscribe for email updates" />
        <button type="submit">Subscribe</button>
      </form>
      <p>Copyright &copy; 2024 by Utrition. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
