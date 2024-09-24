import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import girl from "./assets/women flower.jpg"
import p from "./assets/king parat.webp"
import k from "./assets/nature.webp"
const App=()=>{

  return(
    <>
    
    <Navbar bg="info" data-bs-theme="warning">
        <Container>
          <Navbar.Brand href="#home">Shanideval</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Get In Touch</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img src={girl} alt="" />
      <img src={p} alt="" />
      <img src={k} alt="" />
    </>
  )
}

export default App
