import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">

        <h1 className="header-main-text font-color-primary">
            Utrition
        </h1>

        
        <nav>
            {/* ROUTE HERE */}
            <h3>Home</h3>
            <h3>Vision</h3>
            <h3>About</h3>
        </nav>


        <button>
            Sign Up
        </button>



    </header>

  )
}   
