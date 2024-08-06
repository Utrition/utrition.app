import React from 'react';
import ReactDOM from 'react-dom';

import Hero from './components/Home/Hero';
import Commitment from './components/Home/Commitment';
import Mission from './components/AboutUs/Mission';
import Application from './components/old/Application';
import Vision from './components/Vision/Vision';
import Team from './components/AboutUs/Team';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
  ,{
    path: "/vision",
    element: <Vision/>
  }
]);


ReactDOM.render(
  <React.StrictMode>
    <div className="App">

      {/* <div>
          <main className="test-1">
      <iframe
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGM6iFXsFY&#x2F;n05TzU29exCOZ_EU7Kxk8g&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"
        >
      </iframe>
    </main>
    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGM6iFXsFY&#x2F;n05TzU29exCOZ_EU7Kxk8g&#x2F;view?utm_content=DAGM6iFXsFY&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">New Website Design (as of 8.5)</a> by Sydney Jean-Simon
      </div> */}

      

      <Header/>
      <RouterProvider router={router}/>
      <Footer />
      {/* <Home/> */}

      {/* <Hero />
      <Commitment />
      <Mission />
      <Application />
      <Team />
      <Footer /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);