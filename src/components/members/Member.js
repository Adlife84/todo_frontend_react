import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Col} from 'react-bootstrap'

const Member = (props) => (
    <Col className="mb-5">
      <Card className="myCard m-auto text-center h-100" style={{width: '350px', background: props.color}}>
        <Card.Img className="mt-4 rounded-circle mx-auto"  src={props.img} alt={props.role} />
          <Card.Body >
            <Card.Title>
              <NavLink style={{color: '#002366'}}
                      
                      to={`/members/${props.id}/tasks`}>
                      <h1>{props.first_name} <br></br> 
                      {props.last_name}</h1>
              </NavLink>
            </Card.Title>
            <Card.Text>
              
              {props.role}
            </Card.Text>

            <NavLink to={`/members/${props.id}/tasks`}>
              <Button variant="outline-primary" className="button mr-3"> Look all Tasks </Button>
            </NavLink>
            <Button variant="outline-danger" className="button" onClick={ () => props.removeMember(props.id)}> Remove </Button>
          
          </Card.Body>
      </Card>
    </Col>
 
);

export default Member;