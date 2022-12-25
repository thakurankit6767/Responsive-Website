import React from "react";
import TripData from "./TripData";
import Sea from "../assets/sea.jpg";
import Sunset from "../assets/beautiful sunset.jpg";
import Kashmir from "../assets/kashmir_horse.jpg";
import "./TripStyles.css";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google maps</p>
      <div className="tripcard">
        <TripData
          image={Sea}
          heading="Trip in Indonesia"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        />

        <TripData
          image={Sunset}
          heading="Trip in France"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        />

        <TripData
          image={Kashmir}
          heading="Trip in Africa"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        />
      </div>
    </div>
  );
};

export default Trip;
