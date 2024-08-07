import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import { ArrowForwardIos } from '@mui/icons-material';

export default function Header({openModal}) {
  return (
    <header className="header">

        <h1 className="header-main-text">
            UTRITION
        </h1>

        <nav>
            <a href="/"><h3>Home</h3></a>
            {/* <a href="/vision"><h3>Vision</h3></a> */}
            <a href="/company"><h3>Company</h3></a>
        </nav>
        
        <Button variant="contained" className="header-button">
          <a href="https://forms.gle/ZEHKrHQyYDRX9GCB8">
            Sign Up
          </a>
          <ArrowForwardIos className="header-button-icon"/>
        </Button>

    </header>

  )
}   
