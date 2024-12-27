import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./crypto.css";
import { useNavigate } from "react-router-dom";
import im from "../Images HTML/logo.png";

function NavbarP() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="navd fixed-top ">
        <Container fluid>
          <Navbar.Brand id="listitems">
            <Link to="/" id="listitems"></Link>
          </Navbar.Brand>
          <Image src={im} id="logo" onClick={() => navigate("/")} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" id="listitems">
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/servicesp" id="listitems">
                  PRICES
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/newsp" id="listitems">
                  {" "}
                  NEWS{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/aboutp" id="listitems">
                  ABOUT US{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contactp" id="listitems">
                  {" "}
                  DETAILS{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/roadmap" id="listitems">
                  PARTNERS{" "}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/market" id="listitems">
                  {" "}
                  UPDATES & PRODU{" "}
                </Link>
              </Nav.Link>

              <Button onClick={() => navigate("/loginp")} className="mx-2">
                Login
              </Button>
              <Button onClick={() => navigate("/regp")}>Register</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /> <br /> <br /> <br />
    </>
  );
}
export default NavbarP;
