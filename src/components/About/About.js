import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import "./About.css";

// about page

const About = () => {
  return (
    <Container>
      <Row className="mt-5 about-container">
        <Col md={6}>
          <h1>About Us</h1>
          <p>
            Hello,This is an online e-learning platform where all dedicated
            learners come to enrich their knowledge.We are like a organization
            which we provide different services to our students simultaneously.
          </p>
          <Button variant="info">About Us</Button>
        </Col>
        <Col md={6}>
          <YoutubeEmbed embedId="sv5hK4crIRc" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
