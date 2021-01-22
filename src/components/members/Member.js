import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Col} from 'react-bootstrap'

const Member = (props) => (
    <Col className="mb-5">
      <Card className="myCard m-auto text-center h-100" style={{width: '350px', background: props.color}}>
        <Card.Img className="m-5 mt-4 rounded-circle mx-auto"  src={props.img} alt={props.role} />
          <Card.Body style={{background: 'rgb(255, 255, 255)'}}>
            <Card.Title>
              {props.status? <p>🔵  Available</p> : <p>🔴  Not Available</p> }
              
              <NavLink className="card-title cardMember-title" style={{color: '#002366'}}
                      to={`/members/${props.id}/tasks`}>
                      <h1>{props.first_name} <br></br> 
                      {props.last_name}</h1>
              </NavLink>
            </Card.Title>
            <Card.Text>
              <h5>{props.role}</h5>
            </Card.Text>
            <NavLink to={`/members/${props.id}/tasks`}>
              <Button variant="primary" className="button mr-3"> Look all Tasks </Button>
            </NavLink>
            <Button variant="danger" className="button" onClick={ () => props.removeMember(props.id)}> Remove </Button>
          
          </Card.Body>
      </Card>
    </Col>
 
);

export default Member;