import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page2.css";
import CV from "../../src/assets/Cameron_Angeleri_Resume.pdf";
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
                Cameron Angeleri | Dancer, Dreamer, Developer
              </h2>
              <hr />
              <p style={{ fontSize: "medium" }}>
                Thank you for making it this far! Your time and attention mean a
                lot to me, and I truly appreciate it. Allow me to share a bit of
                my story with you.
              </p>
              <p style={{ fontSize: "medium" }}>
                My journey has been a rich tapestry of diverse experiences, each
                contributing to who I am today. I began my adventure in the
                world of ballet, where discipline, grace, and expression became
                foundational elements of my character. Ballet taught me the
                importance of perseverance and the beauty of telling a story
                through movement. Transitioning from the stage to peoples homes,
                and now the web, I explored my passion for design. Here, I have
                found a new way to express creativity, crafting visually
                engaging and meaningful designs. My work in design emphasized
                the significance of aesthetics and the power of a
                well-thought-out user experience.
              </p>
              <p style={{ fontSize: "medium" }}>
                In the realm of sales, I honed my skills in communication and
                relationship-building. I learned the art of understanding client
                needs, delivering value, and fostering trust. These experiences
                reinforced my belief in the importance of empathy and
                collaboration.
              </p>
              <p style={{ fontSize: "medium" }}>
                Finally, my journey led me to the world of web development,
                where I discovered the thrill of building reliable, scalable
                applications. I thrive in the full-stack development
                environment, where I can merge my design eye with strong
                programming skills to create functional and beautiful solutions.
                Each project is a new opportunity to learn, grow, and make a
                positive impact.
              </p>
              <p style={{ fontSize: "medium" }}>
                Throughout this journey, I’ve been driven by a passion for
                continuous learning and a commitment to excellence. Whether it's
                managing projects, collaborating with stakeholders, or
                implementing agile methodologies, I strive to deliver
                high-quality, user-focused solutions.
              </p>
              <p style={{ fontSize: "medium" }}>
                Thank you again for taking the time to learn about my journey.
                Let's connect and create something amazing together!
              </p>
              <a
                href="https://www.linkedin.com/in/cameron-angeleri/"
                target="_blank"
                className="btn btn-outline-secondary btn-block"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-9"></div>
      <div>
      <div className="navigation-arrows d-flex mb-5">
          <button
            onClick={() => fullpageApi.moveTo(2)}
            className="arrow down"
          >
            &uarr; Projects
          </button>
          <button
            onClick={() => fullpageApi.moveTo(4)}
            className="arrow down"
          >
            CV  &darr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
