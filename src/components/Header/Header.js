import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
        <span className="header-main-text">
            utrition
        </span>

        
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
