import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Col} from 'react-bootstrap'

const Member = (props) => (
    <Col sm>
      <Card className="mb-3 " style={{color: "#000"}}>
        <Card.Img class="rounded-circle mx-auto d-block"  src={props.img} alt={props.role} />
          <Card.Body>
            <Card.Title>
              <NavLink to={`/members/${props.id}/tasks`}><h3>{props.first_name} {props.last_name}</h3></NavLink>
            </Card.Title>
            <Card.Text>
              {props.role}
            </Card.Text>
          </Card.Body>

          <Button variant="outline-danger" className="button" onClick={ () => props.removeMember(props.id)}> Remove </Button>
          <Button variant="outline-primary" >Edit</Button>
      </Card>
    </Col>
);

export default Member;