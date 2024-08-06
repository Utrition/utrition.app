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
            <a href="/"><h3>Home</h3></a>
            <a href="/vision"><h3>Vision</h3></a>
            <h3>About</h3>
        </nav>


        <button>
            Sign Up
        </button>



    </header>

  )
}   