import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Blog from "../Blog/Blog";

// blogs component

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./blogs.JSON")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center my-4">Our Blogs</h1>
      <Row md={2}>
        {blogs.map((blog) => (
          <Blog key={blog.title} blog={blog}></Blog>
        ))}
      </Row>
    </div>
  );
};

export default Blogs;
