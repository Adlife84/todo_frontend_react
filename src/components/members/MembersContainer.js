import React from 'react';
import Member from './Member';
import { NavLink } from 'react-router-dom';
import AddMemberForm from './AddMemberForm';


const MembersContainer = (props) => {
  let members = props.members.map((member) => {
    return <Member   
                    first_name={member.first_name}
                    last_name={member.last_name}
                    // img={member.img_src}
                    // tel={member.tel}
                    // email={member.email}
                    // address={member.address}
                    id={member.id}
                    key={member.id}
                    removeMember={props.removeMember} 
            />
  }); 
  return (
    <div className="clients">
         {members}
         <AddMemberForm addMember={props.addMember}/>
    </div>
  );
}

export default MembersContainer;