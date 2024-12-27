import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function LoginP() {
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
  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div>
              <div class="form-container">
                <p class="title">Login</p>
                <form class="form">
                  <div class="input-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder=""
                    />
                  </div>
                  <div class="input-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder=""
                    />
                    <div class="forgot">
                      <a rel="noopener noreferrer" href="#">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                  <button class="sign">Sign in</button>
                </form>
                <div class="social-message">
                  <div class="line"></div>
                  <p class="message">Login with social accounts</p>
                  <div class="line"></div>
                </div>
                <div class="social-icons">
                  <button aria-label="Log in with Google" class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      class="w-5 h-5 fill-current"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </button>
                  <button aria-label="Log in with Twitter" class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      class="w-5 h-5 fill-current"
                    >
                      <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                    </svg>
                  </button>
                  <button aria-label="Log in with GitHub" class="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      class="w-5 h-5 fill-current"
                    >
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                  </button>
                </div>
                <p class="signup">
                  Don't have an account?
                  <a rel="noopener noreferrer" href="#" class="">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <h1>Frequqntly Asked Questions </h1>
          {abc.map((a, id) => {
            return (
              <>
                <Col lg={12}>
                  <Accordion defaultActiveKey="0" id="main">
                    <Accordion.Item eventKey="id">
                      <Accordion.Header id="accord1">
                        {a.title}
                      </Accordion.Header>
                      <Accordion.Body id="accord">{a.body}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default LoginP;
