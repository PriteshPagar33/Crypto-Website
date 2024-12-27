import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Marketupdates() {
  const [showFullNews, setShowFullNews] = useState(false);

  const [showFullNews1, setShowFullNews1] = useState(false);
  const [showFullNews2, setShowFullNews2] = useState(false);
  const [showFullNews3, setShowFullNews3] = useState(false);
  const [showFullNews4, setShowFullNews4] = useState(false);
  const [showFullNews5, setShowFullNews5] = useState(false);

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
  const toggleFullNews5 = () => {
    setShowFullNews5(!showFullNews5);
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
            TRENDING MARKET UPDATES
          </h1>
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2022/11/Template_Weekly-Newsletters-03.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>MARKET UPDATES / DEFI - MAR 13, 2024</span>
            <h4>
              DeFi & L1L2 Weekly – 💫 Community <br /> Gears Up For Ethereum
              Dencun <br />
              Upgrade
            </h4>
            {showFullNews && (
              <>
                <p>
                  Community gears up for Ethereum Dencun upgrade. BRC-20 creator
                  Domo addresses governance issues with UniSat partnership{" "}
                </p>
                <p>
                  Domo, the pseudonymous creator of the BRC-20 token standard,
                  announced that his organisation, Layer 1 Foundation (L1F),
                  will partner with Bitcoin infrastructure company UniSat. They
                  will serve as BRC-20’s lead maintainers, addressing governance
                  issues within the ecosystem. The BRC-20 token standard
                  operates on the Ordinals Protocol, enabling the trading of
                  digital assets other than BTC on the Bitcoin network. It has
                  sparked a broader discussion about the evolution and
                  governance of BRC-20 within the community, especially when
                  Unisat adopted the Ordinals Jubilee upgrade at the start of
                  2024 that aims to address the issue of “cursed inscriptions”
                  by reclassifying them with positive numbers, enhancing
                  protocol development and governance. This was then opposed by
                  Domo, citing that the new tech might fragment the BRC-20
                  ecosystem. The conflict has since divided the crypto
                  community.
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
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2022/11/Template_Weekly-Newsletters-04.png"
              alt=""
              height={"350px"}
            />
          </Col>

          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>/ MARKET PULSE - MAR 11, 2024</span>
            <h4>
              Crypto Market Pulse Weekly – 📈 BTC <br />
              Reached ATH $71,000 and ETH Retook $4,000
            </h4>
            {showFullNews1 && (
              <>
                <p>
                  BTC reached a new ATH of $71,000 and ETH retook $4,000.
                  Crypto.com partners with Altava Group to expand the Web3
                  ecosystem.
                </p>
                <p>
                  Last week’s crypto market price and volume indices were up
                  +11.34% and +29.09%, respectively, while the volatility index
                  fell by -28.38%. The price index has been growing successively
                  for seven weeks, demonstrating strong momentum in the market.
                  Last week’s bull run was likely driven by a combination of
                  news regarding higher-than-expected US unemployment data and
                  the Bitcoin halving event. Bitcoin reached an all-time high of
                  US$70,000 on 8 March. This surge came after the release of US
                  unemployment data. The unemployment rate of 3.9% exceeded
                  expectations of 3.7%. Higher-than-expected readings are
                  typically seen as negative or bearish for the USD, indicating
                  a decrease in value. This led to speculation that inflationary
                  pressures were diminishing because of the implementation of
                  restrictive economic policies. Moreover, BTC crossed $71,000
                  and reached a new all-time high on 11 March.
                </p>
              </>
            )}
            {!showFullNews && (
              <h6>
                {" "}
                Crypto Market Pulse Weekly – 📈 BTC <br />
                Reached ATH $71,000 and ETH Retook $4,000
              </h6>
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
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2023/01/NFT-and-Gaming-CH-Banner.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>MARKET UPDATES / GAMEFI - MAR 08, 2024</span>
            <h4>
              NFT & Blockchain Gaming Weekly – 📈 The NFT Market Surged by 18%
              in Sales Volume
            </h4>
            {showFullNews2 && (
              <>
                <p>
                  Latest Regulatory Approval Enables Crypto.com to Broaden
                  Product Offering in the UK
                </p>
                <p>
                  New Project Spotlight NFT Collectibles [Live] Verses of
                  Forgotten Girls CSLIM is an artist who crafts new worlds with
                  the help of AI. ‘Verses of Forgotten Girls’ tells the story of
                  a girl living on Earth-92 in 4,202 AD. A fifth-generation
                  immigrant from our Earth, she began having mysterious and
                  vivid dreams about being other people. Collectors have the
                  chance to win physical photobooks and bonus NFTs. Prepare to
                  party at Zinkete’s ‘Sound of Saturn Festival 3024’ alongside
                  the other residents of this universe. Saturn and its moons
                  serve as the stage for the many performers who will be
                  present. Collectors have the opportunity to enjoy special NFT
                  airdrops and receive physical merchandise, including hoodies
                  and caps.
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
        <h1
          style={{
            color: "#0058AA",
            fontSize: "24px",
            marginTop: "50px",
            marginBottom: "40px",
          }}
        >
          TRENDING MARKET PRODUCTS
        </h1>
        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=600,quality=75/wp_media/2024/03/1200x728-CH.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>PRODUCT / CARD - MAR 07, 2024</span>
            <h4>
              Get Free Apple Gear With Your Crypto.com <br />
              Visa Card
            </h4>
            {showFullNews3 && (
              <>
                <p>
                  Apply for or upgrade your Card to get up to 100% rebate on
                  Apple gear — limited time only!
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
                Apply for or upgrade your Card to get up to 100% rebate on Apple
                gear — limited time only!
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
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2024/03/ETH-Network-Upgrade_Content-hub.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>PRODUCT / APP - MAR 11, 2024</span>
            <h4>
              Crypto.com Will Be Supporting the Ethereum <br /> Network Upgrade
            </h4>
            {showFullNews4 && (
              <>
                <p>
                  Deposits and withdrawals of selected tokens will be
                  unavailable on 13 March 2024
                </p>
                <p>
                  Please be informed that deposits and withdrawals of tokens on
                  the Ethereum, Arbitrum One and Arbitrum Nova, Optimism, zkSync
                  Era, Starknet, Metis, and Polygon PoS networks will be
                  temporarily suspended in the Crypto.com App and Exchange on 13
                  March 2024, 13:25 UTC. This suspension is to facilitate
                  Ethereum’s latest Dencun network upgrade. The trading of ETH,
                  OP and MATIC tokens on the Crypto.com App and Exchange will
                  not be impacted. Deposits and withdrawals of tokens on the
                  aforementioned networks will resume once the upgraded Ethereum
                  has stabilized. No further announcements will be made.
                </p>
              </>
            )}
            {!showFullNews4 && (
              <h6>
                Deposits and withdrawals of selected tokens will be unavailable
                on 13 March 2024
              </h6>
            )}
            <button className="button" onClick={toggleFullNews4}>
              <span className="button-content">
                {showFullNews4 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2024/03/COQ-App-Listing-T-D-Enabled_content-hub.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>PRODUCT / APP - MAR 09, 2024</span>
            <h4>Crypto.com App Lists Coq Inu (COQ)</h4>
            {showFullNews5 && (
              <>
                <p>
                  Purchase COQ easily with USD, EUR, GBP, and 20+ fiat
                  currencies{" "}
                </p>
                <p>
                  Coq Inu (COQ) is now listed in the Crypto.com App, joining the
                  growing list of 250+ supported cryptocurrencies and
                  stablecoins, including Bitcoin (BTC), Ether (ETH), Polkadot
                  (DOT), Chainlink (LINK), VeChain (VET), USD Coin (USDC), and
                  Cronos (CRO). Coq Inu is the #1 meme coin on the Avalanche
                  C-Chain. Following the trend of animal-inspired cryptos, COQ
                  is a chicken-themed token founded by members of the community.
                  Crypto.com App users can now purchase COQ easily with USD,
                  EUR, GBP, and 20+ fiat currencies, and spend it at over 80
                  million merchants globally using the Crypto.com Visa Card.
                </p>
              </>
            )}
            {!showFullNews5 && (
              <h6>
                Deposits and withdrawals of selected tokens will be unavailable
                on 13 March 2024
              </h6>
            )}
            <button className="button" onClick={toggleFullNews5}>
              <span className="button-content">
                {showFullNews4 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col lg={6} md={4} sm={12}>
            <img
              src="https://contenthub-static.crypto.com/cdn-cgi/image/width=800,quality=75/wp_media/2024/03/STRAX-Token-Split_Content-hub.png"
              alt=""
              height={"350px"}
            />
          </Col>
          <Col lg={6} md={4} sm={12} className="newsstory">
            <span>PRODUCT / APP - MAR 13, 2024</span>
            <h4>
              Crypto.com Will Be Supporting the Stratis <br /> (STRAX) Token
              Swap{" "}
            </h4>
            {showFullNews5 && (
              <>
                <p>
                  Trading, deposits, and withdrawals of STRAX will be suspended
                  on 20 March 2024{" "}
                </p>
                <p>
                  Please be informed that Crypto.com will support the Stratis
                  (STRAX) token swap. As a result, STRAX will be delisted from
                  the Crypto.com App on 20 March 2024, 1:00 UTC, and from the
                  Crypto.com Exchange on 20 March 2024, 2:00 UTC. Deposits, and
                  withdrawals of old STRAX on its native network will be
                  permanently removed and trading will be paused from 20 March
                  2024 onwards. You may incur a retrieval fee if deposits of
                  STRAX via its native network are made after 20 March.
                  Furthermore, fund retrieval may not be possible in some cases.
                  All Target Price Orders and Recurring Buys of STRAX after 20
                  March, 01:00 UTC, will be automatically terminated on the
                  Crypto.com App. All open STRAX orders for Spot trading will be
                  cancelled after 20 March, 02:00 UTC on the Crypto.com
                  Exchange. Deposits, and withdrawals of new STRAX will resume
                  at a later date via StratisEVM Chain only in the App and
                  Exchange.
                </p>
              </>
            )}
            {!showFullNews5 && (
              <h6>
                Deposits and withdrawals of selected tokens will be unavailable
                on 13 March 2024
              </h6>
            )}
            <button className="button" onClick={toggleFullNews5}>
              <span className="button-content">
                {showFullNews5 ? "Show Less" : "Read More"}
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Marketupdates;
