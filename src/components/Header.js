import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'

const Header = () => (
  <header>
     <Navbar className="mb-5" bg="primary" variant="dark">
      <Navbar.Brand >ToDo App: Dream Team</Navbar.Brand>
      <Nav className="justify-content-center">
        <NavLink className="nav-link" exact to="/members">All Members</NavLink>
        <NavLink className="nav-link" to="/members/new">New Member</NavLink>
      </Nav>
    </Navbar> 
  </header>
);

export default Header;