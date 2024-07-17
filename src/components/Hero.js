import React from 'react';
import { Container, Typography, TextField, Button, Box, InputAdornment } from '@mui/material';
import { border, styled } from '@mui/system';
import './Hero.css';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#14694a', // Default border color
    },
    '&:hover fieldset': {
      borderColor: '#049862', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#14694a', // Border color when focused
      borderWidth: '3px'
    },
  },
});

const Hero = () => {
  return (
    <div className="hero-container">
      <Container className="hero-content">
        <Box className="hero-text">
          <Typography className="hero-title">
            Catalyze Health
          </Typography>
          <Typography className="hero-description">
            As a company committed to catalyzing health and wellness, we strive to provide innovative solutions that enhance the well-being of our community. By entering your email, you will stay informed and connected with our journey to promote a healthier world.
          </Typography>
        </Box>
        <Box component="form" className="hero-form">
          <CustomTextField
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
  