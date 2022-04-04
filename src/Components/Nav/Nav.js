import React from 'react';
import { Link } from 'react-router-dom';
// import * as ReactBootStrap from "react-bootstrap"

const Nav = () => {
    return (
        <div>

          <nav>
            <Link to="/home"> Home</Link>
            <Link to="/reviews"> Reviews</Link>
            <Link to="/deshBord">DeshBord</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
          </nav>

  </div>
  
    );
};

export default Nav;