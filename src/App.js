import React from 'react';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import Mission from './components/Mission';
import Application from './components/Application';
import Resources from './components/Resources';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';
import Header from './components/Header/Header';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered main application component.
 */
function App() {
  return (
    <div className="App">

      <Header/>
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
