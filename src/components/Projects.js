import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import gemini_clone from "../assets/img/gemini_clone.png";
import echoify from "../assets/img/echoify.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Finance Tech",
      description: "Design & Development",
      imgUrl: projImg1,
      url : "https://my-finance-tech.netlify.app/"
    },
    {
      title: "To-Do-App",
      description: "Task Management",
      imgUrl: projImg2,
      url : "https://mitali-to-do-app.netlify.app/"
    },
    {
      title: "The Brew Box",
      description: "Business Startup",
      imgUrl: projImg3,
      url : "https://thebrewbox.netlify.app/"
    },

    {
      title: "Gemini-Clone",
      description: "Gemini-clone developed using React and Gemini API",
      imgUrl: gemini_clone,
      url : "https://gemini-assistant.netlify.app/"
    },

    {
      title: "Spotify Clone",
      description: "Spotify clone using React JS and Tailwind CSS",
      imgUrl: echoify,
      url : "https://echoify.netlify.app/"
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The Project Section is where my passion for innovation comes to life! Here, I showcase projects that blend creativity with cutting-edge technology, demonstrating my ability to turn ideas into impactful solutions. Each project is a testament to my enthusiasm for tackling challenges and pushing the boundaries of what's possible.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
