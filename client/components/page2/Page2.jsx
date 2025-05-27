import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page2.css";
import p_pic from "../../src/assets/p_pic.png";
import WordCloud from "../page3/WordCloud.jsx";
import Background from "../../src/assets/BackgroundMain.jpg";

const Page2 = ({ fullpageApi }) => {
  const [showWordCloud, setShowWordCloud] = useState(false);

  const skills = [
    { category: "Programming Languages", items: "JavaScript, Python, Java" },
    { category: "Frontend Frameworks", items: "React, Angular, Vue" },
    { category: "Backend Frameworks", items: "Node.js, Express, Django" },
    { category: "Databases", items: "MongoDB, MySQL, NoSQL" },
    { category: "Tools", items: "Git, Salesforce, VsCode" },
  ];

  return (
    <div
      className="section slide2"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div
        className="slide d-flex justify-content-center align-items-center"
        data-anchor="slide2"
      >
        <div className="container text-center ">
          <div className="row align-items-start">
            <div className="col-12 col-md-4 d-flex align-items-center">
              <img
                src={p_pic}
                alt=""
                className="img-fluid rounded-7"
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div
              className="col-12 col-md-8 glass-card text-left"
              style={{ fontSize: "small", color: "#9A58CD" }}
            >
              <h2 className="text-center">
                Cameron Angeleri | Engineer, Leader, Creative
              </h2>
              <hr />
              <p style={{ fontSize: "medium" }}>
                Thanks for stopping by! I’m Cameron — a full-stack developer,
                project leader, and lifelong learner with a unique journey that
                bridges the worlds of performance, design, sales, and scalable
                tech.
              </p>
              <p style={{ fontSize: "medium" }}>
                My career began in ballet, where discipline, storytelling, and
                resilience shaped how I approach challenges. That foundation
                evolved into a passion for design and aesthetics, leading me to
                build accessible, user-centered digital experiences that blend
                form and function.
              </p>
              <p style={{ fontSize: "medium" }}>
                In the sales world, I sharpened my skills in communication,
                collaboration, and customer-first thinking. These qualities have
                proven invaluable in tech, where empathy and clarity are key to
                successful engineering and cross-functional leadership.
              </p>
              <p style={{ fontSize: "medium" }}>
                Today, I lead backend and web scraping initiatives at a
                fast-moving tech startup. I’ve scaled ingestion pipelines 10× to
                process 25M+ items/day, led a globally distributed team, and
                automated critical workflows for consistency and performance.
                Whether I’m writing Python, deploying at scale, or aligning
                stakeholders on delivery goals — I thrive at the intersection of
                engineering, design, and strategic execution.
              </p>
              <p style={{ fontSize: "medium" }}>
                I’m equally comfortable in remote, hybrid, and in-person work
                settings, and I love building bridges across time zones,
                disciplines, and departments. My goal is always to create
                meaningful, scalable solutions that elevate both the product and
                the people behind it.
              </p>
              <p style={{ fontSize: "medium" }}>
                Let’s connect and see what we can build together!
              </p>
              <a
                href="https://www.linkedin.com/in/cameron-angeleri/"
                target="_blank"
                className="btn btn-outline-secondary btn-block d-flex align-items-center justify-content-center"
                style={{ padding: "10px" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                  alt="LinkedIn"
                  className="me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
        <div className="p-5"></div>
      </div>

      <div className="p-9"></div>
      <div>
        <div className="navigation-arrows d-flex mb-5">
          <button onClick={() => fullpageApi.moveTo(2)} className="arrow down">
            &uarr; Projects
          </button>
          <button onClick={() => fullpageApi.moveTo(4)} className="arrow down">
            CV &darr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
