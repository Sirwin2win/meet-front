import React from "react";
import ForYourStay from "../components/ForYourStay";
import Allowed from "../components/Allowed";
import Policies from "../components/Policies";
import "../components/Styles.css";
import Amenities from "../components/Amenities";

const HotelInfo = () => {
  return (
    <div className="container">
      <Amenities />
      <ForYourStay />
      <Allowed />
      <Policies />
    </div>
  );
};

export default HotelInfo;
