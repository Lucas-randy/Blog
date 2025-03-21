import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBarLogin() {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand as={Link} to="/" className="fs-3">
        Blog
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" className="fs-5">
          Se connecter
        </Nav.Link>
        <Nav.Link as={Link} to="/register" className="fs-5">
          S'identifier
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBarLogin;
