import './App.css';
import React, { Component } from 'react';
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';

//App my components
import Header from './components/Header';
import MembersContainer from './components/members/MembersContainer';
import TasksContainer from './components/tasks/TasksContainer';
import NotFound from './components/NotFound';
import Test from './components/test/Test';
import Tasks from './components/test/Tasks'


class App extends Component {

  state = {
    members: [],
    tasks: []
}

componentDidMount() {
    fetch('http://localhost:3000/members')
    .then(response => response.json())
    .then(membersList => {
        this.setState({ members: membersList });
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
                    <MembersContainer members={this.state.members}/>
                    )}
          />
          <Route path='/members/:id/tasks' component={TasksContainer}/>
          <Route exact path='/test'component={Test} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
