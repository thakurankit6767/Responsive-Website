import React from "react";
import Img from "../assets/river_rafting.jpg";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
const About = () => {
  return (
    <>
      <Hero cName="hero-about" heroImg={Img} title="About" btnClass="about" />
      <AboutUs/>
    </>
  );
};

export default About;
