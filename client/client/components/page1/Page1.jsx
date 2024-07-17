import React from "react";
import "./Page1.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

import Background from "../../src/assets/Background.jpg"; 

const Page1 = ({ fullpageApi }) => {
  return (
    <>

      <div
        className="section page-style1"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Slide2 />
        <Slide1 />
        <Slide3 />
        <div className="navigation-arrows d-flex mb-5">
          <button
            onClick={() => fullpageApi.moveSectionDown()}
            className="arrow down"
          >
            Learn more about me &darr;
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
