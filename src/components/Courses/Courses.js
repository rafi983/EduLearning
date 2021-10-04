import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Course from "../Course/Course";

// courses component for all the courses we provide

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleClickToHome = () => {
    history.push("/home");
  };

  return (
    <div>
      <h1 className="text-center">All of our Courses</h1>
      <h4 className="text-center">
        Number of courses we provide: {courses.length}
      </h4>
      <Row xs={1} md={3} className="g-4">
        {courses?.map((course) => (
          <Course key={course.title} course={course}></Course>
        ))}
      </Row>
      <Button
        variant="warning"
        className="btn-regular"
        onClick={handleClickToHome}
      >
        Back to home
      </Button>
    </div>
  );
};

export default Courses;
