import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './Team.css';

/**
 * Renders the Team component, displaying information about the dedicated team working to catalyze health and wellness.
 *
 * @return {JSX.Element} The rendered Team component, including a heading, description, and a grid of team member cards.
 */
const Team = () => {
  return (
    <div className="team-container">
      <Container>
        <Typography variant="h2" className="team-heading">
          Our Team
        </Typography>
        <Typography variant="body1" className="team-description">
          Our dedicated team is driven by a shared passion to catalyze health and wellness.
        </Typography>
        <Grid container spacing={3} className="team-grid">
          <Grid item xs={12} md={3}>
            <Card className="team-card">
              <CardMedia
                component="img"
                alt="Team Member"
                height="140"
                image="path-to-image.jpg"
                title="Team Member"
              />
              <CardContent>
                <Typography variant="h5">Connor Thompson</Typography>
                <Typography variant="body2">Co-Founder & CEO</Typography>
              </CardContent>
            </Card>
            <Card className="team-card">
              <CardMedia
                component="img"
                alt="Team Member"
                height="140"
                image="path-to-image.jpg"
                title="Team Member"
              />
              <CardContent>
                <Typography variant="h5">Seamus Thompson</Typography>
                <Typography variant="body2">Co-Founder & CMO</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Repeat for other team members */}
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
