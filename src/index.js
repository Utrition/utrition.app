import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/Hero';
import Commitment from './components/Commitment';
import Mission from './components/Mission';
import Application from './components/Application';
import Resources from './components/Resources';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';
import Header from './components/Header/Header';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">

      <div>
          <main className="test-1">
      <iframe
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGM6iFXsFY&#x2F;n05TzU29exCOZ_EU7Kxk8g&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"
        >
      </iframe>
    </main>
    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGM6iFXsFY&#x2F;n05TzU29exCOZ_EU7Kxk8g&#x2F;view?utm_content=DAGM6iFXsFY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">New Website Design (as of 8.5)</a> by Sydney Jean-Simon
      </div>

      

      <Header/>
      <Hero />
      <Commitment />
      <Mission />
      <Application />
      <Resources />
      <Team />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
