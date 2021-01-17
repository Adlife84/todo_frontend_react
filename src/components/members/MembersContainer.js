import React from 'react';
import Client from './Client';


const MembersContainer = (props) => {
  let clients = props.members.map((client) => {
    return <Client   first_name={client.first_name}
                   last_name={client.last_name}
                   img={client.img_src}
                   tel={client.tel}
                   email={client.email}
                   address={client.address}
                   key={client.id} />
  }); 
  return (
    <div className="clients">
     
        {clients}    
     
    </div>
  );
}

export default MembersContainer;