import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">Dodo Pizza</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/members">All Members</NavLink></li>
      <li><NavLink to="/members/new">New Member</NavLink></li>
      <li><NavLink to="/test">Test</NavLink></li>
    </ul>    
  </header>
);

export default Header;