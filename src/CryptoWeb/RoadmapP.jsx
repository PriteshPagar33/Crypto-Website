import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ufc from "../Images HTML/ufc.mp4";

function RoadmapP() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12} sm={12} md={12}>
            <section className="part">
              <h4>OUR PARTNERS</h4>
              <div id="rav">
                Reaching the next billion users <br />
                with the world’s best partners
              </div>
            </section>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col lg={12} sm={12} md={6}>
            <img
              src="https://mlvcy58mp4xj.i.optimole.com/w:716/h:361/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2023/03/Screenshot-2023-03-16-at-10.44.22-AM.png"
              alt=""
              id="sponsor"
            />
          </Col>
        </Row>

        <Row>
          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source
                src="https://mkt-site-asset.crypto.com/assets/partners/videos/F1_Video_1920x1080.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTkwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTYzXzM0NjMpIj4KPHBhdGggZD0iTTQ3Ljk0NTMgMjcuMDY1MUwyNi44NjcyIDQ3LjVIMEwzMy40NDc5IDE0LjI5OTVDNDUuODY3MiAyLjAyODY1IDUxLjg1NDIgMCA3My4wMzEyIDBIMTU2Ljc1TDEzOC41OTEgMTcuODEyNUg3NS40NTU3QzU5LjYyMjQgMTcuODEyNSA1Ni4yNTc4IDE5IDQ3Ljk0NTMgMjcuMDY1MVpNMTM1Ljg3IDIwLjYzMjhINzUuODAyMUM1OS44Njk4IDIwLjYzMjggNTcuMzQ2NCAyMS44Njk4IDUwLjEyMjQgMjkuMDkzN0wzMS43MTYxIDQ3LjVINTYuNjUzNkw2Mi41OTExIDQxLjU2MjVDNjYuNSAzNy42NTM2IDY4LjI4MTIgMzcuMjU3OCA3Ni4xNDg0IDM3LjI1NzhIMTE5LjI0NUwxMzUuODcgMjAuNjMyOFpNMTQyLjM1MiA0Ny41TDE5MCAwSDE2MC40MTFMMTEyLjkxMSA0Ny41SDE0Mi4zNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MiAzOS40MzA0QzE2MiAzNS4xMTc0IDE2NS40NzggMzEuNSAxNjkuOTMgMzEuNUMxNzQuMjQzIDMxLjUgMTc3Ljg2MSAzNS4xMTc0IDE3OCAzOS40MzA0QzE3OCA0My44ODI2IDE3NC4zODMgNDcuNSAxNjkuOTMgNDcuNUMxNjUuNjE3IDQ3LjUgMTYyIDQzLjg4MjYgMTYyIDM5LjQzMDRaTTE2My42NyAzOS41Njk2QzE2My42NyA0My4wNDc4IDE2Ni40NTIgNDUuODMwNCAxNjkuOTMgNDUuODMwNEMxNzMuNDA5IDQ1LjgzMDQgMTc2LjE5MSA0Mi45MDg3IDE3Ni4xOTEgMzkuNTY5NkMxNzYuMTkxIDM2LjA5MTMgMTczLjQwOSAzMy4zMDg3IDE2OS45MyAzMy4zMDg3QzE2Ni40NTIgMzMuMzA4NyAxNjMuNjcgMzYuMDkxMyAxNjMuNjcgMzkuNTY5NlpNMTcwLjU3NCAzNS41QzE3MS44NTEgMzUuNSAxNzMgMzYuNDY5NyAxNzMgMzcuODAzQzE3MyAzOC44OTM5IDE3Mi4zNjIgMzkuNzQyNCAxNzEuMzQgNDAuMTA2MUwxNzMgNDMuNUgxNzEuMjEzTDE2OS42ODEgNDAuMjI3M0gxNjguNTMyVjQzLjVIMTY3VjM1LjVIMTcwLjU3NFpNMTY4LjY2IDM4LjY1MTVIMTcwLjU3NEMxNzEuMDg1IDM4LjY1MTUgMTcxLjQ2OCAzOC4yODc5IDE3MS40NjggMzcuODAzQzE3MS40NjggMzcuMzE4MiAxNzEuMDg1IDM2Ljk1NDUgMTcwLjU3NCAzNi45NTQ1SDE2OC42NlYzOC42NTE1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjNfMzQ2MyI+CjxyZWN0IHdpZHRoPSIxOTAiIGhlaWdodD0iNDcuNSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                alt=""
              />
            </div>
          </div>
        </Row>

        <Row>
          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source src={ufc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjAgMTI0LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MCAxMjQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzcuMywxMjQuOGgtNTVjLTUuNC0wLjMtMTEtMS42LTE1LjUtNC43Yy0zLTItNS40LTUtNi4zLTguNWMtMC41LTEuNS0wLjQtMy4xLTAuNC00LjZjMC0xLjgsMC42LTMuNiwxLjEtNS40CglDMTAuNSw2Ny43LDE5LjksMzMuOSwyOS4zLDBsLTAuMiwwaDQyLjdjLTguNSwzMC41LTE2LjksNjEuMS0yNS40LDkxLjZjLTAuNCwxLjEtMC40LDIuMywwLjMsMy4zYzEuMSwxLjYsMy4xLDIuMyw1LDIuNAoJYzIuMiwwLjEsNC40LDAsNi43LDBjMi40LDAsNC45LDAuMSw3LjItMC44YzEuNi0wLjYsMi42LTIuMiwzLTMuOEM3Ny4xLDYxLjgsODUuNywzMC45LDk0LjMsMGg0Mi41Yy05LDMyLjUtMTgsNjUtMjcuMSw5Ny41CgljLTEsMy40LTEuOSw2LjktMi45LDEwLjRjLTEuMyw0LjItMy41LDguMi02LjksMTEuMWMtMi41LDIuMS01LjcsMy40LTguOSw0LjFDODYuNiwxMjQuMiw4MS45LDEyNC41LDc3LjMsMTI0LjhMNzcuMywxMjQuOHoKCSBNMTY1LjEsMTI0LjhoLTQyLjhjNy4zLTI2LjEsMTQuNS01Mi4zLDIxLjgtNzguNGMzMC42LDAsNjEuMiwwLDkxLjksMGMtMi41LDkuMi01LjEsMTguMy03LjYsMjcuNWMtMTYuNSwwLTMyLjksMC00OS40LDBsLTE0LjEsNTEKCUwxNjUuMSwxMjQuOHogTTMyOC45LDEyNC44aC02OS44Yy01LjItMC4zLTEwLjYtMS41LTE1LTQuNGMtMi45LTEuOS01LjQtNC42LTYuNS03LjljLTEuMS0yLjgtMS02LTAuMi04LjgKCWM3LjktMjguNCwxNS44LTU2LjksMjMuNy04NS4zYzEuMS00LjIsMy04LjMsNi4xLTExLjRjMi0yLjEsNC42LTMuNiw3LjQtNC41YzUuMS0xLjcsMTAuNS0yLjEsMTUuOC0yLjVIMzYwCgljLTEsNC4xLTIuMyw4LjItMy40LDEyLjRjLTEuNCw1LTIuOCwxMC00LjIsMTUuMWMtMTUuMSwwLTMwLjIsMC00NS4yLDBjLTIuMiwwLTQuNSwwLTYuNiwwLjljLTEuNywwLjctMi42LDIuNS0zLDQuMgoJYy01LjUsMTkuOC0xMSwzOS43LTE2LjUsNTkuNWMtMC40LDEuMi0wLjEsMi42LDAuOSwzLjZjMS4zLDEuNCwzLjQsMS44LDUuMiwxLjhsNDkuMywwQzMzNCwxMDYuNSwzMzEuNCwxMTUuNiwzMjguOSwxMjQuOAoJTDMyOC45LDEyNC44eiBNMTU3LDBoOTEuOWMtMi42LDkuMS01LjEsMTguMy03LjYsMjcuNGMtMzAuNiwwLTYxLjIsMC05MS45LDBDMTUxLjksMTguMywxNTQuNCw5LjEsMTU3LDBMMTU3LDB6Ii8+Cjwvc3ZnPgo="
                alt=""
              />
            </div>
          </div>
        </Row>

        <Row>
          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source
                src="https://mkt-site-asset.crypto.com/assets/partners/videos/03_Conmebol_16-9.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <img
                src="https://mkt-site-asset.crypto.com/assets/partners/logos/conmebolLogo-white.svg"
                alt=""
              />
            </div>
          </div>
        </Row>
        <Row>
          <div className="video-container">
            <video autoPlay loop muted className="video">
              <source
                src="https://mkt-site-asset.crypto.com/assets/partners/videos/Kings_Video_1920x1080.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">
              <img
                src="https://mkt-site-asset.crypto.com/assets/partners/logos/Kings-Logo-White.svg"
                alt=""
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default RoadmapP;
