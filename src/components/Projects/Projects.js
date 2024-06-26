import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitapods from "../../Assets/Projects/bitapods.png";
import chemcon from "../../Assets/Projects/chemcon.png";
import mern_estate from "../../Assets/Projects/mern_estate.png";
import terminal from "../../Assets/Projects/terminal.PNG";
import youtube from "../../Assets/Projects/youtube.png";
import sastabazar from "../../Assets/Projects/sastabazar.png";
import golocal from "../../Assets/Projects/golocal.png";

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
              imgPath={golocal}
              isBlog={false}
              title="GoLocal"
              description="GoLocal is an ecommerce website for hawkers(vendors) and customers to sell and buy things with decentralized payment integration.."
              ghLink="https://github.com/biswajit150803/eVendor3"
              demoLink="https://evendorl-1wnf.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sastabazar}
              isBlog={false}
              title="SastaBazar"
              description="This project is built using Next Js and Sanity CLI where users can shop for fruits and add to cart and also payment integration is done using Stripe"
              ghLink="https://github.com/biswajit150803/ecommerce_stripe"
              demoLink="https://ecommerce-stripe-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="A youtube clone made using React JS and Rapid API where users can play videos without ads.It is fully mobile responsive."
              ghLink="https://github.com/biswajit150803/youtube_clone"
              demoLink="https://biswa-youtube-clone.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitapods}
              isBlog={false}
              title="47BitaPods"
              description="47BitaPods is a real estate company website where users can book their coworking spaces from list of available places and time slots."
              ghLink="https://github.com/biswajit150803/47BitaPodsv2.0"
              demoLink="https://47bitapods.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terminal}
              isBlog={false}
              title="Terminal Portfolio"
              description="A portfolio made using HTML,CSS and Javascript which can be interacted through the terminal by the help of commands listed in the terminal.."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://terminalbiswajitportfolio.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern_estate}
              isBlog={false}
              title="BiswaEstate"
              description="BiswaEstate is a real estate company with Google authentication  where users can book esate properties from list of available properties."
              ghLink="https://github.com/biswajit150803/mern_estate"
              demoLink="https://mern-estate-9p6s.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chemcon}
              isBlog={false}
              title="Chemcon"
              description="Chemcon is an official event of Indian Institute Of Chemical Engineers.Here users needed to sign in with their email and get the digital pass for the event.This project was an official project of my college.."
              ghLink="https://github.com/biswajit150803/chemcon"
              demoLink="https://chemcon.co.in"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
