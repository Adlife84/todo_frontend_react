import React from 'react';
import Member from './Member';


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
                    />
  }); 
  return (
    <div className="clients">
     
        {members}    
     
    </div>
  );
}

export default MembersContainer;