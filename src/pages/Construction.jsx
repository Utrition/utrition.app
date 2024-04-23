import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";


export function Construction() {
  return (
    <main>
    <Header />
    <div className="h-screen w-screen light:bg-black bg-white  light:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,green)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-500 py-8">
        Coming soon!
      </p>
    </div>

    <Footer />
    </main>
  );
}

export default Construction;

