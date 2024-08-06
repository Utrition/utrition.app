import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Application.css';

/**
 * Renders the Application component with various sections related to the B2C application, including user-controlled features, AI-generated recommendations, product scanning, and price tracking.
 *
 * @return {JSX.Element} The rendered Application component
 */
const Application = () => {
  return (
    <div className="application-container">
      <Container>
        <Typography variant="h2" className="application-heading">
          Our B2C Application
        </Typography>
        <div className="accordion-section">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Consumer Controlled</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Users control their level of tolerance and preference within the app to review ingredients, then swipe right or left to indicate acceptance or rejection of product.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Trained Behavior Recommendations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AI generates product suggestions that correlate with the user's preferences and tastes, based on previously swiped products.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Product Scanning</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Using barcode scanner, consumer is able to scan and review ingredients of a product, and save items to their personal list. Thus, indicating their tastes to the AI.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Price Tracking</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Users scan receipts to indicate price and quantity of purchases which feed into the AI, giving them best possible recommendations for budget-friendly shopping options.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Application;