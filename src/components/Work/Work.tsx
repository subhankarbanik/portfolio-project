import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import masaiImage from "../../assets/masaiImage.png";
import ischoolconnectImage from "../../assets/iSchoolConnectImage.png";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Work() {
  return (
    <Container id="project">
      <h2>Work Experience</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://www.masaischool.com/"
                target="_blank"
                rel="noreferrer"
                style={{ 
                  color: "#91b1e6", 
                  fontSize: "30px", 
                  fontWeight: "bold",
                }}
              >
                Masai School
              </a>
              <a
                href="https://www.masaischool.com/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={masaiImage}
                  alt="Masai School"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </header>
            <div className="body">
              <h3>Software Engineer (Aug 2021-Dec 2023)</h3>
              <p>
                Engineered scalable backend features using Express.js and TRPC,
                including AI-based practice tools with ChatGPT API integration,
                resulting in a 10% increase in user engagement actively used by
                30K+ students.
              </p>
              <p>
                Collaborated with operations team to enhance user experience by
                building a dashboard with real-time charts using React.js,
                Tailwind CSS, Material UI, and Chakra UI.
              </p>
              <p>
                Refactored and optimized frontend code for better performance
                and maintainability, and developed an AI-enabled chat feature
                using Socket.IO in a microservice architecture.
              </p>
              <p>
                Designed RESTf ul APIs such as integrated SaaS Zoom API,
                managing backend logic and data operations with MongoDB and
                storing assets in AWS S3 for dynamic content delivery.
              </p>
              <p>
                Deployed applications on AWS EC2, utilized Load Balancer for
                service routing, implemented f unctional and non-f unctional
                comprehensive testing for API reliability, and maintained
                detailed technical documentation.
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>React</li> <li>JavaScript</li> <li>Express</li> <li>Typescript</li><li>TRPC</li> <li>HTML5</li>
                <li>CSS3</li>
                <li>Material UI</li>
                <li>Chakra UI</li>
                <li>Socket.IO</li>
                <li>MongoDB</li>
                <li>AWS</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a
                href="https://ischoolconnect.com/"
                target="_blank"
                rel="noreferrer"
                style={{ 
                  color: "#91b1e6", 
                  fontSize: "30px", 
                  fontWeight: "bold",
                }}
              >
                iSchoolConnect
              </a>
              <a
                href="https://ischoolconnect.com/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={ischoolconnectImage}
                  alt="Masai School"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </header>
            <div className="body">
              <h3>Technical Support Consultant (Aug 2023-Dec 2023)</h3>
              <p>
              Collaborate with product & analytics teams to implement technical solutions based on client or internal requirements.
              </p>
              <p>
              Provided product walkthroughs, demos, and technical consultation to prospective or existing clients.
              </p>
              <p>
              Analyze customer feedback to suggest data-driven enhancements.Used data and product analytics tools to track user behavior, performance, and identify areas for improvement.
              </p>
              <p>
              Partner with Sales, Marketing, Engineering, and Customer Success teams to ensure consistent product experience.
              </p>
              
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>SQL</li> <li>Excel</li> <li>CRM</li> <li>Power BI</li><li>Customer Experience</li><li>Counselling</li><li>Notion</li><li>Google Sheets</li>
                
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
