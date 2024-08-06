import './Vision.css';

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
          Set: Your very own dietary preferences. 

          Scan: Any food item and receive all pertinent nutrition information. 

          Swipe: To the right to approve an item and check off your grocery list, up for a one time exception, and left to reject the item.
          </p>
        </div>
      </div>
    </section>
    {/* App Features */}
    <section className="app-features">
        <div className="app-features-content">
          <div className="features-text">
            <h2 className="features-title">Set, Scan, Swipe</h2>
            <p className="features-description">
            We strive to make grocery shopping safer and easier, ensuring our users can confidently choose foods that supports their health and well-being.
            </p>
          </div>
          <div className="features-image-wrapper">
            <div className="phone-background">
              <img src="../../../assets/src/pages/vision/phone-image.png" alt="App Screenshot" className="phone-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="goal">
        <div className="goal-content">
          <div className="goal-text-left">
            <h3 className="goal-subtitle">Our Goal</h3>
            <h1 className="goal-title">
              Your food, your way.
            </h1>
          </div>
          <div className="goal-text-right">
            <p className="goal-description">
              Your diet is yours and we are here to support you in your nutritional journey. 
              Period. Whether it’s with our our Smart Suggest, social features, or our 
              Smart Scan every time you go grocery shopping.
            </p>
          </div>
        </div>
      </section>
    </main>
);

export default Vision;
