import React from "react";
import "./HomePage.css";
import homebg from "./homebg.png";
import rectangle10 from "./rectangle10.svg";
import alterpic from "./alterpic.jpg";
const HomePage = () => {
  return (
    <div
      id="home"
      className="mainbody"
      style={{
        background: `url(${alterpic})`,
        backgroundSize: "cover",
        backgroundPosition: "right bottom",
      }}
    >
      <div
        className="trapezium"
        style={{
          background: `url(${rectangle10})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3>WELCOME TO CHILD CHARITY </h3>
        <h1>Lend the helping hand get involved</h1>
        <svg className="svg-button homepage-btn" height="50" width="200">
          <a href="/#about">
            <path d="M4.5 0H198L186.5 42H4.5V0Z" fill="#f0b95c" />
            <text
              x="96"
              y="22"
              fill="Black"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              Discover More
            </text>
          </a>
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
