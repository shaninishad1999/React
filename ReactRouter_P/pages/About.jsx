import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>
        This is about page
        <div
          style={{ border: "4px solid red", height: "300px", width: "600px" }}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio
            consectetur qui quia quibusdam rerum corporis est ullam deleniti
            totam repellat suscipit eveniet accusamus vel blanditiis atque
            minus, pariatur expedita?
            {/* <link to={home} /> */}
          </p>
        </div>
      </h1>
    </>
  );
};

export default About;
