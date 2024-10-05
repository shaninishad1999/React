
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Layout = () => {
  return (
    <>
    <Container>
      <Row>
        <Col className='bg-success'>1 of 1</Col>
        <Col className='bg-warning'>1 of 1</Col>
        <Col className='bg-success'>1 of 1</Col>
        <Col className='bg-warning'>1 of 1</Col>
        {/* <Col className='bg-success'>1 of 1</Col> */}
      </Row>
      <Row>
        <Col className='bg-warning'>1 of 1</Col>
        <Col className='bg-success'>1 of 1</Col>
        <Col className='bg-warning'>1 of 1</Col>
        <Col className='bg-success'>1 of 1</Col>
        {/* <Col className='bg-success'>1 of 1</Col> */}
      </Row>
    </Container>
    <h1 style={{marginTop:"10px"}}></h1>
    <Container>
      <Row>
        <Col md={2} style={{height:"100px"}} className='bg-success'>First</Col>
        <Col md={2} className='bg-warning'>second</Col>
        <Col md={4} className='bg-success'>third</Col>
        <Col md={2} className='bg-warning'>fourth</Col>
        <Col md={2} style={{height:"100px", backgroundColor:"red"}} >fourth</Col>
        {/* <Col className='bg-success'>1 of 1</Col> */}
      </Row>
      
    </Container>
    </>
    
  )
}

export default Layout