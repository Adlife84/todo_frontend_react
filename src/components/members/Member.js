import React from 'react';
import { NavLink } from 'react-router-dom';

const Member = (props) => (
  <li className="client">
    <img className="dish-img" src={props.img} alt="client" />
    <div>
      <li><NavLink to={`/members/${props.id}/tasks`}><h3>{props.first_name} {props.last_name}</h3></NavLink></li>
    </div>
    <button>Edit</button>
    <button>Remove</button>
  </li>
);

export default Member;