import React from 'react';
import Member from './Member';
import AddMemberForm from './AddMemberForm';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, Container} from 'react-bootstrap'



const MembersContainer = (props) => {
  let members = props.members.map((member) => {
    return <Member   
                    first_name={member.first_name}
                    last_name={member.last_name}
                    img={member.img}
                    tel={member.tel}
                    color={member.color}
                    email={member.email}
                    role={member.role}
                    id={member.id}
                    key={member.id}
                    removeMember={props.removeMember}
                    addTask={props.addTask}
            />
  }); 
  return (
      <Container >
        <Row className="justify-content-center m-5">
            <h1>My Start UP - Dream Team</h1>
        </Row>
        <Row>
           {members}
        </Row>
      </Container>
  );
}

export default MembersContainer;