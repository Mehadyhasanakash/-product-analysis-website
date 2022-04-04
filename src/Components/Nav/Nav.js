import React from 'react';
import { Link } from 'react-router-dom';
// import "./Nav.css"
// import * as ReactBootStrap from "react-bootstrap"

const Nav = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">Navbar</Link>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/reviews">Reviews</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/deshBord">DeshBord</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            
          </ul>
        
        </div>
      </div>
    </nav>
  
    );
};

export default Nav;