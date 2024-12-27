import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./crypto.css";
import im1 from "../Images HTML/cryptocomfooterlogo.svg";
import im2 from "../Images HTML/qrcrypto.webp";
import im3 from "../Images HTML/AICPA.webp";
import im4 from "../Images HTML/SGS27701.webp";
import im5 from "../Images HTML/PCI.webp";

function FooterP() {
  return (
    <div>
      <Container fluid className="my-5 ">
        <Row>
          <Col xs={12} md={4} lg={2}>
            <div className="footerlogo">
              <img src={im1} alt="" />
            </div>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <div className="feat">
              <h4>Features</h4>
              <p>
                <a href="https://crypto.com/app">Buy and Sell</a>
              </p>
              <p>
                <a href="https://crypto.com/earn">Crypto Earn</a>
              </p>
              <p>
                <a href="https://crypto.com/staking">On-chain Staking</a>
              </p>
              <p>
                <a href="https://crypto.com/pay">Crypto.com Pay</a>
              </p>
              <p>
                <a href="https://crypto.com/pay-merchant">Pay for Business</a>
              </p>
              <p>
                <a href="https://crypto.com/exchange/trade/BTC_USD">
                  Margin Trading
                </a>
              </p>
              <p>
                <a href="https://crypto.com/exchange/trade/BTCUSD-PERP">
                  Derivatives Trading
                </a>
              </p>
              <p>
                <a href="hhttps://crypto.com/exchange/supercharger">
                  Supercharger
                </a>
              </p>
              <p>
                <a href="https://crypto.com/exchange/trading-arena">
                  Trading Arena
                </a>
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <div className="learn">
              <h4>Learn</h4>
              <p>
                <a href="https://crypto.com/university">University</a>
              </p>
              <p>
                <a href="https://crypto.com/research">Research & Analysis</a>
              </p>

              <p>
                <a href="https://crypto.com/glossary">Glossary</a>
              </p>
              <p>
                <a href="https://crypto.com/bitcoin">Bitcoin</a>
              </p>
              <p>
                <a href="https://crypto.com/university/ethereum-vs-ethereum-classic">
                  What is Ethereum?
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/what-is-blockchain-consensus">
                  What is Blockchain?
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/how-to-buy-bitcoin">
                  How to buy Bitcoin?{" "}
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/how-to-buy-ethereum">
                  How to buy Ethereum?
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/how-to-buy-bitcoin-cryptocurrencies">
                  How to buy Crypto?{" "}
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/what-is-cryptocurrency">
                  What is Crypto?{" "}
                </a>
              </p>
              <p>
                <a href="https://crypto.com/university/decentralised-finance-defi-intro">
                  What is DeFi?
                </a>
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <div className="news">
              <h4>News</h4>
              <p>
                <a href="https://crypto.com/trending">What's Trending</a>
              </p>
              <p>
                <a href="https://crypto.com/market-updates">Market Updates</a>
              </p>
              <p>
                <a href="https://crypto.com/product-news">Product News</a>
              </p>
              <p>
                <a href="https://crypto.com/company-news">Company News</a>
              </p>
              <p>
                <a href="https://crypto.com/events">Events</a>
              </p>

              <h4>Prices</h4>
              <p>
                <a href="https://crypto.com/price">Crypto Prices </a>
              </p>
              <p>
                <a href="https://crypto.com/price/bitcoin">Bitcoin Price </a>
              </p>
              <p>
                <a href="https://crypto.com/price/ethereum">Ethereum Price </a>
              </p>
              <p>
                <a href="https://crypto.com/price/widget">Site Widgets </a>
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <div className="comp">
              <h4>Company</h4>
              <p>
                <a href="https://crypto.com/about">About Us</a>
              </p>
              <p>
                <a href="https://crypto.com/partners">Partners</a>
              </p>
              <p>
                <a href="https://crypto.com/security">Security</a>
              </p>
              <p>
                <a href="https://crypto.com/proof-of-reserves">
                  Proof of Reserves
                </a>
              </p>
              <p>
                <a href="https://crypto.com/company-news/crypto-coms-climate-commitment-2">
                  Climate
                </a>
              </p>
              <p>
                <a href="https://crypto.com/capital">Capital</a>
              </p>
              <p>
                <a href="https://crypto.com/affiliate">Affiliate</a>
              </p>
              <p>
                <a href="https://crypto.com/careers">Careers</a>
              </p>
              <p>
                <a href="https://crypto.com/listing">Listing</a>
              </p>
              <p>
                <a href="https://help.crypto.com/en">Support</a>
              </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={2}>
            <div className="qr">
              <h4>Get started with crypto</h4>
              <div className="qrnew">
                <img src={im2} alt="" id="qrimg" />
                <h6>Scan to Download</h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="footcontent">
              <hr />
              <p>
                The purpose of this website is solely to display information
                regarding the products and services available on the Crypto.com
                App. It is not intended to offer access to any of such products
                and services. You may obtain access to such products and
                services on the Crypto.com App.
              </p>
              <img src={im3} alt="" height={"40px"} className="mx-3" />
              <img src={im4} alt="" height={"40px"} className="mx-3" />
              <img src={im4} alt="" height={"40px"} className="mx-3" />
              <img src={im5} alt="" height={"40px"} className="mx-3" />
              <hr />
              <p>Copyright © 2018 - 2024 Crypto.com. All rights reserved.</p>
              <div className="links">
                <p>
                  <a href="https://crypto.com/privacy/global/html">
                    Privacy Notice
                  </a>{" "}
                  |
                </p>
                <p>
                  <a href="https://status.crypto.com/">Status</a> |
                </p>
                <p>
                  <a href="https://status.crypto.com/">Cookie Preferences</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterP;
