import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
        <h1>URITION</h1>
        <nav>
            {/* ROUTE HERE */}
            <h2>Home</h2>
            <h2>Vision</h2>
            <h2>About</h2>
        </nav>


        <button>
            Sign Up
        </button>



    </header>

  )
}
