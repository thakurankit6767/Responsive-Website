import React from "react";
import Img from "../assets/kashmir_mountain.jpg";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

const Contact = () => {
  return (
    <>
      <Hero cName="hero-about" heroImg={Img} title="Contact" btnClass="about" />
      <ContactForm />
    </>
  );
};

export default Contact;
