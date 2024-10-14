import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1> Welcome to About Page</h1>
      <table border="1" width="90%" align="center">
        <tr>
          <td width="20%">
            <Link to="aboutcompany">About Company</Link>
            <br />
            <br />
            <Link to="aboutproduct">About Product</Link>
          </td>
        <td width="80%">
          <Outlet />
        </td>
        </tr>
      </table>
    </>
  );
}

export default About;
