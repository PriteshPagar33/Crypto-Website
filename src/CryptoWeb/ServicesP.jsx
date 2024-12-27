import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import MySVGIcon from "./svgs/MySVGIcon.svg";
import tet from "./svgs/Teth.svg";
import eth from "./svgs/Eth.svg";
import bnb from "./svgs/Bnb.svg";
import sol from "./svgs/Sol.svg";
import xrp from "./svgs/Xrp.svg";
import usd from "./svgs/Usd.svg";
import ada from "./svgs/Ada.svg";
import doge from "./svgs/Doge.svg";
import avax from "./svgs/Avax.svg";
import polk from "./svgs/Polk.svg";
import ton from "./svgs/Ton.svg";

function ServicesP() {
  const abc = [
    {
      sr: "1",
      imgs: "https://static.crypto.com/token/icons/bitcoin/color_icon.png",
      name: "Bitcoin  BTC",
      price: "$71,761.51",
      vol: "$63.34 B",
      market: "$1,410.97 B",
      chart: MySVGIcon,
    },
    {
      sr: "2",
      imgs: "https://static.crypto.com/token/icons/ethereum/color_icon.png",
      name: "Ethereum  ETH",
      price: " $4,051.64 ",
      vol: "$27.89 B",
      market: "$486.52. B",
      chart: eth,
    },
    {
      sr: "3",
      imgs: "https://static.crypto.com/token/icons/tether/color_icon.png",
      name: "TETHER  TTH",
      price: "$1.00",
      vol: "$115.94 B",
      market: "$102.57 B",
      chart: tet,
    },
    {
      sr: "4",
      imgs: "https://static.crypto.com/token/icons/bnb/color_icon.png",
      name: "BNB",
      price: "$540.39",
      vol: "$3.68 B",
      market: "$80.75 B",
      chart: ada,
    },
    {
      sr: "5",
      imgs: "https://static.crypto.com/token/icons/solana/color_icon.png",
      name: "Salona SOL",
      price: "$153.77 ",
      vol: "$5.52 B",
      market: "$68.12 B",
      chart: sol,
    },
    {
      sr: "6",
      imgs: "https://static.crypto.com/token/icons/xrp/color_icon.png",
      name: "XRP ",
      price: "$0.6949",
      vol: "$7.19 B",
      market: "$38.05 B",
      chart: xrp,
    },
    {
      sr: "7",
      imgs: "https://static.crypto.com/token/icons/usd-coin/color_icon.png",
      name: "USD Coin ",
      price: "$0.9992",
      vol: "$11.84 B",
      market: "$30.45 B",
      chart: usd,
    },
    {
      sr: "8",
      imgs: "https://static.crypto.com/token/icons/cardano/color_icon.png",
      name: "Cardona ADA ",
      price: "$0.7649 ",
      vol: "$1.32 B",
      market: "$27.19 B",
      chart: ada,
    },
    {
      sr: "9",
      imgs: "https://static.crypto.com/token/icons/dogecoin/color_icon.png",
      name: "Dogecoin DOGE",
      price: "$0.1744",
      vol: "$2.89 B",
      market: "$25.01 B",
      chart: doge,
    },
    {
      sr: "10",
      imgs: "https://static.crypto.com/token/icons/shiba-inu/color_icon.png",
      name: "Shiba INU SHIB ",
      price: "$0.0333232 ",
      vol: "$2.34 B",
      market: "$19.51 B",
      chart: doge,
    },
    {
      sr: "11",
      imgs: "https://static.crypto.com/token/icons/avalanche/color_icon.png",
      name: "Avalanche AVAX ",
      price: "$47.74 ",
      vol: "$1.96 B",
      market: "$17.96 B",
      chart: avax,
    },
    {
      sr: "12",
      imgs: "https://static.crypto.com/token/icons/polkadot-new/color_icon.png",
      name: "Polkodat  DOT ",
      price: "$10.63 ",
      vol: "$664.62 M",
      market: "$13.68 B",
      chart: polk,
    },
    {
      sr: "13",
      imgs: "https://static.crypto.com/token/icons/toncoin/color_icon.png",
      name: "Toncoin  TON ",
      price: "$3.57 ",
      vol: "$357.64 M",
      market: "$12.39 B",
      chart: ton,
    },
    {
      sr: "14",
      imgs: "https://static.crypto.com/token/icons/chainlink/color_icon.png",
      name: "Chainlink  LINK ",
      price: "$20.62 ",
      vol: "$769.39 M",
      market: "$12.1 B",
      chart: ton,
    },
    {
      sr: "15",
      imgs: "https://static.crypto.com/token/icons/polygon/color_icon.png",
      name: "Polygon  MATIC ",
      price: "$1.19 ",
      vol: "$740.78 M",
      market: "$11.82 B",
      chart: eth,
    },
    {
      sr: "16",
      imgs: "https://static.crypto.com/token/icons/wrapped-bitcoin/color_icon.png",
      name: "Wrapped Bitcoin WBTC ",
      price: "$72,060.77 ",
      vol: "$538.38 M",
      market: "$11.74 B",
      chart: tet,
    },
    {
      sr: "17",
      imgs: "https://static.crypto.com/token/icons/tron/color_icon.png",
      name: "TRON TRX ",
      price: "$0.1327 ",
      vol: "$430.78 M",
      market: "$11.67 B",
      chart: bnb,
    },
    {
      sr: "18",
      imgs: "https://static.crypto.com/token/icons/uniswap/color_icon.png",
      name: "UNISWAP UNI ",
      price: "$14.12 ",
      vol: "$267.46 M",
      market: "$8.46 B",
      chart: sol,
    },
    {
      sr: "19",
      imgs: "https://static.crypto.com/token/icons/bitcoin-cash/color_icon.png",
      name: "Bitcoin Cash BCH ",
      price: "$428.86 ",
      vol: "$651.34 M",
      market: "$8.43 B",
      chart: xrp,
    },
    {
      sr: "20",
      imgs: "https://static.crypto.com/token/icons/near-protocol/color_icon.png",
      name: "NEAR Protocol  NEAR ",
      price: "$7.18 ",
      vol: "$907.95 M",
      market: "$7.5 B",
      chart: usd,
    },
    {
      sr: "21",
      imgs: "https://static.crypto.com/token/icons/litecoin/color_icon.png",
      name: "Litecoin  LTC ",
      price: "$98.86 ",
      vol: "$1.57 B",
      market: "$7.35 B",
      chart: ada,
    },
    {
      sr: "22",
      imgs: "https://static.crypto.com/token/icons/internet-computer/color_icon.png",
      name: "Internet Computer ICP ",
      price: "$14.41 ",
      vol: "$263.39 B",
      market: "$6.63 B",
      chart: doge,
    },
    {
      sr: "23",
      imgs: "https://static.crypto.com/token/icons/filecoin/color_icon.png",
      name: "Filecoin FIL ",
      price: "$10.81 ",
      vol: "$583.87 B",
      market: "$5.56 B",
      chart: avax,
    },
    {
      sr: "24",
      imgs: "https://static.crypto.com/token/icons/unus-sed-leo/color_icon.png",
      name: "UNUS SED LEO ",
      price: "$5.82 ",
      vol: "$1.16 M",
      market: "$5.39 B",
      chart: polk,
    },
    {
      sr: "25",
      imgs: "https://static.crypto.com/token/icons/multi-collateral-dai/color_icon.png",
      name: "DAI ",
      price: "$0.9989 ",
      vol: "$695.09 M",
      market: "$5.34 B",
      chart: ton,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Slower transition speed between slides
    autoplay: true,
    autoplaySpeed: 2000, // Longer time before the next slide appears
    slidesToShow: 4,
    slidesToScroll: 1, // Scroll one slide at a time for better readability
    cssEase: "ease-in-out", // Smooth easing effect

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <div>
          <h3>Top Movers</h3>
          <div className="slider-container my-5">
            <Slider {...settings}>
              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/acala/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">Acala Token ACA</p>
                  <h5 id="hro">$0.01354</h5>
                  <img src={tet} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/limewire/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">Limeware LMWR</p>
                  <h5 id="hro">$0.8588</h5>
                  <img src={sol} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/rally/color_icon.png "
                    id="ll"
                    alt=""
                  />
                  <p id="para">Rally RLY</p>
                  <h5 id="hro">$0.01614</h5>
                  <img src={doge} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/boba-network/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">Boba Network BOBA</p>
                  <h5 id="hro">$0.07340</h5>
                  <img src={MySVGIcon} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/injective-protocol/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">Injective INJ</p>
                  <h5 id="hro">$48.20</h5>
                  <img src={polk} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons_v2/terra-virtua-kolect/2640-1701766994929.jpg"
                    id="ll"
                    alt=""
                  />
                  <p id="para"> Vanar Chain VANARY</p>
                  <h5 id="hro">$0.02342</h5>
                  <img src={ton} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/pocket-network/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">Pocket Network POKT</p>
                  <h5 id="hro">$0.01354</h5>
                  <img src={tet} alt="" id="grap" />
                </div>
              </div>

              <div class="carousel-card">
                <div id="tm1" class="corner top-left">
                  <img
                    src="https://static.crypto.com/token/icons/acala/color_icon.png"
                    id="ll"
                    alt=""
                  />
                  <p id="para">BENQUI QI</p>
                  <h5 id="hro">$0.0314</h5>
                  <img src={xrp} alt="" id="grap" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <h1 style={{ color: "aqua", textAlign: "center" }}>Crypto Prices</h1>
        <Col lg={12}>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>24th VOLUME</th>
                  <th>MARKET</th>
                  <th>7D Chart</th>
                </tr>
              </thead>
              <tbody>
                {abc.map((a, index) => (
                  <tr key={index}>
                    <td>{a.sr}</td>
                    <td>
                      <img src={a.imgs} alt="" height="20px" width="20px" />
                      {a.name}
                    </td>
                    <td>{a.price}</td>
                    <td>{a.vol}</td>
                    <td>{a.market}</td>
                    <td>
                      <img src={a.chart} alt="Chart" className="chart-image" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesP;
