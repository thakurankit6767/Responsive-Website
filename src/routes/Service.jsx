import React from "react";
import Img from "../assets/man_sea.jpg";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Hero cName="hero-about" heroImg={Img} title="Service" btnClass="about" />
      <Trip />
    </>
  );
};

export default Service;
