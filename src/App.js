import './App.css';
import React, { Component } from 'react';
import MembersContainer from './components/members/MembersContainer';

class App extends Component {

  state = {
    members: []
}

componentDidMount() {
    fetch('http://localhost:3000/members')
    .then((response) => response.json())
    .then(membersList => {
        this.setState({ members: membersList });
    })
}

  render(){
    return(
      <MembersContainer members={this.state.members}/>
    )
  }
}



export default App;
