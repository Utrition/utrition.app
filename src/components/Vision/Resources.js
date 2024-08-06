import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './Resources.css';

/**
 * Renders the Resources component with various resource cards displaying Genetic Insights, Culture & Community, Artificial Intelligence, Food Allergies, Health Conditions, and Fitness & Lifestyle.
 *
 * @return {JSX.Element} The rendered Resources component
 */
const Resources = () => {
  return (
    <div className="resources-container">
      <Container>
        <Typography variant="h2" className="resources-heading">
          Our Resources & Strategies
        </Typography>
        <Typography variant="body1" className="resources-description">
          To "Catalyze Health" means we simplify & accelerate the steps of your wellness journey.
        </Typography>
        <Grid container spacing={3} className="resources-grid">
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Genetic Insights</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Culture & Community</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Artificial Intelligence</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Food Allergies</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Health Conditions</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="resource-card">
              <Typography variant="h5">Fitness & Lifestyle</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Resources;
 