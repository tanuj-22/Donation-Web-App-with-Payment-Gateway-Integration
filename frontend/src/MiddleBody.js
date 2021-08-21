import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import rectangle17 from "./rectangle17.svg";

const MiddleBody = () => {
  return (
    <Container
      id="about"
      bg="dark"
      className="boot-container"
      style={{ margin: "0px" }}
    >
      <Row>
        <Col sm={4}>
          <div
            className="MidBody"
            style={{
              background: `url(${rectangle17})`,
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="mid-left">Hunger is stalking the globe</h1>
        </Col>
        <Col
          lg={8}
          style={{ margin: "0px", padding: "10px", paddingTop: "30px" }}
        >
          <Row style={{ margin: "0px", position: "relative", left: "50px" }}>
            <Col md={4}>
              <img
                className="mid-right-img"
                src="images/svgfiles/image24.png"
                alt="video-text"
              />
            </Col>
            <Col md={8} style={{ justifyContent: "center", paddingLeft: "2%" }}>
              <div className="mid-right-font">
                <h2>We are here to support you every step of the way.</h2>
                <h3>Watch us how we take care of everyone</h3>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MiddleBody;
