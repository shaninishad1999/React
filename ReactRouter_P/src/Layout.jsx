import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div
        style={{
          height: "90px",
          backgroundColor: "green",
          color: "white",
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
        }}
      >
        
        <div
          style={{ textAlign: "center", fontSize: "40px", marginLeft: "10px" }}
        >
          <Link style={{ textDecoration: "none", margin: "10px" }} to="home">
            Home
          </Link>
          <Link style={{ textDecoration: "none", margin: "10px" }} to="about">
            About
          </Link>
          <Link style={{ textDecoration: "none", margin: "10px" }} to="resume">
            Resume
          </Link>
          <Link style={{ textDecoration: "none", margin: "10px" }} to="blog">
            Blog
          </Link>
          <Link style={{ textDecoration: "none", margin: "10px" }} to="contact">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
      <p>www.cybrom.com</p>
    </>
  );
};

export default Layout;
