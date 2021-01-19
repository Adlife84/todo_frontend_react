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

  handleRemoveTask = (memberID, taskID) => {
    //Checked that I got id from Items
    console.log(memberID, taskID);
  
    // Remove data from state
    this.setState(prevState => {
        return {
            tasks: prevState.tasks.filter(p => p.id !== taskID)
        };
  
    });
  
    // Remove data from database by DELETE request with id
    fetch('http://localhost:3000/members/' + memberID + '/tasks/' + taskID, {
      method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
  }
  

  render(){
    return (
      <div className="instructor-grid">

        <div className="instructor-wrapper">

          <TaskComponent state={this.state} removeTask={this.handleRemoveTask}/>

        </div>

      </div>
    );
  }
}

export default TasksContainer;