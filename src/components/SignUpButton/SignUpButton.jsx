import React from 'react';
import Button from '@mui/material/Button';
import { ArrowForwardIos } from '@mui/icons-material';

import './SignUpButton.css';

export default function SignUpButton() {
    return (
        <Button variant="contained" className="signup-button">
          <a href="https://forms.gle/ZEHKrHQyYDRX9GCB8" target="_blank" rel="noopener noreferrer">
            Sign Up
          </a>
          <ArrowForwardIos className="signup-button-icon" />
        </Button>
    );
}

