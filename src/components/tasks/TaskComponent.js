import React from 'react';
import Task from './Task'

const TaskComponent = (props) => {
  let tasks = props.state.tasks.map((task) => {
    return <Task title={task.title}
                   done={task.done}
                   key={task.id}
                   taskID={task.id}
                   memberID={props.state.memberID}
                   removeTask={props.removeTask}
                   />
           
  }); 

  return (
    <div>
        <h1>{props.state.member.first_name} {props.state.member.last_name}</h1>
        <p>{props.state.member.role}</p>

        <ul>
            {tasks}
        </ul>
    </div>
  );
}

export default TaskComponent;