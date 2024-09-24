import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "./assets/anna.webp"
import img2 from "./assets/birds.jpg"
import img3 from "./assets/king parat.webp"


function App() {
  

  return (
    <>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <img src={img1} />
    <img src={img2} />
    <img src={img3} />
    

      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, culpa!</h1>
    </>
  )
}

export default App
