import React from "react";

import room4 from "../assets/images/amen.avif";
import room5 from "../assets/images/amen1.avif";
import room6 from "../assets/images/amen2.avif";
import room7 from "../assets/images/amen3.avif";
import room8 from "../assets/images/amen4.avif";
import room9 from "../assets/images/amen5.avif";

import "../components/Styles.css";

const GalleryAmenities = () => {
  return (
    <div className="container">
      <div className=""></div>

      <div class="row mt-5">
        <div class="col">
          <img src={room4} className="d-block w-100 h-100 phot" alt="..." />
        </div>
        <div class="col">
          <img src={room5} className="d-block w-100 h-100 phot" alt="..." />
        </div>
        <div class="col">
          <img src={room6} className="d-block w-100 h-100 phot" alt="..." />
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <img src={room7} className="d-block w-100 h-100 phot" alt="..." />
        </div>
        <div class="col">
          <img src={room8} className="d-block w-100 h-100 phot" alt="..." />
        </div>
        <div class="col">
          <img src={room9} className="d-block w-100 h-100 phot" alt="..." />
        </div>
      </div>
    </div>
  );
};
export default GalleryAmenities;
