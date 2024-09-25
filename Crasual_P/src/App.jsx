import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import img1 from './assets/nature.webp';
import img2 from './assets/rastorant.jpg';
import img3 from './assets/react.js-img.png';

const App = () => {
  // Define index using useState
  const [index, setIndex] = useState(0);

  // Handle selecting a carousel slide
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex); // Update the index to the selected one
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default App;
