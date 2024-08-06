import React from 'react';
import './Footer.css';

/**
 * Renders the Footer component with the title, email input, sign up button, and copyright information.
 *
 * @return {JSX.Element} The rendered Footer component
 */
const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <p className="footer-text">Copyright &copy; 2024 Utrition, Inc. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
