import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Solution from './components/Solution';
import B2CProduct from './components/B2CProduct';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Solution />
      <B2CProduct />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
