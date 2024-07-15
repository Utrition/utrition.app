import React from 'react';
import { Container, Typography, TextField, Button, Box, InputAdornment } from '@mui/material';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <Container className="hero-content">
        <Box className="hero-text">
          <Typography className="hero-title">
            Catalyze Health
          </Typography>
          <Typography variant="body1" className="hero-description">
            As a company committed to catalyzing health and wellness, we strive to provide innovative solutions that enhance the well-being of our community. By entering your email, you will stay informed and connected with our journey to promote a healthier world.
          </Typography>
        </Box>
        <Box component="form" className="hero-form">
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            className="hero-input"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" className="hero-button">
                    Sign up
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
