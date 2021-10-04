import React from "react";
import { Col, Row } from "react-bootstrap";
import imgone from "../../imgs/img1.jpg";
import imgtwo from "../../imgs/img2.jpg";
import imgthree from "../../imgs/img3.jpg";
import imgfour from "../../imgs/img4.jpg";
import imgfive from "../../imgs/img5.jpg";
import imgsix from "../../imgs/img6.jpg";
import "./Teams.css";

const Teams = () => {
  return (
    <div className="container mt-5">
      <h1>Our Few team members</h1>
      <p>
        To run our organization, we have a large family of our team members.
        They are working relentlessly to provide assistance to our learners.
      </p>
      <Row className="g-4">
        <Col md={4}>
          <img src={imgone} alt="" className="teacher-img" />
          <h2>Sam</h2>
          <p>Graphic Designer</p>
        </Col>
        <Col md={4}>
          <img src={imgtwo} alt="" className="teacher-img" />
          <h2>Alan</h2>
          <p>Js Developer</p>
        </Col>
        <Col md={4}>
          <img src={imgthree} alt="" className="teacher-img" />
          <h2>Michael</h2>
          <p>Fashion Designer</p>
        </Col>
        <Col md={4}>
          <img src={imgfour} alt="" className="teacher-img" />
          <h2>Samantha</h2>
          <p>Security Expert</p>
        </Col>
        <Col md={4}>
          <img src={imgfive} alt="" className="teacher-img" />
          <h2>Gomez</h2>
          <p>AI Expert</p>
        </Col>
        <Col md={4}>
          <img src={imgsix} alt="" className="teacher-img" />
          <h2>Samuel</h2>
          <p>Photographer</p>
        </Col>
      </Row>
    </div>
  );
};

export default Teams;
