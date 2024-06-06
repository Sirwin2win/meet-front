import React from "react";

import room4 from "../assets/images/dining.avif";
import room5 from "../assets/images/dining1.jpg";
import room6 from "../assets/images/dining2.avif";
import room7 from "../assets/images/dining3.avif";
import room8 from "../assets/images/dining4.avif";
import room9 from "../assets/images/dining5.avif";
// import room10 from "../assets/images/photo-1716396484354-e90091645e0b.avif";
import room11 from "../assets/images/photo-1716632943255-355b59566d11.avif";
// import room12 from "../assets/images/photo-1716702087750-3ac634828e79.avif";
import "../components/Styles.css";

const GalleryDining = () => {
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
      <div class="row mt-3"></div>
    </div>
  );
};
export default GalleryDining;
