import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Use HashRouter

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Vision from './pages/Vision/Vision';
import Company from './pages/Company/Company';
import Footer from './components/Footer/Footer';

// Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

import './index.css';

export default function App() {

  return (
    <div className="App">
      <Header />
      <HashRouter> {/* Wrap the RouterProvider with HashRouter */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const root = document.getElementById('root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
        <SpeedInsights />
        <Analytics />
      </React.StrictMode>
    );
  } else {
    console.error('Could not find the root element in the DOM');
  }
} else {
  console.error('Could not find the window or document objects');
}

