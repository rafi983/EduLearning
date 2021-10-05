import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import eduimg from "../../imgs/education.png";
import img from "../../imgs/header-img.png";
import Course from "../Course/Course";
import "./Home.css";
// This is home page

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 6)));
  }, []);

  const handleClick = () => {
    history.push("/courses");
  };

  return (
    <div>
      <div className="header-container">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <h1>
                Welcome to <span className="biggest">Biggest</span> online
                learning platform
              </h1>
              <p>
                Education is important to any nations.We provide quality
                learning to our students as content quality is our main
                priority.
              </p>
              <Button variant="warning" onClick={handleClick}>
                View Our Courses
              </Button>
            </Col>
            <Col md={6} className="header-img">
              <Image src={img} fluid alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="text-center">Some of our Courses</h1>
      <Row xs={1} md={3} className="g-4">
        {courses?.map((course) => (
          <Course key={course.title} course={course}></Course>
        ))}
      </Row>
      <Button variant="warning" onClick={handleClick} className="btn-regular">
        View All Courses
      </Button>

      <div className="edulearn">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6} className="education-img">
            <Image src={eduimg} fluid alt="" />
          </Col>
          <Col md={6}>
            <h1>
              Guiding Learners to the
              <br /> path of success
            </h1>

            <Row className="mt-4">
              <Col md={5}>
                <i className="fas fa-school edu-icon mb-2"></i>
                <h2 className="mb-3">Why Edulearn ?</h2>
                <p>
                  Since 2002, We, Edulearn to provide education for those people
                  who honestly wants to learn.Day by day, we got positive
                  feedback by our students and enrich our contents to help our
                  graduates become successful in their own life.About 15000
                  succesful students got job after completing Our courses. So
                  There are many reasons to join Us 😎
                </p>
              </Col>
              <Col md={1}></Col>
              <Col md={5}>
                <i className="fas fa-bullseye edu-icon mb-2"></i>
                <h2 className="mb-3">Our Goal</h2>
                <p>
                  Our Mission is to eradicate young generation to be self
                  employed, so that they can gather gather skill from our
                  courses and then they can implement thsese skills in their
                  life and shine. By 2025, We wants to enlarge our organization
                  in many countries like many branches in Asia, Middleeast.So
                  far we provide services in europe.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
