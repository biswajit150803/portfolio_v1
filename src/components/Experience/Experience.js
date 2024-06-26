import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiWorkplace } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
const Experience = () => {
  const linecolor = "#fcfcfc";
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 data-aos="fade-right" style={{
              marginBottom: "3vh",
              color:"#8f55b9"
            }}>
              My Work Experience
            </h1>
            <h5 style={{
              color: "gray",
              marginBottom: "8vh",
            }}>What I Have Done So Far</h5>
            <VerticalTimeline lineColor={linecolor}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                date={"Aug'23 - Sept'23"}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                  Frontend Developer Intern
                </h3>
                <h6
                  data-aos="fade-right"
                  style={{
                    color:"gray"
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/thebengalstudio/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    The Bengal Studio
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left",
                  lineHeight:"1.5"
                }}>
                  <li>
                    Developing and maintaining web applications using React.js
                    and other related technologies.
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers, and other developers to create
                    high-quality products.
                  </li>
                  <li>
                    Implementing responsive design and ensuring cross-browser
                    compatibility.
                  </li>
                  <li>
                    Participating in code reviews and providing constructive
                    feedback to other developers.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"Jan'23 - April'23"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                  Full Stack Developer Intern
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/iqapex-labs/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    IQApex Labs
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  Contributed to a dynamic and innovative team specializing in MERN (MongoDB, Express.js, React, Node.js) stack development.
                  </li>
                  <li>
                    Worked on database architecture using MongoDB to store and manage data efficiently, contributing to a reliable and high-performance backend.
                  </li>
                  <li>
                  Engineered a robust and scalable server using Node.js, optimizing performance and ensuring the efficient handling of client requests.
                  </li>
                  <li>
                  Designed and implemented RESTful APIs to enable seamless communication between the front-end and back-end systems.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"Aug'23 - July'24"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                  Backend Lead
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/developer-students-club-hit/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    Google Developer Student's Club-HIT
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  Took sessions on backend development.
                  </li>
                  <li>
                  Organized and managed events for the community.
                  </li>
                  <li>
                  Working on projects with the community and building a project for college authorities.
                  </li>
                  <li>
                  Conducting workshops and sessions.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"Dec'22 - Jan'24"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                  Student Coordinator
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/geeks-united-hitk/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    Geeks United Club,HITK
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  Organized and managed events for the community.
                  </li>
                  <li>
                  Working on projects with the community and building a project for college authorities.
                  </li>
                  <li>
                  Conducting workshops and sessions as well as coding competitions for students
                  </li>
                </ul>                
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 data-aos="fade-right" style={{
              marginBottom: "3vh",
              color:"#8f55b9"
            }}>
              My Achievements
            </h1>
            <h5 style={{
              color: "gray",
              marginBottom: "8vh",
            }}>What I Have Achieved So Far</h5>
            <VerticalTimeline lineColor={linecolor}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                date={"July'23"}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
              Postman Best Backend Project Winner
                </h3>
                <h6
                  data-aos="fade-right"
                  style={{
                    color:"gray"
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/thebengalstudio/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    Hack4Bengal 2.0
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left",
                  lineHeight:"1.5"
                }}>
                  <li>
                  Selected as the best backend project by postman out of 100+ other projects.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"July'23"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                Shardeum Best Blockchain Project Winner
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/iqapex-labs/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    Hack4Bengal 2.0
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  Selected as the best blockchain project by Shardeum out of 100+ other projects.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"November'23"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                 3rd Runners Up In Hackathon
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/developer-students-club-hit/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    HackHeritage'23
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  Secured 3rd runners up rank from amonst 120 teams at HackHeritage held at my college Heritage Institute of Technology.
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date={"Dec'22 - Jan'24"}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #934cce5e",
                }}
                iconStyle={{ background: "#7329a0", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3
                  data-aos="fade-right"
                >
                  Finalists 
                </h3>
                <h6
                  data-aos="fade-right"
                >
                  <a
                    href="https://www.linkedin.com/company/geeks-united-hitk/"
                    style={{
                      color: "#a0a0a0",
                      textDecoration: "none",
                    }}
                  >
                    HackOverFlow 6.0 at Aarohan NIT,Durgapur
                  </a>
                </h6>
                <ul data-aos="fade-right" style={{
                  textAlign:"left"
                }}>
                  <li>
                  We were among the top 10 teams selected for the final round of HackOverFlow 6.0 at Aarohan NIT,Durgapur.
                  </li>
                </ul>                
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;
