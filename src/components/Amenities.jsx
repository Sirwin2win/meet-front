import React from "react";
import { IoIosFitness } from "react-icons/io";
import { LuUtensilsCrossed } from "react-icons/lu";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import "./Styles.css";

const Amenities = () => {
  return (
    <div className="my-4 p-5 text-black rounded container">
      <p className="text-center">
        <h1 className="tu">Hotel information</h1>
      </p>
      <p className="text-center">
        Find all the details you need for a great stay at ValleyView Hotel
        Abuja.
      </p>
      <h1 className="text-center tu">Our amenities</h1>
      <div class="row mt-5">
        <div class="col-sm">
          <LuUtensilsCrossed /> <b className="tu">Dining</b>
          <p>On-site restaurant</p>
          <p>Room service</p>
        </div>
        <div class="col-sm">
          <IoIosFitness size={20} />{" "}
          <b className="tu">Fitness and recreation</b>
          <p>Outdoor pool</p>
          <p>Fitness center</p>
          <p>Spa</p>
          <p>Casino</p>
          <p>Tennis</p>
        </div>
        <div class="col-sm">
          <MdOutlineBusinessCenter /> <b className="tu">Business and work</b>
          <p>Executive lounge</p>
          <p>Business center</p>
          <p>Meeting rooms</p>
        </div>
        <div class="col-sm">
          <MdGroup /> <b>Guest services</b>
          <p>Concierge</p>
        </div>
        <div class="col-sm">
          <BsEmojiSmile /> <b className="tu">Conveniences</b>
          <p>Free parking</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
