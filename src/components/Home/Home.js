import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <main className="home-page">
        <section>
            <h1>Catalyzing Health with AI</h1>
            <p className="p-information">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore.</p>
        </section>
        
        <h2> We are a company committed to wellness and Ai lorem
        ipsum I think Seamus will have the official text. </h2>
        <section className="home-the-problem">
            <h1 id="theProblem">The Problem</h1>
            <p className="p-information">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
            </p>
            <section>
                <div className="the-problem-h1-section">
                    <h1>20%</h1>
                    <p className="p-information">Say it’s a lack of knowledge</p>
                </div>
                <div>
                    <h1>23%</h1>
                    <p className="p-information">Think it takes too much time</p>
                </div>
                <div>
                    <h1>40%</h1>
                    <p className="p-information">Believe it’s too expensive</p>
                </div>
            </section>
        </section>
    </main>
  )
}
