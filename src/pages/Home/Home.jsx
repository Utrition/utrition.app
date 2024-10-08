// Home.js

import React from "react";
import "./Home.css";
import CountUp from "react-countup";
import SignUpButton from "../../components/SignUpButton/SignUpButton";

export default function Home() {
  return (
    <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Catalyzing Health with AI</h1>
            <p className="hero-description">
              We’re improving global well-being by utilizing AI to simplify food
              information and access for everyone
            </p>
          </div>
        </section>

        {/* Difficulty Section */}
        <section className="difficulty-section">
          <h2 className="difficulty-title">The Difficulty</h2>
          <p className="difficulty-subtitle">
            It's hard to find what's right for you. <br></br>A staggering{" "}
            <strong>83%</strong> of Americans say they want to eat healthier but
            aren’t able to.
          </p>
          <div className="difficulty-stats">
            <div className="stat">
              <h3>
                <CountUp start={0} end={20} duration={4} />%
              </h3>
              <p>Say it's a lack of knowledge</p>
            </div>
            <div className="stat">
              <h3>
                <CountUp start={0} end={23} duration={4} />%
              </h3>
              <p>Think it takes too much time</p>
            </div>
            <div className="stat">
              <h3>
                <CountUp start={0} end={40} duration={3} />%
              </h3>
              <p>Believe it is too expensive</p>
            </div>
          </div>
        </section>

        {/* "UTRITION is" Section */}
        <section className="utrition-section">
          <h2 className="utrition-title">UTRITION is...</h2>
          <div className="utrition-features">

            <div className="feature">
              <h3 className="feature-number">01</h3>
              <h3 className="feature-title">Community</h3>
              <p className="feature-description">
                We are only as strong as those around us. We’re creating a place
                for you, our users, to follow and share your friends interests
                and preferences.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-number">02</h3>
              <h3 className="feature-title">Personalized Diets</h3>
              <p className="feature-description">
                Using only your pantry items and our brief questionnaire, we are
                able to set up your personalized account ready for you to shop
                and swipe away.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-number">03</h3>
              <h3 className="feature-title">Artificial Intelligence</h3>
              <p className="feature-description">
                We are harnessing the power of AI to create personalized product
                and recipe recommendations specifically for you and your
                household.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-number">04</h3>
              <h3 className="feature-title">Transparency & Education</h3>
              <p className="feature-description">
                We enable you to make your own informed consumer decisions based
                on credible, unbiased information.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-number">05</h3>
              <h3 className="feature-title">Fitness & Lifestyle</h3>
              <p className="feature-description">
                We’re partnering with a few curated organizations including
                clubs, wellness centers, and gyms to walk alongside you on your
                health journey.
              </p>
            </div>
            <div className="feature-last">
              <h3 className="feature-title last">Interested in learning more?</h3>
              <SignUpButton className="feature-signup-button"/>
            </div>
          </div>
        </section>
    </div>
  );
}
