import React from "react";
import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[90%] max-w-[1300px] mt-[150px] mb-12">
        <h2 className="max-w-[1000px] text-[35px] sm:text-[50px] lg:text-[55px] xl:text-[60px] font-ProtoMono leading-[140%] text-white text-center lg:text-left">
          Decentralised naming for wallets, websites, & more.
        </h2>
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
