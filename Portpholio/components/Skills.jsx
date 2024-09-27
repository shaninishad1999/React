import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
const Skills = () => {
  return (
    <>
     <Container>
      <div className="skilcontainer">
        <h2 style={{ textAlign: "center", fontSize: "60px" }}>My Skills</h2>

        <div className="skilcircle"></div>
       
        <div className="skilprogressbar">
          <div>
            Javascript - (85%)
            <ProgressBar animated now={80} />
            Node Js - (90%)
            <ProgressBar animated now={85} />
            React Js - (80%)
            <ProgressBar animated now={82} />
            React Native - (70%)
            <ProgressBar animated now={90} />
          </div>
          <div>
            Html & Css - (95%)
            <ProgressBar animated now={88} />
            Photoshop - (75%)
            <ProgressBar animated now={80} />
            Illustrator - (70%)
            <ProgressBar animated now={80} />
            Figma - (90%)
            <ProgressBar animated now={80} />
          </div>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Skills;
