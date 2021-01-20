import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Row, Col} from 'react-bootstrap'

const Task = (props) => (
  <Row className="task">
      <p className="col-8">{props.title}</p>
      <Button className="col-2" variant="outline-primary" >Edit</Button>
      <Button className="col-2" variant="outline-danger" className="button" onClick={ () => props.removeTask(props.memberID, props.taskID)}> Remove </Button>
  </Row>
);

export default Task;