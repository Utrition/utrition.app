import React from 'react';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer'; 

function Contact() {
  return (

    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="form-input w-full mt-1" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="form-input w-full mt-1" placeholder="Enter your email address" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="form-textarea w-full mt-1" placeholder="Enter your message"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>

  );
}

export default Contact;

