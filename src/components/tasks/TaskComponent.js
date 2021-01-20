import React from 'react';
import Task from './Task';
import { NavLink } from 'react-router-dom';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTaskForm from './AddTaskForm'

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
    <Container>
        <h1 className="MemberTitle">{props.state.member.first_name} {props.state.member.last_name}</h1>
        <span><NavLink exact to={ "/members/" + props.state.memberID }>Update</NavLink></span>
        <p>{props.state.member.role}</p>
        {tasks}
        <AddTaskForm memberID={props.state.memberID} addTask={props.handleAddTask}/>
    </Container>
  );
}

export default TaskComponent;