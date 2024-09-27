import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import img1 from "../src/images/work1.jpg";
import img2 from "../src/images/work2.jpg";
import img3 from "../src/images/work3.jpg";

const Works = () => {
  return (
    <>
      <div className="work">
        <Container>
          <div>
            <h2 style={{ textAlign: "center", fontSize: "60px" }}> My Works</h2>
            <div className="cardContainer">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Candle</Card.Title>

                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Paint</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Packet</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Candle</Card.Title>

                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Paint</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Packet</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              
             
           
              
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Works;
