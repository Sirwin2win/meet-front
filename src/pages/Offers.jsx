import React from "react";
import Amenities from "../components/Amenities";
import SpecialOffers from "../components/SpecialOffers";

const Offers = () => {
  return (
    <div>
      <h1 className="text-center my-5">Offers</h1>
      <SpecialOffers />
      <Amenities />
    </div>
  );
};

export default Offers;
