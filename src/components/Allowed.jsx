import React from "react";
import "./Styles.css";
import { TbHexagonLetterPFilled } from "react-icons/tb";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaDog } from "react-icons/fa6";
import { FaShuttleVan } from "react-icons/fa";
import { LiaSmokingBanSolid } from "react-icons/lia";

const Allowed = () => {
  return (
    <div className="container rounded">
      <div className="row">
        <div className="col-sm h-200 w-200 bg-white shadow-lg m-2 rounded">
          <TbHexagonLetterPFilled /> Paking
          <p>
            <b>Self-parking:</b> Complimentary
          </p>
          <p>
            <b>Secured:</b> Available
          </p>
          <p>
            <b>Covered: </b> Not available
          </p>
        </div>
        <div className="col-sm h-200 w-200 bg-white shadow-lg m-2 rounded">
          <FaShuttleVan /> Airport shuttle
          <p>
            <b>Abuja, Nigeria: </b> Not available
          </p>
          <p>
            <b>Murtala Muhammed: </b> Not available
          </p>
        </div>
        <div className="col-sm h-200 w-200 bg-white shadow-lg m-2 rounded">
          <LiaSmokingBanSolid /> Smoke-free
          <p>
            <b>Smoking rooms available:</b> No
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm h-200 w-200 bg-white shadow-lg m-2 rounded">
          <MdEmojiFoodBeverage /> Breakfast
          <p>Available for a fee</p>
          <p>
            <b>Type:</b> Buffet
          </p>
        </div>
        <div className="col-sm h-200 w-200 bg-white shadow-lg m-2 rounded">
          <FaDog /> Pets
          <p>
            <b>Pets allowed: </b>No Service support animals welcome
          </p>
        </div>
      </div>
    </div>
  );
};

export default Allowed;
