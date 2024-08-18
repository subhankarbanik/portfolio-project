import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/sanjukumari-tech/Baidu-Bandits_072.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://be-1fit.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Fitness App: Befit Baidu Bandits Personalized Fitness App</h3>
              <p>The Health and Wellness Project is a comprehensive application designed to promote a healthier lifestyle by integrating physical activity tracking, medical appointments, mental health support, and exercise scheduling. This project aims to provide users with a holistic approach to their health and wellness, leveraging modern technology to facilitate healthier habits and improved well-being.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>JavaScript</li> <li>Redux</li> <li>HTML5</li><li>CSS3</li><li>ChakraUI</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/sathwikreddy122/Basket-Heaven.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-commerce: Basket Heaven</h3>
              <p>Bigbasket is known for its extensive product selection, competitive prices, and reliable delivery service, making it a popular choice for busy urban consumers looking for a convenient way to shop for groceries online.Basket Heaven is a clone project of BigBasket where we have tried to replicate some of the features of the original website.</p>
            </div>
            <footer> <ul className="tech-list"> <li>JavaScript</li> <li>JsonServer</li> <li>HTML5</li><li>CSS3</li><li>SASS</li> <li>Bootstrap</li></ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/subhankarbanik/Project-LearnWise.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://khan-academy-clone-b34.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>EdTech: Project LearnWise</h3>
              <p> This project is a clone of the landing page of the renowned EdTech platform, Khan Academy.Khan Academy provides practice exercises, instructional videos, and a personalized learning dashboard, allowing learners to study at their own pace both inside and outside the classroom.</p>

            </div>
            <footer> <ul className="tech-list">  <li>JavaScript</li><li>HTML5</li><li>CSS3</li><li>SASS</li>Responsive Web Design</ul> </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Akhil97Negi/Ludo_Junction.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://ludo-deploy.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Online Game: Ludo Junction</h3>
               <p>This project is a real-time Ludo game that lets users play with others globally. Players can enjoy classic Ludo gameplay, chat with each other during the game, and spectators can watch ongoing matches, making it a dynamic and interactive experience for all.</p>
            </div>
            <footer> <ul className="tech-list"> <li>JavaScript</li><li>Express</li> <li>Node</li><li>MongoDB</li> <li>HTML5</li><li>CSS3</li><li>Bootstrap</li></ul> </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}