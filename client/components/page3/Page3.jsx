import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page3.css";
import CV from "../../src/assets/Cameron_Angeleri_Resume.pdf";
import CDC from "../../src/assets/CodingDojo_Diploma.pdf";
import Background from "../../src/assets/Background.jpg";
import AngeleriIcon from "../../src/assets/icons/0.png";

const Page3 = ({ fullpageApi }) => {
  return (
    <>
      <div
        className="section section3"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="slide" data-anchor="page3">
          <div className="container">
            <div className="row d-flex flex-column flex-md-row">
              <div className="col-12 col-md-2 d-flex justify-content-center align-items-center">
                <img
                  onClick={() => fullpageApi.moveTo(1)}
                  src={AngeleriIcon}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: "100px" }}
                />
              </div>
              <div className="col-12 col-md-10 text-md-left project mt-3 mt-md-0">
                <h1 className="ml-md-4">
                  Cameron Angeleri | Full Stack Web Developer
                </h1>
                <p className="ml-md-4">
                  +1 509 995 0242 | Seattle, WA 98109 | cam.angeleri@gmail.com
                </p>
                <p className="ml-md-4 mt-0">
                  <a
                    href="https://www.linkedin.com/in/cameron-angeleri/"
                    target="_blank"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                      alt="LinkedIn"
                      className="me-2"
                      style={{ width: "24px", height: "24px" }}
                    />
                    LinkedIn
                  </a>{" "}
                  |
                  <a href="https://github.com/CAngeleri" target="_blank">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="Github"
                      className="me-2 ml-2"
                      style={{ width: "24px", height: "24px" }}
                    />
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>

          <a
            href={CV}
            target="_blank"
            className="btn btn-outline-secondary text-center d-block mt-2"
          >
            Available PDF
          </a>

          <div className="container">
            <div className="row d-flex flex-column flex-md-row align-items-start">
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-4 profile text-center text-md-left mt-3 mt-md-0">
                  <h2>Profile</h2>
                  <hr />
                  <p className="text-left">
                    Creative and analytical professional with a passion for
                    designing intuitive user experiences and building robust,
                    scalable web applications. Proficient in full stack
                    development, blending strong design aesthetics with solid
                    programming logic. Demonstrated ability to surpass goals and
                    drive positive business outcomes. Skilled in project
                    management, agile methodologies, and stakeholder
                    collaboration. Committed to continuous learning and
                    delivering high-quality, user-centric solutions.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-4 profile text-center text-md-left mt-3 mt-md-0">
                  <h2>Technical Skills</h2>
                  <hr />
                  <p className="text-left">
                    <ul>
                      <li>
                        <strong>Languages:</strong> JavaScript(ES6, Node.js),
                        TypeScript, Python, C#, HTML5, CSS, SQL
                      </li>
                      <li>
                        <strong>Libraries / Frameworks:</strong> Jinja2, React,
                        jQuery, Flask, React, Express, Tailwind, Bootstrap
                      </li>
                      <li>
                        <strong>Databases:</strong> MySQL, NoSQL, MongoDB
                      </li>
                      <li>
                        <strong>Tools:</strong> AJAX, REST API, JSON, Git,
                        GitHub, VSCode, Figma, Canva, MySQL Workbench, Microsoft
                        365, SalesForce
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-5 text-center">Technical Projects</h2>
          <hr />
          <div className="project">
            <h3>PetMatch</h3>
            <hr />
            <p>
              <strong>Link:</strong> |
              <a
                href="https://github.com/CAngeleri/PetMatchAPI"
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
              A Tinder clone designed to connect potential pet adopters with
              rescue animals.
            </p>
            <p>
              <ul>
                <li>
                  Developed a user registration system using Node.js and Express
                  to handle authentication and authorization.
                </li>
                <li>
                  Implemented a dynamic New Pet Owner wall using MongoDB for
                  database management, allowing users to post questions, comment
                  on posts, and like posts, supporting many-to-many
                  relationships.
                </li>
                <li>
                  Designed and built a responsive front-end with React,
                  enhancing user experience and engagement.
                </li>
                <li>
                  Optimized database queries and interactions to ensure fast
                  data retrieval and smooth performance.
                </li>
                <li>
                  Collaborated with a team using GitHub for version control and
                  Agile methodologies for project management.
                </li>
              </ul>
            </p>
          </div>

          <div className="project">
            <h3>Dream Market</h3>
            <hr />
            <p>
              <strong>Link:</strong> |
              <a
                href="https://github.com/CAngeleri/Angeleri_Dream_Market"
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
              A Flask application focusing on frontend design and
              mobile-friendly user experience.
            </p>
            <p>
              <ul>
                <li>
                  Developed the frontend with a focus on mobile-friendly UX
                  using HTML, CSS, and JavaScript, featuring bright and engaging
                  colors.
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
                  Presented the project to the graduating class, demonstrating
                  the capabilities and features of the application.
                </li>
                <li>
                  Utilized Agile methodologies for project management and GitHub
                  for version control, ensuring efficient collaboration and
                  version tracking.
                </li>
              </ul>
            </p>
          </div>

          <div className="project">
            <h3>Angeleri Art Museum</h3>
            <hr />
            <p>
              <strong>Links:</strong>{" "}
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
              {" "}
              |{" "}
              <a
                href="https://cangeleri.github.io/Angeleri_Art_Museum/"
                target="_blank"
              >
                Live Site
              </a>{" "}
            </p>
            <p>
              A single-page application showcasing artworks from the
              Metropolitan Museum of Art.
            </p>
            <p>
              <ul>
                <li>
                  Developed a responsive and interactive user interface using
                  React and PrimeReact to display artwork information.
                </li>
                <li>
                  Integrated with the Metropolitan Museum of Art API to fetch
                  and present detailed artwork data.
                </li>
                <li>
                  Focused on accessible design, implementing features such as
                  large font mode, high contrast design, and screen reader
                  compatibility.
                </li>
                <li>
                  Deployed the application using GitHub Pages, ensuring it is
                  mobile-friendly and easily accessible.
                </li>
                <li>
                  Designed a beautiful, high-contrast interface to enhance the
                  user experience for all users, including those with visual
                  impairments.
                </li>
                <li>
                  Created an interactive UI/UX that allows users to easily
                  navigate and explore the art collection.
                </li>
              </ul>
            </p>
          </div>

          <h2 className="mt-5 text-center">Professional Experience</h2>
          <hr />
          <div className="experience">
            <h3>Trauma-Informed Yoga Instructor</h3>
            <p>Self-Employed | July 2022 - Present</p>
            <p>
              <ul>
                <li>
                  Designed and launched a high-traffic e-commerce website,
                  establishing a profitable business within six months.
                </li>
                <li>
                  Facilitated trauma-informed yoga sessions, promoting healing
                  and mindfulness.
                </li>
                <li>
                  Leveraged a cloud-based client management system to streamline
                  communication and automate onboarding processes.
                </li>
                <li>
                  Worked individually with students to enhance their motivation
                  and performance goals.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Sales Development Representative</h3>
            <p>DocuSign | Seattle, WA | August 2023 - March 2024</p>
            <p>
              <ul>
                <li>
                  Engaged in hybrid collaboration, effectively working both
                  remotely and in-person to drive sales initiatives.
                </li>
                <li>
                  Managed schedules and coordinated with cross-functional teams
                  in an agile work environment.
                </li>
                <li>
                  Spearheaded the development and delivery of compelling sales
                  presentations, leading to increased customer engagement and
                  acquisition.
                </li>
                <li>
                  Utilized CRM tools to manage leads, track progress, and report
                  on sales metrics.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Lead Business-to-Business Account Manager</h3>
            <p>Williams Sonoma INC | January 2020 - July 2022</p>
            <p>
              <ul>
                <li>
                  Led a $5M corporate rebrand initiative, collaborating with
                  cross-functional teams for seamless execution.
                </li>
                <li>
                  Conducted daily stand-up meetings and training sessions,
                  enhancing team productivity and client experience.
                </li>
                <li>
                  Mentored a team of 10 sales associates, resulting in a 150%
                  increase in B2B sales.
                </li>
                <li>
                  Developed and implemented remote selling strategies, expanding
                  the customer base and increasing sales.
                </li>
                <li>
                  Managed a portfolio of 500+ client projects, ensuring high
                  satisfaction and retention rates.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Home Stylist / Key Holder</h3>
            <p>Williams Sonoma INC | March 2018 - January 2020</p>
            <p>
              <ul>
                <li>
                  Implemented a strategic merchandising plan, increasing
                  department sales by 15%.
                </li>
                <li>
                  Managed $1.2M in annual retail volume, contributing to a 2%
                  market growth year over year.
                </li>
                <li>
                  Developed promotional campaigns, driving foot traffic and
                  increasing average transaction value by 10%.
                </li>
                <li>
                  Created visually captivating marketing materials using Adobe
                  Creative Suite, boosting social media traffic by 7%.
                </li>
                <li>
                  Received over 1,200 5-star client reviews and national
                  recognition as a top retail contributor.
                </li>
              </ul>
            </p>
          </div>

          <h2 className="mt-5 text-center">Certifications</h2>
          <hr />
          <div className="project">
            <h3>Coding Dojo | Full Stack Web Development Bootcamp</h3>
            <p>
              Proficiency in three stacks: MERN (MongoDB, Express, React,
              Node.js), Python, and C#. Developed numerous applications, ranging
              from mobile-friendly web pages, Full CRUD Applications to fully
              functional e-commerce websites, integrating various APIs and tools
              to enhance functionality and user experience.
            </p>
            <a
              href={CDC}
              target="_blank"
              className="btn btn-outline-secondary text-center d-block mt-2"
            >
              Available PDF
            </a>
          </div>
          <div className="education">
            <h3>
              Pittsburgh Ballet Theatre Graduate Studies in Ballet Performance
            </h3>
            <p>PBTS | PittsBurgh, PA </p>
          </div>
          <div className="education">
            <h3>
              Pittsburgh Ballet Theatre Pre-Professional High School Program
            </h3>
            <p>PBTS | PittsBurgh, PA </p>
          </div>
          <div className="p-5"></div>
        </div>
        <div>
          <div className="navigation-arrows d-flex mb-5">
            <button
              onClick={() => fullpageApi.moveTo(2)}
              className="arrow down"
            >
              &uarr; Back to Projects &uarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
