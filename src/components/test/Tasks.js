import React from 'react';

const Tasks = ({match}) => {

  let id = match.params.id;
  console.log(id);
  let tasksList = [];
  
  fetch(`http://localhost:3000/members/${id}/tasks`)
  .then(response => response.json())
  .then(tasksList => console.log(tasksList))
  .then(tasksList => tasksList)
 


  return (
  <div className="main-content not-found">
    <h2>Test Tasks page</h2>
  </div>
  );
};

export default Tasks;