
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FaBars } from "react-icons/fa";
import "./styles.css";

import LandingPage from "../components/landingPage/LandingPage";
import Page1 from "../components/page1/Page1";
import Page2 from "../components/page2/Page2";
import Page3 from "../components/page3/Page3";

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
              <div className="menu">
                <ul>
                  <li onClick={() => fullpageApi.moveTo(1)}>Home</li>
                  <li onClick={() => fullpageApi.moveTo(2)}>Projects</li>
                  <li onClick={() => fullpageApi.moveTo(3)}>About Me</li>
                  <li onClick={() => fullpageApi.moveTo(4)}>CV</li>
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
