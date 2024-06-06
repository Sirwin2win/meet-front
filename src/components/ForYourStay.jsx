import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import "./Styles.css";

const ForYourStay = () => {
  return (
    <div className="container hinfo">
      <div class="row mt-5">
        <div class="col-sm my-5">
          <b> For your stay </b>
          <p>Check-in 3 pm → Check-out 12 pm</p>
        </div>

        <div class="col-sm"></div>

        <div class="col-sm my-5">
          <div className="row">
            <button className="btn btn-primary">Find a Room</button>
            <div class="col-sm">
              <TfiEmail /> <p>valleyviewhotel@gmail.com</p>
            </div>
            <div class="col-sm">
              <FaPhone />
              <p> +234 70000000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYourStay;
