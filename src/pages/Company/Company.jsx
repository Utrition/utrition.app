// Company.js
import React from 'react';
import './Company.css';
import { Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FadeIn from 'react-fade-in';


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
    image: `${imagePath}/ryan.png`,
  },
  {
    name: 'Seamus Thompson',
    position: 'Co-Founder & CMO',
    image: `${imagePath}/seamus.png`,
  },
  {
    name: 'Jacob Hinkston',
    position: 'Co-Founder & CTO',
    image: `${imagePath}/jacob.png`,
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
    image: `${imagePath}/sydney.png`,
  },
  {
    name: 'Grant Lee',
    position: 'Head of Data Integration',
    image: `${imagePath}/grant.png`,
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
  },
  // Add more team members here


  // Add CTA card - this is
  {
    isCTA: true, // Indicate this is the CTA card
    title: 'Interested in getting exclusive insights?',
    buttonText: 'SIGN UP',
  },
];

const Company = () => {
  return (
    <div className="company-section">
      <FadeIn>
      <h2 className="company-title">Meet the Team</h2>
      <div className="company-grid-wrapper">
        <Grid container spacing={4} justifyContent="center" className="company-grid">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="grid-item">
              {member.isCTA ? (
                <Card className="cta-card card">
                  <CardContent className="cta-card-content">
                    <h3 className="cta-card-title">{member.title}</h3>
                    <a
                      href="https://forms.gle/ZEHKrHQyYDRX9GCB8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-card-button-link"
                    >
                      <Button
                        variant="contained"
                        className="cta-card-button"
                        endIcon={<ArrowForwardIosIcon />}
                      >
                        {member.buttonText}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ) : (
                <Card className="team-card card">
                  <CardMedia
                    component="img"
                    alt={member.name}
                    height="260"
                    image={member.image}
                    className="team-card-image"
                  />
                  <CardContent className="team-card-content">
                    <h3 className="team-card-name">{member.name}</h3>
                    <p className="team-card-position">{member.position}</p>
                  </CardContent>
                </Card>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
      </FadeIn>
    </div>
  );
};

export default Company;
