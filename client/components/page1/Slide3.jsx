import PetmatchRecording from "../../src/assets/Screenshots/PetMatch.mp4";
import React, { useState } from "react";
import DreamMarketRecording from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarketRecording.mp4";
import "./Page1.css";
import Background from "../../src/assets/Background.jpg";

const Slide3 = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="slide">
      <div
        className="d-flex p-5 flex-wrap"
        style={{ width: "75vw", overflow: "hidden" }}
      >
        <div className="row align-items-start justify-content-center w-100">
          <div
            className={`p-4 col-12 text-start glass-card mb-4 rounded-7 ${
              showDetails ? "col-lg-6 me-lg-n5" : ""
            }`}
          >
            <div className="d-flex flex-column align-items-start">
              <h1>Pet Match</h1>
              <button
                className="btn btn-block btn-outline-secondary mt-2"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>
            {showDetails && (
              <>
                <hr />
                <p>
                  <strong>Link:</strong> |
                  <a
                    href="https://github.com/CAngeleri/PetMatchAPI"
                    target="_blank"
                  >
                    {" "}
                    GitHub
                  </a>
                </p>
                <p>
                  <strong>Description: </strong>A Tinder clone designed to
                  connect potential pet adopters with rescue animals in their
                  area through a user-friendly interface and robust backend.
                </p>
                <p>
                  <strong>Project Highlights:</strong>
                  <ul>
                    <li>
                    Developed a user registration system using Node.js and Express to handle authentication and authorization.
                    </li>
                    <li>
                    Integrated the application with the Rescue Group API to fetch and display information about adoptable pets in real-time.

                    </li>
                    <li>
                    Implemented a dynamic New Pet Owner wall using MongoDB for database management, allowing users to post questions, comment on posts, and like posts, supporting many-to-many relationships.

                    </li>
                    <li>
                    Designed and built a responsive front-end with React, enhancing user experience and engagement.

                    </li>
                    <li>
                    Optimized database queries and interactions to ensure fast data retrieval and smooth performance.
                    </li>
                    <li>
                    Collaborated with a team using GitHub for version control and Agile methodologies for project management.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Technologies:</strong> C#, Model-View-Controller (MVC) framework, Bootstrap5.0, Figma (Wireframing) MySql
                </p>
              </>
            )}
          </div>
          <div
            className={`col-12 d-flex justify-content-center ${
              showDetails ? "col-lg-6" : ""
            }`}
          >
            <div className="iphone-container p-0">
              <video
                className="mobile-video h-100 w-100"
                src={PetmatchRecording}
                autoPlay
                loop
                muted
                playsInline
                controls
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
