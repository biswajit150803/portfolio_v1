import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Biswajit Ghosh </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am currently a Final Year CSE Student at{" "}
            <a
              href="https://www.heritageit.edu/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <span className="purple">
                Heritage Institute of Technology, Kolkata.
              </span>
            </a>
            <br />
            I have done internships at <span className="purple">IQApex Labs, Kolkata</span>  and at <span className="purple">The Bengal Studio, Kolkata</span> as Developer intern.
            <br />
            I am currently the Backend Lead at Google Developer Student Club Heritage Institute of Technology.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion!"{" "}
          </p>
          <footer className="blockquote-footer">Biswajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
