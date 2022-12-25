import React from "react";
import Hero from "../components/Hero";
import Logo from "../assets/round_mountain.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={Logo}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
};

export default Home;
