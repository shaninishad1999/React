import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Form from "./Form";
// import NewForm from "./NewForm"; // Fixed import
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Layout from "./Layout";
import NewForm from "./NewFrom";
import Display from "./Display";

const App = () => {
  return (
    <Router>
      <>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
              <Nav.Link as={Link} to="/display">Display</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/insert" element={<NewForm />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
