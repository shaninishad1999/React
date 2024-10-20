import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarTop = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home |</Nav.Link>
          <Nav.Link as={Link} to="/about">About |</Nav.Link>
          <Nav.Link as={Link} to="/services">Service |</Nav.Link>
          <Nav.Link as={Link} to="/placement">Placement |</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery |</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
