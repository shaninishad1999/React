import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link> |<Link to="about">About</Link> |
      <Link to="contact">Contact</Link> |
      <hr size="4" color="blue" />
      <Outlet />
      <hr size="4" color="blue" />
      <p> www.cybrom.com</p>
    </>
  );
};

export default Layout;
