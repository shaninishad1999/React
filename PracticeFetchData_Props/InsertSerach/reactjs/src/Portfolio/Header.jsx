import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Container>
    <Navbar bg="primary" data-bs-theme="dark">
        
          <Navbar.Brand href="#home" style={{fontFamily:"verdana",fontWeight:'bold',color:"InfoText"}}>Kamlesh Shah</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Skills</Nav.Link>
            <Nav.Link href="#pricing">Certificates</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
          </Nav>
        
      </Navbar>
      </Container>
    
    </>
  )
}

export default Header;
