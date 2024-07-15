import React from 'react';
import { Container, Typography } from '@mui/material';
import './Mission.css';

/**
 * Renders the Mission component with the mission heading and description.
 *
 * @return {JSX.Element} The rendered Mission component
 */
const Mission = () => {
  return (
    <div className="mission-container">
      <Container>
        <Typography className="mission-heading">
          Our Mission
        </Typography>
        <Typography className="mission-description">
          We will use Artificial Intelligence Native platforms to provide instant, reliable, and personalized food information for individuals with allergies and dietary needs, making food interactions safer and easier for confident, health-supporting choices.
        </Typography>
      </Container>
    </div>
  );
};

export default Mission;
