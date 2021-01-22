import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => (
  <header>
     <Navbar className="mb-5" bg="primary" variant="dark">
       <Container >
          <Navbar.Brand className="navHeader">ToDo App for a Dream Team of StartUp</Navbar.Brand>
          <Nav className="">
            <NavLink className="nav-link" exact to="/members">
              <Button variant="outline-light">All Members</Button>
            </NavLink>
            <NavLink className="nav-link" to="/members/new">
              <Button variant="outline-light">New Member</Button>
            </NavLink>
          </Nav>
       </Container>
    </Navbar> 
  </header>
);

export default Header;