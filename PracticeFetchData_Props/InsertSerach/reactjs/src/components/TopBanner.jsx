
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/b1.jpg";
import img2 from "./images/b2.jpg";
import img3 from "./images/b3.jpg";
import Container from "react-bootstrap/Container";

const TopBanner=()=>{
    return(
        <>
        
        <Container>
        <Carousel>
      <Carousel.Item>
        <img src={img1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} height="100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} height="100%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    </Container>
        </>
    )
}
export default TopBanner;