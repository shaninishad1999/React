import "../Layout/style.css";

import { Link,Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h1>This is Layout Page</h1>
    <Link to="home">Home</Link>
    <Link to="display">Display</Link>
    <Link to="insert">Insert</Link>
    <hr  size="4" color="red" />
    <Outlet/>
    </>
  );
};

export default Layout;
