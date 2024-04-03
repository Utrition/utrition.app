// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <Header/>

      
      <Footer/>

  </BrowserRouter>
);

reportWebVitals();
