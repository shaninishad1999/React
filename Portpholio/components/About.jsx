import React from "react";
import aboutimg from "../src/images/hero.jpeg"; // Correct the import

const About = () => {
  return (
    <>
      <div id="about">
        <h2 style={{ textAlign: "center", fontSize: "60px" }}>About Me</h2>

        <div className="container" style={containerStyle}>
          <div className="left-side" style={leftSideStyle}>
            <img
              src={aboutimg}
              alt="About Me"
              style={{ ...imageStyle, animation: "borderAnimation 2s infinite" }}
            />
          </div>

          <div className="right-side" style={rightSideStyle}>
            <h3 style={{ fontSize: "36px" }}>Hi, I'm Shanideval</h3>
            <p style={paragraphStyle}>
              I'm a passionate full-stack developer with a love for creating
              dynamic and responsive web applications. With a background in
              both front-end and back-end technologies, I strive to build
              seamless user experiences and solve complex problems.
            </p>
            <p style={paragraphStyle}>
              In my spare time, I enjoy exploring new technologies, working on
              personal projects, and contributing to open-source initiatives. My
              goal is to continually learn and improve while making a positive
              impact through my work.
            </p>
          </div>
        </div>

        <style>{`
          @keyframes borderAnimation {
            0% {
              border: 5px solid transparent;
              box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
            }
            50% {
              border: 5px solid orange;
              box-shadow: 0 0 15px rgba(255, 165, 0, 1);
            }
            100% {
              border: 5px solid transparent;
              box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
            }
          }
        `}</style>
      </div>
    </>
  );
};

// Inline styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
};

const leftSideStyle = {
  flex: "1",
  padding: "20px",
};

const rightSideStyle = {
  flex: "1",
  padding: "20px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "10px",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
};

export default About;
