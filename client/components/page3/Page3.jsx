import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Page3.css";
import CV from "../../src/assets/Angeleri_Resume.pdf";
import CDC from "../../src/assets/CodingDojo_Diploma.pdf";
import Background from "../../src/assets/BackgroundMain.jpg";
import AngeleriIcon from "../../src/assets/icons/logo_purple.png";

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
              <div className="col-12 col-md-10 text-md-left project mt-3 mt-md-0">
                <h1 className="ml-md-4 text-center " onClick={() => fullpageApi.moveTo(1)}>
                  Cameron Angeleri | Full Stack Web Developer
                </h1>
                <p className="ml-md-4 text-center">
                  +1 509 995 0242 | Seattle, WA 98109 | cam.angeleri@gmail.com
                </p>
                <p className="ml-md-4 mt-0 text-center">
                  <a
                    onClick={() => fullpageApi.moveTo(1)}
                  >
                    <img
                      onClick={() => fullpageApi.moveTo(1)}
                      src={AngeleriIcon}
                      alt=""
                      className="img-fluid"
                      style={{ width: "50px", height: "50px" }}
                    />
                    Home
                  </a>{" "}
                  | 
                  <a
                    href="https://www.linkedin.com/in/cameron-angeleri/"
                    target="_blank"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png"
                      alt="LinkedIn"
                      className="me-2 ml-2"
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
                    Accomplished full-stack engineer and technical project
                    leader with a demonstrated history of designing and scaling
                    high-performance data systems in fast-paced, dynamic
                    environments. Proven ability to lead international,
                    cross-functional teams to deliver robust, user-centric
                    solutions that drive business growth and operational
                    excellence. Expertise in architecting scalable backend
                    services, automating complex workflows, and optimizing data
                    pipelines to support machine learning initiatives and
                    enhance product quality.
                    <br></br>
                    Thrives equally in fast-moving startup cultures and
                    structured, established company settings, adapting quickly
                    to evolving priorities and driving cross-team collaboration
                    to meet ambitious goals. Experienced working effectively
                    across remote, hybrid, and in-person environments,
                    leveraging strong communication and project management
                    skills to maintain alignment and productivity. Skilled in
                    Agile frameworks, strategic resource management, and
                    stakeholder collaboration to align technical execution with
                    organizational objectives. Proficient in JavaScript, Python,
                    React, and Flask, with a strong focus on continuous process
                    improvement, innovation, and fostering diverse and inclusive
                    teams. Passionate about leveraging emerging technologies to
                    build impactful, scalable products and engineering
                    operations. .
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
                        <strong>Web Scraping:</strong> Scrapy (expert), Proxy
                        Management (Teleport), Anti-Bot Evasion, Large-Scale
                        Data Ingestion, Data Normalization
                      </li>
                      <li>
                        <strong>Libraries / Frameworks:</strong> Jinja2,React,
                        Flask, Node.js, Express, Tailwind CSS, Bootstrap
                      </li>
                      <li>
                        <strong>Databases:</strong> MySQL, NoSQL, MongoDB
                      </li>
                      <li>
                        <strong>Dev Tools & Platforms:</strong> GitHub, VSCode,
                        AWS (S3, EC2), Notion, Slack, Google Workspace (Docs,
                        Sheets, Drive)
                      </li>
                      <li>
                        <strong>Design & Prototyping:</strong> Figma, Canva,
                        Adobe Creative Suite
                      </li>
                      <li>
                        <strong>CRM & Business Tools:</strong> Salesforce,
                        Microsoft 365
                      </li>
                      <li>
                        <strong>Data Structures & Optimization:</strong> Data
                        Structures & Optimization: Bloom Filters (deduplication
                        at scale), Caching Strategies, RESTful API Design
                      </li>
                      <li>
                        <strong>Other:</strong> Agile/Scrum, Stripe Integration,
                        SEO
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
            <h3>Loti Web Scraping Platform</h3>
            <hr />
            <p>
              <strong>Link:</strong> | Private Repo
            </p>
            <p>Scalable Data Pipeline & Automation System</p>
            <p>
              <ul>
                <li>
                  Engineered and scaled ingestion pipelines 10× to process over
                  25M new items/day across 200+ domains. Automated scheduling
                  and scraping cycles using custom job management scripts and
                  cron-based orchestration.
                </li>
                <li>
                  Led an international engineering team to standardize anti-bot
                  evasion, proxy rotation, and version-controlled spider
                  strategies.
                </li>
                <li>
                  Integrated Bloom filters for scalable deduplication and
                  normalization of raw data for downstream machine learning.
                </li>
                <li>
                  Built robust error handling, logging, and retry logic to
                  ensure continuous uptime despite dynamic site changes and rate
                  limits.
                </li>
                <li>
                  Established collaborative workflows across time zones using
                  GitHub (version control), Slack (team sync), Notion
                  (documentation), and Google Sheets (data QA tracking).
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
              </a>{" "}
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
            <h3>Backend Engineer Intern, promoted to Head of Adult Content Web Scraping</h3>
            <p>Loti | Remote | March 2024 – Present</p>
            <p>
              <ul>
                <li>
                  Led the Web Scraping department, managing a cross-functional
                  international engineering team across time zones.
                </li>
                <li>
                  Architected and scaled web ingestion pipelines from 2.5M to
                  25M+ items/day using Scrapy, Teleport, and AWS Lambda.
                </li>
                <li>
                  Built modular data extraction systems with Bloom filters for
                  deduplication, reducing redundancy by over 80%.
                </li>
                <li>
                  Automated scheduling, deployment, and health monitoring of
                  spiders, improving uptime and delivery efficiency.
                </li>
                <li>
                  Collaborated directly with the CTO and Product teams to shape
                  roadmap priorities and deliver feature-complete data products
                  on schedule.
                </li>
                <li>
                  Maintained robust documentation and onboarding guides to
                  accelerate new engineer ramp-up time by 50%.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Sales Development Representative</h3>
            <p>DocuSign | Seattle, WA | August 2023 – March 2024</p>
            <p>
              <ul>
                <li>
                  Generated qualified sales opportunities through strategic
                  outreach and client engagement in a hybrid remote/in-office
                  setting.
                </li>
                <li>
                  Led discovery calls and delivered tailored product
                  presentations, accelerating sales pipeline growth and client
                  acquisition.
                </li>
                <li>
                  Collaborated cross-functionally with Marketing and Product to
                  align sales messaging and enhance lead conversion rates.
                </li>
                <li>
                  Maintained detailed records in Salesforce CRM, driving
                  data-informed decision-making and sales forecasting accuracy.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Trauma-Informed Yoga Instructor</h3>
            <p>Self-Employed | Seattle, WA | July 2022 – Present</p>
            <p>
              <ul>
                <li>
                  Founded and scaled a wellness brand, launching a high-traffic
                  e-commerce platform and achieving profitability within six
                  months.
                </li>
                <li>
                  Designed and facilitated trauma-informed yoga programs focused
                  on resilience, emotional regulation, and mindfulness.
                </li>
                <li>
                  Integrated cloud-based systems for automated client onboarding
                  and session scheduling, improving user experience.
                </li>
                <li>
                  Delivered personalized coaching to clients, fostering
                  sustainable progress toward mental and physical well-being
                  goals.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Lead Business-to-Business Account Manager</h3>
            <p>Williams Sonoma Inc. | Seattle, WA | January 2020 – July 2022</p>
            <p>
              <ul>
                <li>
                  Drove a $5M rebranding initiative in collaboration with
                  Marketing, Visual Merchandising, and Operations teams.
                </li>
                <li>
                  Led a team of 10 associates, providing mentorship and
                  strategic guidance that resulted in a 150% YoY B2B revenue
                  increase.
                </li>
                <li>
                  Oversaw a portfolio of 500+ business accounts, delivering
                  tailored design solutions and sustaining client satisfaction
                  rates over 95%.
                </li>
                <li>
                  Implemented agile workflows and daily stand-ups to optimize
                  internal communication and project delivery timelines.
                </li>
                <li>
                  Championed remote selling solutions during the pandemic,
                  expanding market reach and diversifying revenue streams.
                </li>
              </ul>
            </p>
          </div>

          <div className="experience">
            <h3>Home Stylist / Key Holder</h3>
            <p>
              Williams Sonoma Inc. | Seattle, WA | March 2018 – January 2020
            </p>
            <p>
              <ul>
                <li>
                  Managed $1.2M in annual retail sales volume, surpassing KPIs
                  and contributing to consistent regional market share growth.
                </li>
                <li>
                  Designed and executed promotional campaigns, boosting store
                  traffic and increasing average transaction size by 10%.
                </li>
                <li>
                  Created visual merchandising and branded content using Adobe
                  Creative Suite, enhancing online engagement by 7%.
                </li>
                <li>
                  Recognized nationally as a top-performing stylist, with 1,200+
                  five-star client reviews and leadership accolades.
                </li>
                <li>
                  Provided in-home design consultations, tailoring solutions to
                  meet high-end residential and commercial client needs.
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
