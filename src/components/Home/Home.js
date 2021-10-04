import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
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
        <h1 className="header-title">Welcome To EduLearning</h1>
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
    </div>
  );
};

export default Home;
