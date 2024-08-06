// Company.js
import './Company.css';
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
const imagePath = '/assets/src/pages/company';


// Example team data
const teamMembers = [
  {
    name: 'Connor Thompson',
    position: 'Co-Founder & CEO',
    image: `${imagePath}/connor.png`,
  },
  {
    name: 'Ryan Wittmers',
    position: 'Co-Founder & COO',
    image: `${imagePath}/ryan.JPG`,
  },
  {
    name: 'Seamus Thompson',
    position: 'Co-Founder & CMO',
    image: `${imagePath}/seamus.png`,
  },
  {
    name: 'Jacob Hinkston',
    position: 'Co-Founder & CTO',
    image: `${imagePath}/jacob.JPG`,
  },
  {
    name: 'David Allen',
    position: 'Head of Mobile Development',
    image: `${imagePath}/david.png`,
  },
  {
    name: 'Dr. Walker Orr',
    position: 'Head of AI Development',
    image: `${imagePath}/walker.png`,
  },
  {
    name: 'Sydney Jean-Simon',
    position: 'Head of Branding & Design',
    image: `${imagePath}/sydney.JPG`,
  },
  {
    name: 'Grant Lee',
    position: 'Head of Data Integration Development',
    image: `${imagePath}/grant.jpg`,
  },
  {
    name: 'Logan Barger',
    position: 'Senior Machine Learning Engineer',
    image: `${imagePath}/logan.png`,
  },
  {
    name: 'Chase Turner',
    position: 'Advisory Board - Design',
    image: `${imagePath}/chase.png`,
  },
  {
    name: 'Tim Thompson',
    position: 'Advisory Board - Finance',
    image: `${imagePath}/tim.png`,
  }
  // Add more team members here
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
