import React from 'react';

const Client = (props) => (
  <li className="client">
    <img className="dish-img" src={props.img} alt="client" />
    <div>
      <h3>{props.first_name} {props.last_name}</h3>
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <p>{props.address}</p>
    </div>
    <button>Edit</button>
    <button>Remove</button>
  </li>
);

export default Client;