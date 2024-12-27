import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarP from "./CryptoWeb/NavbarP";
import HomeP from "./CryptoWeb/HomeP";
import ContactP from "./CryptoWeb/ContactP";
import LoginP from "./CryptoWeb/LoginP";
import NewsP from "./CryptoWeb/NewsP";
import AboutP from "./CryptoWeb/AboutP";
import ServicesP from "./CryptoWeb/ServicesP";
import FooterP from "./CryptoWeb/FooterP";
import RoadmapP from "./CryptoWeb/RoadmapP";
import RegisterP from "./CryptoWeb/RegisterP";
import Marketupdates from "./CryptoWeb/Marketupdates";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarP />
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/newsp" element={<NewsP />} />
          <Route path="/aboutp" element={<AboutP />} />
          <Route path="/servicesp" element={<ServicesP />} />
          <Route path="/roadmap" element={<RoadmapP />} />
          <Route path="/contactp" element={<ContactP />} />
          <Route path="/market" element={<Marketupdates />} />

          <Route path="/loginp" element={<LoginP />} />
          <Route path="/regp" element={<RegisterP />} />
        </Routes>
        <FooterP />
      </BrowserRouter>
    </div>
  );
}

export default App;
