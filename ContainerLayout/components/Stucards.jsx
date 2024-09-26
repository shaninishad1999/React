import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import img1 from "../src/images/food image.jpg"
import img2 from "../src/images/king parat.webp"
import img3 from "../src/images/nature.webp"
const Stucard = () => {
  return (
    <>
    <div id="cardmain" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>


   
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default Stucard;
