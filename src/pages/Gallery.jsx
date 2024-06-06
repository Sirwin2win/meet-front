// import React, { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import room1 from "../assets/images/luxery.avif";
import room2 from "../assets/images/photo-1716319486974-47a32686b8cf.avif";
import room3 from "../assets/images/photo-1717092068546-2069d5bcc38e.avif";
import Tab from "../components/Tab";
import "../components/Styles.css";

const Gallery = () => {
  return (
    <div className="container">
      <h2 className="text-center tu">Gallery</h2>
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
      </Carousel>

      <hr />
      <Tab />
    </div>
  );
};

export default Gallery;
