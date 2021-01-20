import React from 'react';

const Task = (props) => (
  <li className="task">
    <div>
      <h3>{props.title}</h3>
    </div>
    <button className="button" onClick={ () => props.removeTask(props.memberID, props.taskID)}> Remove </button>
    <button>Edit</button>
  </li>
);

export default Task;