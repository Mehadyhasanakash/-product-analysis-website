import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
// import * as ReactBootStrap from "react-bootstrap"

const Nav = () => {
    return (
        <div className='container-fluid'>

          <nav className='nav-container'>
            <Link className='nav-link active nav-item' to="/home"> Home</Link>
            <Link className='nav-link active nav-item' to="/reviews"> Reviews</Link>
            <Link className='nav-link active nav-item' to="/deshBord">DeshBord</Link>
            <Link className='nav-link active nav-item' to="/blogs">Blogs</Link>
            <Link className='nav-link active nav-item' to="/about">About</Link>
          </nav>

  </div>
  
    );
};

export default Nav;