import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/food image.jpg";
import img2 from "./images/king parat.webp";
import img3 from "./images/nature.webp";

function App() {
  // State to keep track of the active index
  const [index, setIndex] = useState(0);

  // Handler for changing the active index
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* Carousel Component */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            src={img1}
            alt="First slide"
            style={{ width: "100%", height: "700px", objectFit: "cover" }} // Adjust image styling as needed
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            alt="Second slide"
            style={{ width: "100%", height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            alt="Third slide"
            style={{ width: "100%", height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
