import React from "react";
import kiddies from "../assets/images/kiddies.jpg";
import party from "../assets/images/poolParty.avif";
import bar from "../assets/images/bar.avif";
import restaurant from "../assets/images/restaurant.avif";

const SpecialOffers = () => {
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="product-detail" src={kiddies} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <h4 className="card-title">Swimming Coaching for Children</h4>
            <p className="card-text">
              Enroal your child to learn swimming skills from experts. Let them
              socialize and lead a fun filled life
            </p>
            <button className="btn btn-primary">Call Us Now</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="product-detail" src={party} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <h4 className="card-title">Pool Party</h4>
            <p className="card-text">
              All work and no play makes Jack a dull boy. Organize your team and
              relax for a while
            </p>
            <button className="btn btn-primary">Call Us Now</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="product-detail" src={restaurant} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <h4 className="card-title">Village Kitchen</h4>
            <p className="card-text">
              Come have that home taste that you've been craving for
            </p>
            <button className="btn btn-primary">Call Us Now</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="product-detail" src={bar} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="card-body">
            <h4 className="card-title">Native Bar</h4>
            <p className="card-text">
              Visit our bar for a bottle of understanding.
            </p>
            <button className="btn btn-primary">Call Us Now</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SpecialOffers;
