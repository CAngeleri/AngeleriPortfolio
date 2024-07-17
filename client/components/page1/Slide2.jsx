import React, { useState } from "react";
import DreamMarketRecording from "../../src/assets/Screenshots/DreamMarketScreenshots/DreamMarketRecording.mp4";
import "./Page1.css";
import Background from "../../src/assets/Background.jpg";

const Slide2 = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="slide">
      <div className="d-flex p-5 flex-wrap" style={{ width: "75vw", overflow: "hidden" }}>
        <div className="row align-items-start justify-content-center w-100">
          <div className={`p-4 col-12 text-start glass-card mb-4 rounded-7 ${showDetails ? 'col-lg-6 me-lg-n5' : ''}`}>
            <div className="d-flex flex-column align-items-start">
              <h1>Dream Market 🍐</h1>
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
                  <a href="https://github.com/CAngeleri/Angeleri_Dream_Market" target="_blank"> GitHub</a>
                </p>
                <p>
                  <strong>Description: </strong>A Flask application focusing on
                  frontend design and mobile-friendly user experience, showcasing a
                  product line of stable defused sodas based on colors.
                </p>
                <p>
                  <strong>Project Highlights:</strong>
                  <ul>
                    <li>
                      Developed the frontend with a focus on mobile-friendly UX
                      using HTML, CSS, Python, and JavaScript, featuring bright and
                      engaging colors.
                    </li>
                    <li>
                      Integrated Stripe for seamless payment processing, enabling
                      users to purchase products securely.
                    </li>
                    <li>
                      Implemented product management and display using Flask and
                      MySQL, ensuring efficient data handling and retrieval.
                    </li>
                    <li>
                      Created an admin user interface for managing products and
                      orders, using MySQL for database management.
                    </li>
                    <li>
                      Set up Flask-Mail to allow customers to reach out to the
                      "owner" for inquiries, improving customer support.
                    </li>
                    <li>
                      Utilized Agile methodologies for project management and GitHub
                      for version control, ensuring efficient collaboration and
                      version tracking.
                    </li>
                    <li>
                      Collaborated with team members in sprint planning, user story
                      creation, and retrospectives to enhance project delivery.
                    </li>
                    <li>
                      Engaged in peer code reviews and utilized task management
                      tools to track project progress and improve workflow.
                    </li>
                  </ul>
                </p>
                <p>
                  <strong>Technologies:</strong> Flask, Bootstrap, MySql, Express
                </p>
              </>
            )}
          </div>
          <div className={`col-12 d-flex justify-content-center ${showDetails ? 'col-lg-6' : ''}`}>
            <div className="iphone-container p-0">
              <video
                className="mobile-video  h-100 w-100"
                src={DreamMarketRecording}
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

export default Slide2;
