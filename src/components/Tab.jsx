import React from "react";

import "../components/Styles.css";
import GalleryRooms from "./GalleryRooms";
import GalleryDining from "./GalleryDining";
import GalleryAmenities from "./GalleryAmenities";
import SpecialOffers from "./SpecialOffers";

const Tab = () => {
  return (
    <div>
      {/* Nav Tabs */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#home">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#menu1">
            Dining
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#menu2">
            Amenities
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#menu4">
            Offers
          </a>
        </li>
      </ul>

      {/* Tab Panes */}
      <div className="tab-content">
        {/* Gallery Rooms */}
        <div className="tab-pane container active" id="home">
          <GalleryRooms />
        </div>
        {/* Gallery Dining */}
        <div className="tab-pane container fade" id="menu1">
          <GalleryDining />
        </div>
        {/*  Gallery Amenities */}
        <div className="tab-pane container fade" id="menu2">
          <GalleryAmenities />
        </div>
        <div className="tab-pane container fade" id="menu4">
          <SpecialOffers />
        </div>
      </div>
    </div>
  );
};

export default Tab;
