import React from 'react';
import { NavLink } from 'react-router-dom';

const Member = (props) => (
  <div className="client">
    <img className="dish-img" src={props.img} alt="client" />
    <div>
      <li><NavLink to={`/members/${props.id}/tasks`}><h3>{props.first_name} {props.last_name}</h3></NavLink></li>
      <p>{props.role}</p>
    </div>
    <button className="button" onClick={ () => props.removeMember(props.id)}> Remove </button>
    <button>Edit</button>
  </div>
);

export default Member;