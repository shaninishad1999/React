import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum
        fuga sequi neque veniam voluptates asperiores architecto libero, iste,
        perspiciatis repellat minima. Iure praesentium ipsum quo autem vel
        cupiditate doloremque?
      </h1>
      <table  width="80%" border="1">
        <tr>
            <td>
                <Link to="aboutcompany">About Company</Link>
                <Link to="aboutproduct">About Product</Link>   
            </td>
           
            <td width="80%">
            <table >

                <Outlet/>
            </table>

            </td>
        </tr>
      </table>
    </>
  );
};

export default About;
