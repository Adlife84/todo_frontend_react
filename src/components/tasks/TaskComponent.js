import React from 'react';
import Task from './Task';
import { NavLink } from 'react-router-dom';
import { Col, Row, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTaskForm from './AddTaskForm'

const TaskComponent = (props) => {
  let tasks = props.state.tasks.map((task) => {
    return <Task   task={task}
                   memberID={props.state.memberID}
                   removeTask={props.removeTask}
                   doneTask={props.doneTask}
                   key={task.id}
                   />
           
  }); 

  return (
    <Container className="animate__animated animate__bounce myCard mt-5 rounded" style={{background: props.state.member.color}}>
        <Row >
          <Col>
            <img className="mt-5 rounded-circle mx-auto d-block"  src={props.state.member.img} alt={props.role} />
          </Col>
          <Col>
            <h1 className="mt-5 member-title">{props.state.member.first_name} {props.state.member.last_name}</h1>
            <h3 className="mb-3 member-role">{props.state.member.role}</h3>
            {props.state.member.status? <p className="mb-5 rounded-circle mx-auto d-block">🔵  Available</p> : <p className="mb-5">🔴 Not Available</p> }
            <NavLink exact to={ "/members/" + props.state.memberID }>
              <Button variant="primary" className="button"> Update Profile </Button>
            </NavLink>
          </Col>
        </Row>
        <Col className="p-5">
          <h4>List of tasks:</h4>
          {tasks}
          <AddTaskForm memberID={props.state.memberID} addTask={props.handleAddTask}/>
        </Col>
    </Container>
  );
}

export default TaskComponent;