import React from "react";
import room1 from "../assets/images/tbl.avif";
import room2 from "../assets/images/round1.png";
import room3 from "../assets/images/conf.avif";
import room4 from "../assets/images/conf1.avif";
import room5 from "../assets/images/conf2.avif";
import room6 from "../assets/images/conf3.avif";
import "../components/Styles.css";
import Carousel from "react-bootstrap/Carousel";
import EventReservation from "../components/EventReservation";

const Events = () => {
  return (
    <div className="container">
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room1} alt="JAVA" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room2} alt="HTML" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room3} alt="Angular" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room4} alt="Angular" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room5} alt="Angular" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block eventSlide" src={room6} alt="Angular" />
        </Carousel.Item>
      </Carousel>
      <hr />
      <div className="my-5">
        <h1 className="text-center">Meetings and Events</h1>
        <p>
          Our hotel is home to Congress Hall — boasting a foyer and balcony —
          and 24 naturally-lit meeting rooms, each with air conditioning and
          WiFi. Work with our event staff personalize your event, from catering
          to room configuration.
        </p>
      </div>
      <EventReservation />
    </div>
  );
};

export default Events;
