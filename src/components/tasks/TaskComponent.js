import React from 'react';
import Task from './Task'

const TaskComponent = (props) => {
  let tasks = props.tasks.map((task) => {
    return <Task title={task.title}
                   done={task.done}
                   key={task.id} />
  }); 
  return (
    <div>
      <ul>
        {tasks}    
      </ul>
    </div>
  );
}

export default TaskComponent;