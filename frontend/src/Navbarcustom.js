import React from 'react';
import "./Navbarcustom.css";
import { Navbar,Container,Nav } from 'react-bootstrap';
const Navbarcustom = () => {
    return (
        <div >
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            
    <Container>
      <Navbar.Brand href="/">
        <div className="Navlogo">
        <img alt=""
          src={'images/svgfiles/Group-2.svg'}
          width="69"
          height="39"
          style= {{margin : "0px",padding:"0px"}}
          className="d-inline-block align-top" ></img>
            <img alt=""
          src={'images/svgfiles/image4.svg'}
          width="120"
          height="40"
          style= {{margin : "0px",padding:"0px"}}
          className="d-inline-block align-top"></img>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className = "me-auto btn-svgfinal">
      {/* <div >
      <svg  className="svg-btn " height="50" width="200">
         <Nav.Link href = '#donate'>
          <path onClick={console.log("clicked")} className="svg-path finalsvg" d="M4.5 0H198L186.5 42H4.5V0Z" />
          <text className="svg-text" x="96"
          y="22"
          fill="Black"
          text-anchor="middle"
          alignment-baseline="middle">
      
      Donate Now
    </text>
    </Nav.Link>
</svg></div> */}
<svg className="svg-button" height="50" width="200">
        <Nav.Link href="/donate">
            <path
              d="M4.5 0H198L186.5 42H4.5V0Z"
              fill="#f0b95c"
            />
            <text
              
              x="96"
              y="22"
              fill="Black"
              text-anchor="middle"
              alignment-baseline="middle"
              
            >
              Donate Now
            </text>
            </Nav.Link>
        </svg>
      </Nav>
    <Nav className=" rightNav">
      <Nav.Link className="rightnavcomp" href="/">Home</Nav.Link>
      <Nav.Link className="rightnavcomp" href="/#about">About</Nav.Link>
      <Nav.Link className="rightnavcomp" href="/#events">Events</Nav.Link>
      <Nav.Link className="rightnavcomp" href="/#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
     
  
  
    </Container>
  </Navbar>
    </div>
    );
}

export default Navbarcustom;

