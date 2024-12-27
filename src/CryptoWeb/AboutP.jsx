import React from "react";
import im from "../Images HTML/cryptoabout.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoArrowRight } from "react-icons/go";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import v1 from "../Images HTML/ourpartners.mp4";

function AboutP() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="fade-up">
              <center>
                <h4>OUR VISION</h4>
                <h3>
                  Cryptocurrency in <br />
                  Every Wallet ™
                </h3>
                <img src={im} alt="" id="aboutimg" fluid />
                <br />
                <h4>OUR MISSION</h4>
                <h3>
                  Accelerate the world’s <br /> transition to <br />
                  cryptocurrency
                </h3>
              </center>
            </div>
          </Col>
          <Col lg={12} md={6} sm={12}>
            <div className="sky my-5  ">
              <h4>WHY IT MATTERS</h4>
              <h3>
                Powered by cryptocurrency, the <br />
                future of the internet: Web3 will be <br /> more fair and
                equitable, owned by <br />
                the builders, creators and users. <br />
                You. <br />
                <br /> We believe it is your basic right to <br /> control your
                money, data and <br />
                identity.{" "}
              </h3>
              <br />
              <button className="bt">
                <p>
                  Start the Journey <GoArrowRight />
                </p>
              </button>
            </div>
            <div className="video-container">
              <video autoPlay loop muted className="video">
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <h3>OUR PARTNERS</h3>
                <h2>
                  Reaching the next billion users with the world’s best partners
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutP;
