import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Temple from "../assets/karnataka_temple.jpg";
import Assam from "../assets/assam_tea.jpg";
import River from "../assets/river_boat_sea.jpg";
import Kashmir from "../assets/kashmir_mountain.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity</p>
      <DestinationData
        className="first-des"
        heading="What is Lorem Ipsum?"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting
      PageMaker including versions of Lorem Ipsum."
        img1={Temple}
        img2={Assam}
      />

      <DestinationData
        className="second-des"
        heading="Where does it come from?"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
        img1={River}
        img2={Kashmir}
      />
    </div>
  );
};

export default Destination;
