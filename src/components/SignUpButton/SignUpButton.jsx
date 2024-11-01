import React from "react";
import Button from "@mui/material/Button";
import { ArrowForwardIos } from "@mui/icons-material";

import "./SignUpButton.css";

export default function SignUpButton() {
  return (
    <Button variant="contained" className="signup-button">
      <a
        href="https://utrition.notion.site/12fbcc38ac63802ea0b0c49950dc2512?pvs=105"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sign Up
      </a>
      <ArrowForwardIos className="signup-button-icon" />
    </Button>
  );
}
