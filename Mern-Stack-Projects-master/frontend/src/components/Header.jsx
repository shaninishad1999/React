import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            TechHub Pvt Ltd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/insert" className="nav-link">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="/display" className="nav-link">
                Display
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/searchbyname" className="nav-link">
                SearchByName
              </Nav.Link>
              <Nav.Link as={Link} to="/update" className="nav-link">
                Update
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        /* Navbar Styles */
        .navbar-brand {
          font-size: 1.5rem;
          color: #fff !important;
          transition: color 0.3s ease-in-out;
        }

        .navbar-brand:hover {
          color: #4fc3f7 !important;
        }

        .nav-link {
          color: #ccc !important;
          margin-left: 15px;
          transition: color 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default Header;
