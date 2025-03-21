import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand as={Link} to="/home" className="fs-3">
        Randy Fitness
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/home" className="fs-5">
          Accueil
        </Nav.Link>
        <Nav.Link as={Link} to="/program" className="fs-5">
          Programme
        </Nav.Link>
        <Nav.Link as={Link} to="/about" className="fs-5">
          À propos
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/"
          className="fs-5"
          onClick={() => handleLogout()}
          style={{ cursor: "pointer" }}
        >
          Se déconnecter
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
