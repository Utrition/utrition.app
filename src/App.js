import React from 'react';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import Mission from './components/Mission';
import Application from './components/Application';
import Resources from './components/Resources';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered main application component.
 */
function App() {
  return (
    <div className="App">
      <Hero />
      <Commitment />
      <Mission />
      <Application />
      <Resources />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
