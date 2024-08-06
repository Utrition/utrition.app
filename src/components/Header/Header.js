import React from 'react'
import './Header.css'
import Signup from '../Signup/Signup'

export default function Header({openModal}) {
  return (
    <header className="header">

        <h1 className="header-main-text font-color-primary">
            Utrition
        </h1>

        
        <nav>
            <a href="/"><h3>Home</h3></a>
            <a href="/vision"><h3>Vision</h3></a>
            <a href="/company"><h3>Company</h3></a>
        </nav>


        <Signup
          openModal={openModal}
        />



    </header>

  )
}   
