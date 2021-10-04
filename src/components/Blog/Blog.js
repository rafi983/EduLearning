import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Blog.css";

const Blog = (props) => {
  const { image, title, desc } = props.blog;
  return (
    <Col>
      <Card className="blog-card" style={{ margin: "2rem", height: "500px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="card-content">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Blog;
