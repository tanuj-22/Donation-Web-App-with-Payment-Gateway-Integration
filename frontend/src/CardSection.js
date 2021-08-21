import React from "react";
import "./HomePage.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import useHover from "./use-hover";

const CardSection = () => {
  const [hoverRef, isHovered] = useHover();
  const [hoverRef2, isHovered2] = useHover();
  const [hoverRef3, isHovered3] = useHover();
  return (
    <Container
      id="events"
      fluid
      className="justify-content-center card-section-container"
    >
      <Row>
        <Col sm className="justify-content-center">
          <Card
            className="card1"
            style={{ alignItems: "center", borderWidth: "0" }}
          >
            <Card.Img
              className="card-section-container-cardimg"
              style={{ minWidth: "200px" }}
              variant="top"
              ref={hoverRef}
              src={
                isHovered
                  ? "images/svgfiles/card11.png"
                  : "images/svgfiles/card1.png"
              }
            />
          </Card>
        </Col>
        <Col sm className="justify-content-center">
          <Card
            className="card2"
            style={{ alignItems: "center", borderWidth: "0" }}
          >
            <Card.Img
              className="card-section-container-cardimg"
              style={{ minWidth: "200px" }}
              variant="top"
              ref={hoverRef2}
              src={
                isHovered2
                  ? "images/svgfiles/card21.png"
                  : "images/svgfiles/card2.png"
              }
            />
          </Card>
        </Col>
        <Col sm className="justify-content-center">
          <Card
            className="card3"
            style={{ alignItems: "center", borderWidth: "0" }}
          >
            <Card.Img
              className="card-section-container-cardimg"
              style={{ minWidth: "200px" }}
              variant="top"
              ref={hoverRef3}
              src={
                isHovered3
                  ? "images/svgfiles/card31.png"
                  : "images/svgfiles/card3.png"
              }
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;
