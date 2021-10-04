import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/home"
              style={{
                textDecoration: "none",
                color: "#080808",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Edulearn
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "#080808",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#080808",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
              >
                About
              </NavLink>

              <NavLink
                to="/courses"
                style={{
                  textDecoration: "none",
                  color: "#080808",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
              >
                Courses
              </NavLink>

              <NavLink
                to="/blogs"
                style={{
                  textDecoration: "none",
                  color: "#080808",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
              >
                Blogs
              </NavLink>

              <NavLink
                to="/teams"
                style={{
                  textDecoration: "none",
                  color: "#080808",
                  fontWeight: "bold",
                  marginRight: "1rem",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "purple",
                }}
              >
                Teams
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
