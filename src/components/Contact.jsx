import React from "react";
import "./Styles.css";

const Contact = () => {
  return (
    <div className="my-4 p-5 text-black rounded contact">
      <h1 className="tu text-center">Our Location</h1>
      <div class="row mt-5">
        <div class="col-sm">
          <h5>Call Us</h5>
          <p>+234 7000000000</p>
        </div>
        <div class="col-sm">
          <h5>Email Us</h5>
          <p>valleyviewhotel@gmail.com</p>
        </div>
        <div class="col-sm">
          <h5>Address</h5>
          <p>11-13 Efon Alaye Street Rockview Estate Dawaki-Abuja</p>
        </div>
        <div class="col-sm">
          <h5>Arrival Time</h5>
          <p>Check-in3 pm→Check-out12 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
