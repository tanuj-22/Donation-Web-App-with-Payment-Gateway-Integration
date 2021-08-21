import React from "react";
import { Container } from "react-bootstrap";

const FooterSection = () => {
  return (
    <Container
      fluid
      className="footerdiv"
      style={{ padding: "0px", backgroundColor: "#272525" }}
    >
      <img className="footer-img" src="images/svgfiles/footerimg.png" alt="" />

      <svg className="svg-button footer-btn" height="50" width="200">
        <a href="/donate">
          <path d="M4.5 0H198L186.5 42H4.5V0Z" fill="#f0b95c" />
          <text
            x="96"
            y="22"
            fill="Black"
            text-anchor="middle"
            alignment-baseline="middle"
          >
            Donate Now
          </text>
        </a>
      </svg>
      <img
        id="contact"
        className="footer-img"
        src="images/svgfiles/footerimg2.png"
        alt=""
      />
    </Container>
  );
};

export default FooterSection;
