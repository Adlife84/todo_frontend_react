
import React, { Component } from 'react';

class Members extends React.Component {
   
    render() {
        console.log(this.state.members);
        return (
            <ul>
                {this.state.members.map((member) => (
                    <li key={member.id}>{member.first_name} {member.last_name}</li>
                ))}
            </ul>
        )
    }
}

export default Members;