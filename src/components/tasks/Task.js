import React from 'react';

const Task = (props) => (
  <li className="task">
    <div>
      <h3>{props.title}</h3>
    </div>
    <button>Edit</button>
    <button>Remove</button>
  </li>
);

export default Task;