import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import im1 from "../Images HTML/Crypto Earth 1.png";
import { PiArrowCircleUpRightFill, PiQrCode } from "react-icons/pi";
import Accordion from "react-bootstrap/Accordion";

import im2 from "../Images HTML/alp3.webp";
import v1 from "../Images HTML/crypto.mp4";
import "./crypto.css";

function HomeP() {
  const abc = [
    {
      title: "What is crypto?",
      body: "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank .Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos. Many cryptocurrencies, like Bitcoin, are created through a process called mining, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called Proof of Work (PoW). Another consensus mechanism that has increased in popularity — as it is more energy efficient — is Proof of Stake (PoS). Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.",
    },
    {
      title: "What is Bitcoin?",
      body: "Bitcoin is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation. Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions. Bitcoin can be bought, sold, and exchanged on various cryptocurrency exchanges, and it can be used to purchase goods and services from merchants that accept Bitcoin as a form of payment. The supply of bitcoins is limited to 21 million units, and new bitcoins are created through mining, which involves using specialized computer hardware to solve complex mathematical equations. Bitcoin is known for its high volatility, and its value can fluctuate rapidly in response to market conditions, news events, and other factors. Many traders, including institutional investors, see Bitcoin as a store of value and a way to participate in the growing cryptocurrency ecosystem.",
    },
    {
      title: "How to buy crypto?",
      body: "To buy crypto, follow these general steps: Choose a crypto platform to use, like the Crypto.com Exchange or Crypto.com App. Create an account on the chosen platform by providing personal information and ID verification, also known as ‘Know Your Customer’ (KYC) procedures.Deposit fiat currency or another cryptocurrency into the newly created account. The Crypto.com App supports bank transfers, credit cards, debit cards, and cryptocurrency transfers to buy crypto, depending on region. Navigate to the ‘Buy’ section of the Crypto.com Exchange or App and select the crypto to buy. Enter the amount of cryptocurrency to buy and confirm the transaction. The crypto will be deposited into the account. From here, it can be transferred to other crypto wallets or converted back to fiat currency and paid out to a bank account.It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.",
    },
    {
      title: "Where to buy crypto?",
      body: "There are several ways to buy cryptocurrencies, including: Brokerage services: Crypto brokers allow users to simply buy and sell cryptocurrencies. A popular example is the Crypto.com App, trusted by over 80 million users. It is available at the Apple Store and on Google Play. Cryptocurrency exchanges: These are online platforms where users can buy, sell, and trade cryptocurrencies using fiat currency or other cryptocurrencies. They offer more complex functions compared to a crypto brokerage, adding trading instruments like crypto derivatives. The Crypto.com Exchange is an example of a popular crypto exchange.Peer-to-peer (P2P) marketplaces: These are platforms where buyers and sellers can directly trade cryptocurrencies without the involvement of a third-party exchange. This is also known as DeFi, short for decentralized finance. Multiple P2P crypto marketplaces can be accessed all in one app via the Crypto.com DeFi Wallet. It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet. ",
    },
    {
      title: "How to buy Bitcoin?",
      body: "Users can buy Bitcoin from a cryptocurrency exchange, a crypto brokerage service like the Crypto.com App, or a peer-to-peer (P2P) marketplace like those found in the Crypto.com DeFi Wallet. Here are some general steps to buying bitcoin from an exchange or brokerage service:      Choose a reputable cryptocurrency platform that supports Bitcoin trading. Popular options include the Crypto.com App and the Crypto.com Exchange. Create an account on the chosen platform and complete the KYC verification process, which may require providing personal identification documents.Fund an account using a bank transfer, credit/debit card, or other cryptocurrency, depending on region.Navigate to the ‘Buy’ section of the platform and select Bitcoin as the cryptocurrency to buy. Enter the amount of bitcoin to buy, or the amount of fiat or cryptocurrency to spend. Review the transaction details and confirm the purchase.Once the transaction is complete, the bitcoin will be deposited into the chosen account. From here, the funds can be transferred to other crypto wallets or converted back to fiat currency and paid out to a bank account.It is important to perform proper research and choose a reputable platform to buy cryptocurrencies. For instance, Crypto.com holds the highest security rating in the industry. In addition, it is advisable to store cryptocurrencies securely in a wallet like the Crypto.com App or Crypto.com DeFi Wallet.",
    },
    {
      title: "How to trade crypto?",
      body: "To trade cryptocurrency, follow these general steps:Choose a cryptocurrency exchange that supports trading. A popular option is the Crypto.com Exchange. Create an account on the chosen platform and perform ID verification, known as KYC (‘Know Your Customer’).Deposit funds into the newly created account using a supported payment method. The Crypto.com Exchange supports bank transfers and credit/debit cards. Navigate to the trading section of the platform and select the cryptocurrency pair to trade.Choose whether to buy or sell the cryptocurrency, and enter the amount to trade.Set the preferred price and order type. There are several types of orders, including market orders, limit orders, stop orders, and crypto options, which allow users to buy or sell at a specific price or under certain conditions.Submit the trade order and wait for it to be executed. Depending on market conditions, the trade may be filled immediately, or it may take time to be filled.Monitor trades and adjust strategies as necessary.Here is an introduction to trading on the Crypto.com Exchange.It is crucial to note that trading cryptocurrency carries risk, and it is important to trade only what you can afford to lose.",
    },
    {
      title: "How to earn crypto?",
      body: "There are several ways to earn cryptocurrency, including: Mining: Cryptocurrency mining involves using specialized computer hardware to solve complex mathematical equations that validate transactions on a blockchain network. Successful miners are rewarded with newly minted cryptocurrency for their efforts.Staking/Lockups: Staking and lockups involve holding or locking up a certain amount of cryptocurrency in a wallet or on a platform to support the operations of the blockchain network. Stakers are rewarded with new cryptocurrency as a form of interest for their support. Trading: Trading cryptocurrency involves buying and selling cryptocurrencies on exchanges or other trading platforms. Those who have a good understanding of market trends and are able to make informed trading decisions can earn profits through trading.Airdrops: Airdrops are free distributions of cryptocurrency to users who meet certain criteria or participate in promotional activities.Crypto Projects: Some blockchain projects offer rewards or bounties for users who contribute to their development or community. This can include activities like bug bounties, testing, or content creation.It's important to note that each method of earning cryptocurrency carries its own risks and rewards. It is recommended to carefully research cryptocurrencies and understand the process before buying. Learn more about the crypto market at Crypto.com University",
    },
    {
      title: "How to earn rewards on crypto?",
      body: "Users can earn rewards on their cryptocurrency holdings through various products that offer rewards-bearing accounts or lending services. Here are some ways to earn rewards on cryptocurrency: The Crypto.com App, Exchange, and DeFi Wallet all offer different ways to earn rewards on crypto, called Crypto Earn.Create an account on the chosen platform and deposit cryptocurrency holdings into the rewards account. Depending on the platform, users may earn rewards through lending their cryptocurrency to other users or by locking up their cryptocurrency for a period of time. Some products offer fixed reward rates (e.g., the Crypto.com Visa Card), while others may offer variable rates that depend on market conditions (e.g., the 'Earn' feature in the Crypto.com DeFi Wallet).Monitor rewards and adjust strategies as necessary.It's important to note that earning interest and rewards on cryptocurrency carries risks, including fluctuations in market conditions that may affect interest rates. Make sure to carefully research and understand terms and conditions before depositing cryptocurrency",
    },
  ];
  const pqr = [
    {
      title: "Bitcoin (BTC)",
      para1: "Price: $52,129 ",
      para2: " Market cap: $1.02 trillion",
      ima: "https://www.investopedia.com/thmb/zAe9OdqjQUIekLTP7YBpwum0O0s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-453930217-42848c04ff58410d952e1a5b65a00929.jpg",
    },
    {
      title: "Ethereum (ETH)  ",
      para1: "Price: $2,958 ",
      para2: "Market cap: $355 billion",
      ima: "https://media.cryptoglobe.com/2020/07/ethereum_gold_coins-768x432.jpg",
    },
    {
      title: "Tether (USDT)  ",
      para1: "Price: $1.00",
      para2: "Market cap: $98 billion",
      ima: "https://coingeek.com/wp-content/uploads/2019/03/tether-the-usd-backed-coin-thats-no-longer-backed-by-usd.jpg",
    },
    {
      title: "BNB (BNB)  ",
      para1: "Price: $355.86",
      para2: "Market cap: $53 billion",
      ima: "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2022/09/bnb-beacoin.jpg&w=700&h=368&q=75",
    },
    {
      title: "XRP (XRP)  ",
      para1: "Price: $0.5675",
      para2: "Market cap: $31 billion",
      ima: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1336955309/image_1336955309.jpg?io=getty-c-w750",
    },
    {
      title: "Cardano (ADA)  ",
      para1: "Price: $0.6293",
      para2: "Market cap: $28 billion",
      ima: "https://www.shutterstock.com/image-photo/kaufbeuren-germany-august-28-2021-600nw-2032719323.jpg",
    },
    {
      title: "Avalanche (AVAX) ",
      para1: "Price: $38.74",
      para2: "Market cap: $14 billion",
      ima: "https://imgs.search.brave.com/oXZ_dbKBbCzNFLUtuVqVkb2hjS8OJFnE4fawWQik_lQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY29pbmdlY2tv/LmNvbS9hcnRpY2xl/cy9pbWFnZXMvMjI0/MjY1NC9sYXJnZS91/bm5hbWVkLTIwMjQt/MTItMjFUMTI1NjI4/LjgwNy0xMjAweDgw/MC5wbmc_MTczNDc3/NzEyMA",
    },
    {
      title: " Dogecoin (DOGE)  ",
      para1: "Price: $355.86",
      para2: "Market cap: $53 billion",
      ima: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5iQXAlk3w-LMLn1h1J5vXzqzxnCQ6Uc2ng&usqp=CAU",
    },
  ];
  return (
    <>
      <Container className="online">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="rev">
              <h1>
                The World’s Premier <br />
                Crypto Information Platform
              </h1>
              <br />
              <h2>Buy Bitcoin, Ethereum, and 250+ cryptocurrencies</h2>
              <br />

              <h4>
                <ul id="ulid">
                  <li>
                    <PiArrowCircleUpRightFill />
                    Trade with <span id="s1">20+ flat currencies</span> and
                    Apple/Google Pay.
                  </li>
                  <li>
                    <PiArrowCircleUpRightFill />
                    Leader in <span id="s1">
                      regulatory compliance
                    </span> and <span id="s1">security certifications.</span>
                  </li>
                  <li>
                    <PiArrowCircleUpRightFill />
                    Trusted by <span id="s1">over 80 million users</span>{" "}
                    worldwide.
                  </li>
                </ul>
              </h4>
              <br />
              <br />
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="earthim">
              <img src={im1} fluid alt="crypto" id="earthim" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <img src={im2} alt="" className="alp3 fade-up" id="alp3i" />
          </Col>
          <Col lg={8} md={6} sm={12} id="tt1">
            <h2 className="fade-up">What Is Cryptocurrency?</h2>
            <br />
            <h5 className="fade-up">
              A cryptocurrency is a digital or virtual currency secured by
              cryptography, which makes it nearly impossible to counterfeit or
              double-spend. Most cryptocurrencies exist on decentralized
              networks using blockchain technology—a distributed ledger enforced
              by a disparate network of computers.
            </h5>
            <br />
            <br />
            <br />
            <h5 className="fade-up">
              Cryptocurrencies were introduced with the intent to revolutionize
              financial infrastructure. As with every revolution, however, there
              are tradeoffs involved. At the current stage of development for
              cryptocurrencies, there are many differences between the
              theoretical ideal of a decentralized system with cryptocurrencies
              and its practical implementation.
            </h5>
          </Col>
        </Row>
        <Row></Row>
      </Container>

      <section>
        <Container fluid className="my-5">
          <Row>
            <div>
              <h2 className="gallery-heading">Crypto Info</h2>
            </div>

            {pqr.map((a) => {
              return (
                <Col lg={3} sm={6} style={{ paddingRight: 0 }} className="my-3">
                  <div className="card1">
                    <div className="image-box">
                      <img src={a.ima} alt="Image 1" />
                    </div>
                    <div className="content">
                      <h2 style={{ color: "white" }}>{a.title}</h2>
                      <p style={{ color: "white" }}>
                        {a.para1} <br />
                        {a.para2}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
        <br />
        <br />
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col lg={12} sm={12}>
              <div className="video-container">
                <video autoPlay loop muted className="video">
                  <source src={v1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="overlay">
                  <h3>CRYPTO.COM VISA CARD</h3>
                  <h2>The only crypto card you need</h2>
                  <h4>
                    Enjoy up to 5% back on all spending with your sleek, pure
                    metal card. No annual fees. Top-up with fiat or crypto.
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomeP;
