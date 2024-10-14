import Container from "react-bootstrap/Container";
import a from "../Portfolio/images/myimage.jpg";

function Homesec() {
  return (
    <>
      <Container>
        <div
          style={{
            color: "Black",
            fontFamily: "verdana",
            background: "aqua",
            height: "80vh",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              height: "220px",
              width: "220px",
            //   border: "4px solid",
              borderRadius: "50%",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <div style={{marginLeft:"250%"}}>

            <img
              src={a}
              width="200px"
              height="200px"
              style={{ borderRadius: "50%", textAlign: "center" }}
              />
              </div>
          </div>
          <h3>Web Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, similique?</p>
        </div>
      </Container>
      
    </>
  );
}

export default Homesec;
