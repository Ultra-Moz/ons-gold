import React from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <div className="fixed inset-0 wrapper">
        <div className="contain flex justify-between">
          <div className="w-[1px] bg-white opacity-10"></div>
          <div className="w-[1px] bg-white opacity-10"></div>
          <div className="w-[1px] bg-white opacity-10"></div>
          <div className="w-[1px] bg-white opacity-10"></div>
        </div>
      </div>

      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
