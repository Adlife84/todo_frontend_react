import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">Dream Team</i></span>
    <ul className="nav">
      <li className="nav-item"><NavLink className="nav-link" exact to="/members">All Members</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/members/new">New Member</NavLink></li>
    </ul>    
  </header>
);

export default Header;