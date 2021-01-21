import './App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';
import { Container } from 'react-bootstrap'

//App my components
import Header from './components/Header';
import MembersContainer from './components/members/MembersContainer';
import TasksContainer from './components/tasks/TasksContainer';
import NotFound from './components/NotFound';
import NewMember from './components/members/NewMember';
import UpdateMemberForm from './components/members/UpdateMemberForm';



class App extends Component {

  state = {
    members: []
  }

  componentDidMount() {
      fetch('http://localhost:3000/members')
      .then(response => response.json())
      .then(membersList => {
          this.setState({ members: membersList });
      });
  }

  

  // Here I try to delete my Members from state and databse 
  handleRemoveMember = (id) => {
    //Checked that I got id from Memebers
    console.log(id);

    // // Remove data from state
    // this.setState(prevState => {
    //     return {
    //         members: prevState.members.filter(p => p.id !== id)
    //     };

    // });

  // Remove data from database by DELETE request with id
  fetch('http://localhost:3000/members/' + id, {
    method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))

  }



  // Here I try to add my new Member object to state and after thet make POST request to my backend datebase
  handleAddMember = (member) => {
      //Checked that I got new Memeber
      console.log(member);

      const data = member;

      fetch('http://localhost:3000/members', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }




  render(){
    return(
      <BrowserRouter>
          <Header />
          <Switch>
            <Route
                  exact path='/members'
                    render={(props) => (
                      <MembersContainer 
                                        members={this.state.members}
                                        removeMember={this.handleRemoveMember}
                                        addMember={this.handleAddMember}
                                        />
                      )}
            />
            <Route
                  exact path='/members/new'
                    render={(props) => (
                      <NewMember 
                                        addMember={this.handleAddMember}
                                        />
                      )}
            />
            {/* <Route
                  exact path='/members/:id'
                    render={(props, {match}) => (
                      <UpdateMemberForm 
                                        addMember={this.handleAddMember}
                                        />
                      )}
            /> */}
            <Route path='/members/:id/tasks' component={TasksContainer}/>
            <Route path='/members/:id' component={UpdateMemberForm}/>
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
