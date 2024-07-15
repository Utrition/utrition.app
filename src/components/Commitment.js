import React from 'react';
import { Container, Typography } from '@mui/material';
import './Commitment.css';

/**
 * Renders the Commitment component with the title, heading, and description of the commitment to accessibility, affordability, and education.
 *
 * @return {JSX.Element} The rendered Commitment component
 */
const Commitment = () => {
  return (
    <div className="commitment-container">
      <Container>
        <Typography variant="h4" className="commitment-title">
          BREAKING BARRIERS TO HEALTHY EATING
        </Typography>
        <Typography variant="h2" className="commitment-heading">
          Our Commitment to Accessibility, Affordability, and Education
        </Typography>
        <Typography variant="body1" className="commitment-description">
          20% of Americans attribute an improper diet to a lack of knowledge. 23% say it takes too much time, and 46% believe it is too expensive. These insights, as reported by the World Economic Forum (WEF), are pivotal in shaping our strategic direction as we prepare to introduce our B2C product. By addressing knowledge gaps, time constraints, and cost concerns, we aim to empower individuals with accessible and affordable healthier choices, ensuring our product fosters a healthier lifestyle.
        </Typography>
      </Container>
    </div>
  );
};

export default Commitment;
