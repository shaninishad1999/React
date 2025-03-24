import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Link to="/home">Home | </Link>
      <Link to="/about">About | </Link>
      <Link to="/services">Services | </Link>
      <Link to="/join">Join</Link>

      <hr />

      <Outlet />

      <hr />

      <p>www.footer.com</p>
    </div>
  );
}

export default Layout;
