import React, { Component } from 'react';
import TaskComponent from './TaskComponent';



class TasksContainer extends Component {  

  constructor(props) {
    super(props);
    
    this.state = {
        memberID : props.match.params.id,
        member: {},
        tasks: []

    };
  }

  componentDidMount(){
    Promise.all([
    
      // Make fetch to get Member from members/:id data from API
      fetch(`http://localhost:3000/members/${this.state.memberID}`)
            .then(data => data.json())
            .then(data => {
              this.setState({ member: data });
            })
        
            .catch(error => {
              console.log('Error fetching and parsing data', error);
            }),

      // Make fetch to get all tasks from Member by GET members/:id/tasks
      fetch(`http://localhost:3000/members/${this.state.memberID}/tasks`)
      .then(data => data.json())
      .then(data => {
        this.setState({ tasks: data });
      })
  
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
    ])
    
  }

  render(){
    return (
      <div className="instructor-grid">

        <div className="instructor-wrapper">

        <TaskComponent state={this.state}/>

        </div>

      </div>
    );
  }
}

export default TasksContainer;