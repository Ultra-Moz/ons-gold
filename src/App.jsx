import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
const App = () => {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  const updatePosition = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, []);
  return (
    <>
      <div className="fixed inset-0 wrapper ">
        <div className="contain flex justify-between">
          <div className="w-[1px] bg-white opacity-10"></div>
          <div className="w-[1px] bg-white opacity-0 md:opacity-10"></div>
          <div className="w-[1px] bg-white opacity-0 md:opacity-10"></div>
          <div className="w-[1px] bg-white opacity-10"></div>
        </div>
      </div>

      <Navbar isScrolled={isScrolled} />
      <Home />
      <Footer />
    </>
  );
};

export default App;
