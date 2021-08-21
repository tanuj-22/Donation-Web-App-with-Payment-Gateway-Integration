import React from "react";
import "./FormPage.css";
import { Col, Container, Row } from "react-bootstrap";
import useSignUpForm from "./CustomHooks";
import displayRazorpay from "./razorpay/displayRazorpay";

const DonationPage = () => {
  const paynow = () => {
    console.log(inputs);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(paynow);
  const handleClick = async () => {
    console.log(inputs);
    displayRazorpay(inputs);
  };
  return (
    <div>
      <Container fluid className="title-page-bar">
        <Row
          className="justify-content-md-center dp-page"
          style={{ alignItems: "center", margin: "auto" }}
        >
          <Col>
            <div>
              <p className="title-tag">Donation</p>
              <svg className="dp-btn" height="35" width="200">
                <path d="M4.5 0H198L186.5 42H4.5V0Z" fill="#f0b95c" />
                <text
                  x="96"
                  y="22"
                  fill="White"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Home • Donation
                </text>
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2 className="heading-dp">Enter Your Donation</h2>
          </Col>
        </Row>
      </Container>
      <form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col xl={9} style={{ position: "relative", textAlign: "left" }}>
              {/* <Form>
              <Row>
                
                
                
              </Row>
              <Row>Personal Details</Row>
              <Row>Email</Row>
              <Row>Phone Number</Row>
              <Row>
                <Col>First Name</Col>
                <Col>Last Name</Col>
              </Row>
            </Form> */}
              {/* <FormPage /> */}
              <Row>
                <label>
                  <svg
                    width="760"
                    height="158"
                    viewBox="0 0 760 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="amt-input"
                  >
                    <rect width="760" height="158" fill="#F1B95C" />
                  </svg>
                  <h1>INR</h1>
                  <input
                    type="text"
                    name="Amount"
                    id="amt"
                    placeholder="00."
                    value={inputs.amount}
                    onChange={handleInputChange}
                  />
                </label>
              </Row>
              <Row>
                <h2 className="heading-dp personal-det">Personal Info</h2>
              </Row>
              <Row>
                <label className="email-input">
                  <svg
                    width="760"
                    height="78"
                    viewBox="0 0 760 78"
                    className="email-svg mailid"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="760" height="78" fill="#486A7D" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    id="email-id"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                </label>
              </Row>
              <Row style={{ paddingTop: "32px" }}>
                <label className="email-input number-input">
                  <svg
                    width="760"
                    height="78"
                    viewBox="0 0 760 78"
                    className="email-svg phone-svg"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="760" height="78" fill="#486A7D" />
                  </svg>
                  <input
                    type="tel"
                    name="contact"
                    id="email-id"
                    placeholder="Phone Number"
                    value={inputs.contact}
                    onChange={handleInputChange}
                  />
                </label>
              </Row>
              <Row style={{ paddingTop: "32px", maxWidth: "790px" }}>
                <Col lg={6} style={{ paddingBottom: "10px" }}>
                  <label className="email-input number-input">
                    <svg
                      width="366"
                      height="78"
                      viewBox="0 0 366 78"
                      className="email-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="366" height="78" fill="#486A7D" />
                    </svg>
                    <input
                      type="text"
                      name="name"
                      id="email-id"
                      placeholder="Name"
                      value={inputs.name}
                      onChange={handleInputChange}
                    />
                  </label>
                </Col>
                <Col lg={6} style={{ paddingBottom: "10px" }}>
                  <label className="email-input number-input">
                    <svg
                      width="366"
                      height="78"
                      viewBox="0 0 366 78"
                      className="email-svg"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="366" height="78" fill="#486A7D" />
                    </svg>
                    <input
                      type="text"
                      name="message"
                      id="email-id"
                      placeholder="Message"
                      value={inputs.message}
                      onChange={handleInputChange}
                    />
                  </label>
                </Col>
              </Row>
            </Col>

            <Col md={3}>
              <img
                src={"images/svgfiles/chidpic.png"}
                style={{
                  height: "450px",
                  objectFit: "contain",
                  zIndex: "-1",
                }}
                alt=""
              />
            </Col>
          </Row>
          <Row style={{ padding: "15px 0px 55px 0px", textAlign: "left" }}>
            <label className="hide-submit1">
              <svg
                className="svg-button homepage-btn submit-btn"
                height="50"
                width="200"
              >
                <path d="M4.5 0H198L186.5 42H4.5V0Z" fill="#f0b95c" />
                <text
                  x="96"
                  y="22"
                  fill="Black"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Submit Now
                </text>
              </svg>
              <input
                type="submit"
                name="donation-submit"
                className="sub-btn-hide"
                onClick={handleClick}
              />
            </label>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default DonationPage;
