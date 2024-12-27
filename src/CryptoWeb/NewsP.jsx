import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function NewsP() {
  const [showFullNews, setShowFullNews] = useState(false);

  const [showFullNews1, setShowFullNews1] = useState(false);
  const [showFullNews2, setShowFullNews2] = useState(false);
  const [showFullNews3, setShowFullNews3] = useState(false);
  const [showFullNews4, setShowFullNews4] = useState(false);

  const toggleFullNews = () => {
    setShowFullNews(!showFullNews);
  };

  const toggleFullNews1 = () => {
    setShowFullNews1(!showFullNews1);
  };
  const toggleFullNews2 = () => {
    setShowFullNews2(!showFullNews2);
  };
  const toggleFullNews3 = () => {
    setShowFullNews3(!showFullNews3);
  };
  const toggleFullNews4 = () => {
    setShowFullNews4(!showFullNews4);
  };

  return (
    <div>
      <Container>
        <Row>
          <h1
            style={{
              color: "#0058AA",
              fontSize: "24px",
              marginTop: "50px",
              marginBottom: "40px",
            }}
          >
            TRENDING COMPANY STORIES
          </h1>
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2024/03/Altava-Group_2400x1456.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>COMPANY NEWS / PARTNERSHIPS - MAR 07, 2024</span>
            <h4>
              Crypto.com Partners with Digital Fashion Tech <br /> Company
              Altava Group to Expand Web3 <br /> Ecosystem
            </h4>
            {showFullNews && (
              <>
                <p>
                  Partnership to foster collaboration on the advancement of the
                  digital fashion ecosystem.
                </p>
                <p>
                  Seoul, March 7, 2024 – Crypto.com, trusted by more than 80
                  million customers worldwide and the industry leader in
                  regulatory compliance, security and privacy, has signed a
                  memorandum of understanding (MoU) with Altava Group, a
                  vertical AI fashion tech company delivering innovative virtual
                  experiences and products for major fashion brands from around
                  the world. The signing ceremony took place at Crypto.com Korea
                  yesterday. It was attended by Eric Anziani, President and
                  Chief Operating Officer of Crypto.com, and Andrew Junhoe Ku,
                  CEO of Altava Group.
                </p>
              </>
            )}
            {!showFullNews && (
              <h6>
                Partnership to foster collaboration on the advancement of the
                digital fashion ecosystem.
              </h6>
            )}
            <button className="button" onClick={toggleFullNews}>
              <span className="button-content">
                {showFullNews ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2024/03/image-96.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>COMPANY NEWS / PARTNERSHIPS - MAR 06, 2024</span>
            <h4>
              Crypto.com Appoints Ryan Fennelly as <br /> Head of OTC Trading
            </h4>
            {showFullNews1 && (
              <>
                <p>More OTC Offerings to Come for Crypto.com Exchange.</p>
                <p>
                  Singapore, March 6, 2024 – Crypto.com has appointed Ryan
                  Fennelly as Head of Over-The-Counter (OTC) Service for
                  Crypto.com Exchange. With a robust background in finance and
                  investment banking, Fennelly brings a wealth of expertise to
                  Crypto.com’s OTC trading operations. Ryan is a seasoned
                  quantitative trader and has accumulated extensive experience
                  in capital markets, with a specialisation in interest rate
                  trading. His career spans over eight years of trading interest
                  rates and five years leading the OTC EMEA desk at Kraken.
                  Fennelly’s academic credentials include a degree in Finance
                  and Investment Banking from the ICMA Centre, Henley Business
                  School at the University of Reading. “Ryan’s vision for the
                  Crypto.com Exchange OTC aligns perfectly with our goals for
                  expansion and innovation,” said Giuseppe Giuliani, Managing
                  Director of Crypto.com Exchange. “We are extremely excited to
                  take our OTC trading operations to the next level with his
                  expertise and additional product offerings.”
                </p>
              </>
            )}
            {!showFullNews && (
              <h6>More OTC Offerings to Come for Crypto.com Exchange.</h6>
            )}
            <button className="button" onClick={toggleFullNews1}>
              <span className="button-content">
                {showFullNews1 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2023/12/UK_LICENSE_2400x1456-1.jpg"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>COMPANY NEWS / MILESTONES - DEC 04, 2023</span>
            <h4>
              Crypto.com Receives Authorisation as an <br /> Electronic Money
              Institution from the United <br /> Kingdom’s Financial Conduct
              Authority
            </h4>
            {showFullNews2 && (
              <>
                <p>
                  Latest Regulatory Approval Enables Crypto.com to Broaden
                  Product Offering in the UK
                </p>
                <p>
                  London, December 4, 2023 – Crypto.com, trusted by more than 80
                  million customers worldwide and the industry leader in
                  regulatory compliance, security and privacy, announced today
                  that it has been authorised as an Electronic Money Institution
                  (EMI) by the UK’s Financial Conduct Authority (FCA). This
                  approval follows Crypto.com’s registration as a cryptoasset
                  business with the FCA in August 2022. With this EMI
                  authorisation, Crypto.com will offer a suite of UK-localised
                  e-money products as part of the robust FCA regime that aligns
                  with Crypto.com’s focus of ensuring the highest standards of
                  consumer protection. “The UK has and continues to be a hugely
                  important market for our business and the greater industry,”
                  said Kris Marszalek, CEO of Crypto.com. “We look forward to
                  continuing to collaborate with a global regulatory leader in
                  the FCA in our collective pursuit of responsible innovation
                  for crypto.”
                </p>
              </>
            )}
            {!showFullNews && (
              <h6>
                Latest Regulatory Approval Enables Crypto.com to Broaden Product
                Offering in the UK
              </h6>
            )}
            <button className="button" onClick={toggleFullNews2}>
              <span className="button-content">
                {showFullNews2 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2023/09/Youtube-Thumbnail_1200x728.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>COMPANY NEWS / - SEP 05, 2023</span>
            <h4>
              Loaded Lions: Mane City Launches on Cronos <br /> Chain
            </h4>
            {showFullNews3 && (
              <>
                <p>
                  Crypto.com’s Flagship NFT Collection Makes its First Foray
                  into Blockchain Gaming
                </p>
                <p>
                  Singapore — 5 September 2023 – Loaded Lions, the flagship NFT
                  collection of Crypto.com, has launched its first-ever game –
                  Loaded Lions: Mane City – on the Cronos chain. The launch
                  represents Crypto.com’s latest initiative to further deploy
                  its assets and infrastructure towards the gaming sector – a
                  key growth area within Web3 for the company as it explores new
                  use cases for crypto and blockchain technology. Developed in
                  close collaboration with Cronos Play’s SDK team, Loaded Lions:
                  Mane City is a tycoon simulation game where players design and
                  build their dream cities and mansions with gold and diamonds
                  generated from the in-game land that they own, alongside
                  businesses they build on them such as gyms, banks and music
                  stores.
                </p>
              </>
            )}
            {!showFullNews3 && (
              <h6>
                Crypto.com’s Flagship NFT Collection Makes its First Foray into
                Blockchain Gaming
              </h6>
            )}
            <button className="button" onClick={toggleFullNews3}>
              <span className="button-content">
                {showFullNews3 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2023/11/DUBAI-LICENSURE-UPDATE-1.jpg"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>COMPANY NEWS / NEWS - NOV 14, 2023</span>
            <h4>
              Crypto.com Granted Virtual Asset Service <br /> Provider Licence
              by Dubai’s Virtual Assets <br /> Regulatory Authority
            </h4>
            {showFullNews4 && (
              <>
                <p>
                  Licence is subject to fulfilment of pre-operating conditions
                  and qualifying for operational approval.
                </p>
                <p>
                  November 14, 2023, Dubai – Crypto.com announced today that its
                  Dubai entity, CRO DAX Middle East FZE, has been granted a
                  Virtual Assets Service Provider (VASP) Licence for specified
                  virtual asset service activities by Dubai’s Virtual Assets
                  Regulatory Authority (VARA). Crypto.com’s VASP Licence is
                  subject to the Company fully satisfying select conditions and
                  localisation requirements defined by VARA, and will be able to
                  commence operations thereafter subject to operational approval
                  notice from the regulator. Following operational approval, the
                  VASP Licence will allow Crypto.com to offer regulated virtual
                  asset service activities, including exchange services,
                  broker-dealer services, management and investment services,
                  and lending and borrowing services. These services will be
                  available to retail and institutional users in-market via the
                  Crypto.com App and Crypto.com Exchange.
                </p>
              </>
            )}
            {!showFullNews4 && (
              <h6>
                Licence is subject to fulfilment of pre-operating conditions and
                qualifying for operational approval.
              </h6>
            )}
            <button className="button" onClick={toggleFullNews4}>
              <span className="button-content">
                {showFullNews4 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsP;
