import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Vision from './pages/Vision/Vision';
import Company from './pages/Company/Company';
import Footer from './components/Footer/Footer';

import './index.css';


export default function App() {

  const [isOpen, open] = useState(false);

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={createBrowserRouter([
        // {
        //   path: "/",
        //   element: <Home/>
        // },
        {
          path: "/",
          element: <Vision/>,
          isActive: true
        },{
          path: "/company",
          element: <Company />,
          isActive: false
        }
      ])}/>
      <Footer />
    </div>
  )
 
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



