import React from "react";
import Hero from "./Hero";
import Slider from "./Slider";
import Profile from "./Profile";
import Stats from "./Stats";
import Description from "./Description";
import Ecosystem from "./Ecosystem";

const Home = () => {
  return (
    <>
      <Hero />
      <Profile />
      <Stats />
      <Description />
      <Ecosystem />
    </>
  );
};

export default Home;
