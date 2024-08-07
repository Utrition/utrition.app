import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Use HashRouter
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/Header';
import Vision from './pages/Vision/Vision';
import Company from './pages/Company/Company';
import Footer from './components/Footer/Footer';

import './index.css';

export default function App() {

  return (
    <div className="App">
      <Header />
      <HashRouter> {/* Wrap the RouterProvider with HashRouter */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Vision />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
