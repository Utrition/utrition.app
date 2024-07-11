import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team">
      <h2>MEET THE TEAM</h2>
      <p>We are motivated to catalyze health</p>
      <div className="team-grid">
        <div className="team-member">
          <img src="path_to_image" alt="Connor Thompson" />
          <h3>Connor Thompson</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="path_to_image" alt="Ryan Wittemer" />
          <h3>Ryan Wittmers</h3>
          <p>Founder & COO</p>
        </div>
        {/* Add other team members here */}
      </div>
    </section>
  );
};

export default Team;
