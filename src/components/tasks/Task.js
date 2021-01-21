import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Row, Col} from 'react-bootstrap'

const Task = (props) => (
  <Row className="task m-3">
      <Col >

        <div className="tasks">{props.title}</div>
      </Col>
      <Col >
        <Button className="mr-1" variant="danger" className="button" onClick={ () => props.removeTask(props.memberID, props.taskID)}>X</Button>
      </Col>
  </Row>
);

export default Task;