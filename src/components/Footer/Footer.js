import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import './Footer.css';

/**
 * Renders the Footer component with the title, email input, sign up button, and copyright information.
 *
 * @return {JSX.Element} The rendered Footer component
 */
const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <Typography variant="h4" className="footer-title">
          UTRITION
        </Typography>
        <form className="footer-form">
          <TextField variant="outlined" placeholder="Enter your email" className="footer-input" />
          <Button variant="contained" color="primary" className="footer-button">Sign up</Button>
        </form>
        <Typography variant="body2" className="footer-copyright">
          Copyright &#169; 2024 by Utrition. All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
