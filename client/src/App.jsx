import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FaBars } from "react-icons/fa";
import "./styles.css";

import LandingPage from "../components/landingPage/LandingPage";
import Page1 from "../components/page1/Page1";
import Page2 from "../components/page2/Page2";
import Page3 from "../components/page3/Page3";
import Home from "../src/assets/icons/Home.png";
import Projects from "../src/assets/icons/projects.png";
import AboutMe from "../src/assets/icons/aboutMe.png";
import CV from "../src/assets/icons/resume.png";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <ReactFullpage
        debug
        easingcss3="cubic-bezier(0.175, 0.885, 0.320, 1.275)"
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        responsiveWidth={768}
        responsiveHeight={600}
        render={({ fullpageApi }) => (
          <>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <FaBars />
            </div>
            {menuOpen && (
              <div className="menu mt-3">
                <ul className="p-3">
                  <li onClick={() => fullpageApi.moveTo(1)}>
                    <img
                      src={Home}
                      alt="Home Icon"
                      className="mr-3"
                      style={{ width: "24px", height: "24px" }}
                    />
                    Home
                  </li>
                  <li onClick={() => fullpageApi.moveTo(2)}>
                    <img
                      src={Projects}
                      alt="Projects Icon"
                      className="mr-3"
                      style={{ width: "24px", height: "24px" }}
                    />
                    Projects
                  </li>
                  <li onClick={() => fullpageApi.moveTo(3)}>
                    <img
                      src={AboutMe}
                      alt="Projects Icon"
                      className="mr-3"
                      style={{ width: "24px", height: "24px" }}
                    />
                    About Me
                    </li>
                  <li onClick={() => fullpageApi.moveTo(4)}>
                    <img
                      src={CV}
                      alt="Projects Icon"
                      className="mr-3"
                      style={{ width: "24px", height: "24px" }}
                    />
                    CV / Resume
                    </li>
                </ul>
              </div>
            )}
            <ReactFullpage.Wrapper>
              <LandingPage fullpageApi={fullpageApi} />
              <Page1 fullpageApi={fullpageApi} />
              <Page2 fullpageApi={fullpageApi} />
              <Page3 fullpageApi={fullpageApi} />
            </ReactFullpage.Wrapper>
          </>
        )}
      />
    </div>
  );
};

export default App;
