import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";

// Declaring course component for every single course

const Course = (props) => {
  const { title, desc, image, price } = props.course;

  return (
    <Col>
      <Card style={{ margin: "2rem", height: "500px" }}>
        <Card.Img variant="top" src={image} className="course-img" />
        <Card.Body className="card-content">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text className="price fs-2">{price} $</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
