import React from "react";
import "./Styles.css";
const moment = require("moment");

const Today = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const l = moment().day();
  const l2 = moment().day() + 1;

  //   const l = moment.day();
  const g = moment.weekdays(l);
  const g2 = moment.weekdays(l2);

  const d = new Date();
  let day = d.getDate();
  let day2 = d.getDate() + 1;

  let mon = monthNames[d.getMonth()];

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <b className="day">{day}</b>
          <sup className="day">{mon}</sup>
          <sub className="wee">{g}</sub>
        </div>

        <div className="col-sm">
          <b className="day">{day2}</b>
          <sup className="day">{mon}</sup>
          <sub className="wee">{g2}</sub>
        </div>
      </div>
    </div>
  );
};

export default Today;
