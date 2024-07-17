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
        <Typography className="commitment-title">
          BREAKING BARRIERS TO HEALTHY EATING
        </Typography>
        <Typography className="commitment-heading">
          Our Commitment to Accessibility, Affordability, and Education
        </Typography>
        <Typography className="commitment-description">
          <span className="emphasize-stat">20%</span> ...of Americans attribute an improper diet to a lack of knowledge. 
          <br></br><span className="emphasize-stat">23%</span> ...say it 
          takes too much time 
          <br></br><span className="emphasize-stat">46%</span> ...believe it is too expensive. 
          
          <br></br>
          <br></br>
          
          These insights, as reported by the World Economic Forum (WEF), are pivotal in shaping our strategic 
          direction as we prepare to introduce our B2C product. By addressing knowledge gaps, time constraints, and cost concerns, 
          we aim to empower individuals with accessible and affordable healthier choices, ensuring our product fosters a healthier lifestyle.
        </Typography>
      </Container>
    </div>
  );
};

export default Commitment;
