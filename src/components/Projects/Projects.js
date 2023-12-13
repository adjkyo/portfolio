import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TierTv  from "../../Assets/Projects/TierTv .png";
import AIpics from "../../Assets/Projects/AIpics.png";
import InfoBlog from "../../Assets/Projects/InfoBlog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIpics}
              isBlog={false}
              title="AIapp: An AI image generator website"
              description=" A website build with Node.js, Express.js, MongoDB, React.js and Tailwind that generates everything from memes and art to beautiful UI/UXdesigns"
              ghLink="https://github.com/Adio20102/AIapp"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InfoBlog}
              isBlog={false}
              title="An informative web page about the AI Chat GPT-3"
              description="A blog page build with Node.js and React which is an informative page about chat gpt3."
              ghLink="https://github.com/Adio20102/gpt3"
              demoLink="https://ai-informative.netlify.app/"
            />
          </Col>

          <Col md={4} className="Tier Tv">
            <ProjectCard
              imgPath={TierTv}
              isBlog={false}
              title="TierTv (Ongoing)"
              description="It is a streaming service build with MongoDB, Express API, ReactJs, NodeJs & JWT for watching movies and other web shows."      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
