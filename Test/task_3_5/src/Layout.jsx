import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home | </Nav.Link>
            <Nav.Link as={Link} to="/insert">Insert | </Nav.Link>
            <Nav.Link as={Link} to="/display">Display </Nav.Link>
    
          
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
<center>

      <footer style={{position:"fixed" ,bottom:"0px", left:"40%"}}>© 2025 Your Company. All rights reserved.</footer>
</center>
    </>
  );
};

export default Layout;
