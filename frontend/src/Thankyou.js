import React from "react";
import ty from "./ty.png";
const Thankyou = () => {
  return (
    <div
      id="home"
      className="mainbody"
      style={{
        background: `url(${ty})`,
        backgroundSize: "cover",
        backgroundPosition: "right bottom",
        height: "115vh",
      }}
    >
      <svg
        className="dp-btn ty-btn"
        height="35"
        width="200"
        viewBox="25 2 100 35 "
      >
        <a href="/">
          <path d="M4.5 0H198L186.5 42H4.5V0Z" fill="#f0b95c" />
          <text
            x="96"
            y="22"
            fill="White"
            text-anchor="middle"
            alignment-baseline="middle"
          >
            Home
          </text>
        </a>
      </svg>
    </div>
  );
};

export default Thankyou;
