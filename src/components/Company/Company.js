// Company.js
import './Company.css';
import React from 'react';
import { Grid, Card, CardContent, CardMedia, CardHeader, Typography } from '@mui/material';

// Example team data
const teamMembers = [
  {
    name: 'Connor Thompson',
    position: 'CEO & Co-Founder',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Ryan Wittmers',
    position: 'COO & Co-Founder',
    image: 'path/to/image2.jpg',
  },
  {
    name: 'Connor Thompson',
    position: 'CEO & Co-Founder',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Ryan Wittmers',
    position: 'COO & Co-Founder',
    image: 'path/to/image2.jpg',
  },
  {
    name: 'Connor Thompson',
    position: 'CEO & Co-Founder',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Ryan Wittmers',
    position: 'COO & Co-Founder',
    image: 'path/to/image2.jpg',
  },
  {
    name: 'Connor Thompson',
    position: 'CEO & Co-Founder',
    image: 'path/to/image1.jpg',
  },
  {
    name: 'Ryan Wittmers',
    position: 'COO & Co-Founder',
    image: 'path/to/image2.jpg',
  },
  
  // Add more team members
];

const Company = () => {
  return (
    <div className="company-section">
      <h1 className="company-heading">Meet the Team</h1>
      <Grid container spacing={4} className="company-grid">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="team-card">
              <CardMedia
                component="img"
                alt={member.name}
                height="260"
                image={member.image}
                className="team-card-image"
              />
              <CardContent>
                <Typography className="team-card-name">
                  {member.name}
                </Typography>
                <Typography className="team-card-position">
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Company;
