import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row style={{ marginLeft: "2rem", padding: "3rem 0" }}>
          <Col md={5}>
            <h3>About Us</h3>
            <p className="w-75">
              This is an online e-learning platform where thousands of learners
              learn.
            </p>
            <p>
              <i className="fas fa-home me-2"></i> Chicago, Illinois
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i> edulearning@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i> 123 444 0087
            </p>
          </Col>

          <Col md={4}>
            <h3>Quick Link</h3>
            <div>
              <p>Home</p>
              <p>About</p>
              <p>Teams</p>
              <p>Courses</p>
              <p>Term @ Conditions</p>
            </div>
          </Col>
          <Col md={3}>
            <h2>Our Courses</h2>
            <div>
              <p>Photography</p>
              <p>Graphic Design</p>
              <p>Artificial Intelligence</p>
              <p>PharmaCeutical</p>
              <p>Web Development</p>
              <p>Programming</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
