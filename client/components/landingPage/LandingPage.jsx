
import React from "react";
import "./LandingPage.css";
import CIcon from "../../src/assets/icons/logo_purple.png";
import Background from "../../src/assets/BackgroundMain.jpg";

const LandingPage = ({ fullpageApi }) => {
  return (
    <div
      className="section main-style"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <img
        src={CIcon}
        className="img-fluid d-flex align-items-center justify-content-center iconImg"
        style={{ maxHeight: "600px" }}
      />
      <h2 className="landingText">
        Unique perspective and creative insight at every turn
      </h2>
      <div className="navigation-arrows d-flex justify-content-center mt-5">
        <button
          onClick={() => fullpageApi.moveSectionDown()}
          className="arrow down"
        >
          Check out my latest projects &darr;
        </button>
        <button
          onClick={() => fullpageApi.moveTo(3)}
          className="arrow down ml-3"
        >
          Cameron Angeleri &darr;
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
