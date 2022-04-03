import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

const Nav = () => {
    return (
        <div>
            <ReactBootStrap.Navbar bg="dark" variant="dark">
    
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link to="/home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/Reviews">Reviews</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/DeshBord">DeshBord</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/Blogs">Blogs</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link to="/About">About</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar>
        </div>
    );
};

export default Nav;