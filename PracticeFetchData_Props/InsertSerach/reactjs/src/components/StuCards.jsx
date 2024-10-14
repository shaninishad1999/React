import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import a from "../images/img1.jpg";
import b from "../images/img2.jpg";
import c from "../images/img3.jpg";

const StuCards = () => {
  return (
    <>
    <Container>
      <div id="cardData">

        <Card style={{ width: "18rem" }}>
          <img src={a} width="300px" height="100px" />
          <Card.Body>
            <Card.Title>Engineer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <img src={b} width="300px" height="100px" />
          <Card.Body>
            <Card.Title>Full-Stack</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <img src={c} width="290px" height="100px" />
          <Card.Body>
            <Card.Title>Developer</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      </Container>
    </>
  );
};
export default StuCards;
