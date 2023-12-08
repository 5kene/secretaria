import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <ul>
        <Link className='li-a' to="/sesion">Login</Link>
        <Link className='li-a' to="/registro">Register</Link>
      </ul>
    </header>
  );
}

export default Navbar;
