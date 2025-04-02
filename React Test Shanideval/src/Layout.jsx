import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed to avoid conflict
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <BootstrapNavbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/counter">Counter App</Nav.Link>
            <Nav.Link as={Link} to="/themechange">ThemeChange</Nav.Link>
            <Nav.Link as={Link} to="/todolist">ToDoList App</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
      
      <Container className="mt-4">
        <Outlet />
      </Container>

      <footer className="mt-5 py-3 bg-light text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;