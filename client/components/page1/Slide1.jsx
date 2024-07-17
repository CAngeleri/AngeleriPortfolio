import React, { useState } from "react";
import AngeleriArtMuseumRecording from "../../src/assets/Screenshots/AngeleriArtMuseum/AngeleriArtMuseumRecording.mp4";
import "./Slide1.css";

const Slide1 = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="d-flex justify-content-center mt-4 flex-wrap">
      <div className="slide d-flex justify-content-center">
        <div className="d-block">
          <div className="text-center m-4" style={{ width: "75vw" }}>
            <video
              className="desktop-video img-fluid"
              src={AngeleriArtMuseumRecording}
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <div
              style={{ width: "75vw" }}
              className={`p-4 text-start glass-card ${
                showDetails ? "" : "collapsed"
              }`}
            >
              <div className="d-flex flex-column align-items-center">
                <h1 className="text-center">Angeleri Art Museum</h1>
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
                    <strong>Links:</strong>{" "}
                    <a
                      href="https://cangeleri.github.io/Angeleri_Art_Museum/"
                      target="_blank"
                    >
                      Live Site
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://github.com/CAngeleri/Angeleri_Art_Museum"
                      target="_blank"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github"
                        className="me-2 ml-2"
                        style={{ width: "24px", height: "24px" }}
                      />
                      GitHub
                    </a>
                  </p>
                  <p>
                    <strong>Description: </strong>A single-page application
                    (SPA) showcasing artworks from the Metropolitan Museum of
                    Art, with a focus on accessible design.
                  </p>
                  <p>
                    <strong>Project Highlights:</strong>
                    <ul>
                      <li>
                        Developed a responsive and interactive user interface
                        using React and PrimeReact.
                      </li>
                      <li>
                        Integrated with the Metropolitan Museum of Art API.
                      </li>
                      <li>Implemented features for accessible design.</li>
                      <li>Deployed using GitHub Pages.</li>
                      <li>
                        Designed a high-contrast interface for enhanced user
                        experience.
                      </li>
                      <li>Created an interactive UI/UX for easy navigation.</li>
                      <li>
                        Utilized Agile methodologies for project management.
                      </li>
                      <li>
                        Collaborated in sprint planning and retrospectives.
                      </li>
                      <li>
                        Engaged in peer code reviews for workflow improvement.
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>Technologies:</strong> React, PrimeReact,
                    JavaScript, HTML, CSS, Node.js, GitHub Pages
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="p-4"></div>
          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
