import { Link, Outlet } from "react-router-dom";
const subject=["hell","new","double","game"]
const Layout = () => {
  const subFind = subject.map((key) => {
    return (
      <>
        <li>{key}</li>
      </>
    );
  });
  return (
    <>
      <nav>
        <Link to="home">Home</Link> | {/* Correct paths and display text */}
        <Link to="about">About</Link> | 
        <Link to="contact">Contact</Link> | {/* Fixed "About" to "Contact" */}
        <Link to="resume">Resume</Link> | 
        <Link to="works">Works</Link> {/* Fixed "work" to "works" */}
      </nav>

      {/* The <Outlet> renders the child route components */}
      <ol>{subFind}</ol>
      <Outlet />

      <footer>
        <p>www.cybrom.com</p>
      </footer>
    </>
  );
};

export default Layout;
