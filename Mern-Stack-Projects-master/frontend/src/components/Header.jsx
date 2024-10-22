import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <img src="/path-to-your-logo.png" alt="TechHub Logo" className="logo-img" />
            TechHub Pvt Ltd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/insert" className="nav-link-custom">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="/display" className="nav-link-custom">
                Display
              </Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link-custom">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/update" className="nav-link-custom">
                Update
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        /* Navbar Styles */
        .custom-navbar {
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          background-color: #343a40;
        }

        .navbar-brand-custom {
          font-family: 'Arial', sans-serif;
          font-size: 1.6rem;
          color: #fff !important;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          transition: color 0.4s ease-in-out, transform 0.6s ease;
        }

        .navbar-brand-custom:hover {
          color: #4fc3f7 !important; /* New hover color */
          transform: scale(1.15);
        }

        .logo-img {
          width: 40px;
          margin-right: 10px;
        }

        .nav-link-custom {
          color: #e1bee7 !important;
          margin-left: 20px;
          transition: color 0.4s ease-in-out, transform 0.4s ease-in-out;
        }

        .nav-link-custom:hover {
          color: #4fc3f7 !important; /* New hover color */
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Header;
