// Home.js

import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Catalyzing Health with AI</h1>
          <p className="hero-description">
            We’re improving global well-being by utilizing AI to simplify food information and access for everyone
          </p>
        </div>
      </section>

      {/* Difficulty Section */}
      <section className="difficulty-section">
        <h2 className="difficulty-title">The Difficulty</h2>
        <p className="difficulty-subtitle">
          It's hard to find what's right for you. A staggering <strong>83%</strong> of Americans say they want to eat healthier but aren’t able to.
        </p>
        <div className="difficulty-stats">
          <div className="stat">
            <h3>20%</h3>
            <p>Say it's a lack of knowledge</p>
          </div>
          <div className="stat">
            <h3>23%</h3>
            <p>Think it takes too much time</p>
          </div>
          <div className="stat">
            <h3>40%</h3>
            <p>Believe it’s too expensive</p>
          </div>
        </div>
      </section>

      {/* UTRITION is Section */}
      <section className="utrition-section">
        <h2 className="utrition-title">UTRITION is...</h2>
        <div className="utrition-features">
          <div className="feature">
            <h3>01</h3>
            <p>Community</p>
          </div>
          <div className="feature">
            <h3>02</h3>
            <p>Personalized Diets</p>
          </div>
          <div className="feature">
            <h3>03</h3>
            <p>Artificial Intelligence</p>
          </div>
          <div className="feature">
            <h3>04</h3>
            <p>Transparency & Education</p>
          </div>
          <div className="feature">
            <h3>05</h3>
            <p>Fitness & Lifestyle</p>
          </div>
        </div>
      </section>
    </div>
  );
}
