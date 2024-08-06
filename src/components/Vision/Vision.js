import React from 'react';
import './Vision.css';
const phoneImage = require('../../assets/phone-image.png');

const Vision = () => (
  <main>
    <section className="vision">
      <div className="vision-content">
        <div className="vision-text-left">
          <h3 className="vision-subtitle">Our Vision</h3>
          <h1 className="vision-title">
            Providing instant, reliable, and personalized food product information.
          </h1>
        </div>
        <div className="vision-text-right">
          <p className="vision-description">
            We strive to make grocery shopping safer and easier, ensuring our users can confidently choose foods that supports their health and well-being.
          </p>
        </div>
      </div>
    </section>
    {/* App Features */}
    <section className="app-features">
        <div className="app-features-content">
          <div className="features-text">
            <h2 className="features-title">Scan Around, Find Out.</h2>
            <p className="features-description">
              Lorem ipsum odor amet, consectetur adipiscing elit. At justo malesuada aliquet scelerisque dignissim iaculis arcu purus. Ultricies mauris ornare ut nec habitant arcu ex class conubia.
            </p>
          </div>
          <div className="features-image-wrapper">
            <div className="phone-background">
              <img src={phoneImage} alt="App Screenshot" className="phone-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
    </main>
);

export default Vision;
