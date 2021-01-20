import React, { Component } from 'react';
import TaskComponent from './TaskComponent';
import AddTaskForm from './AddTaskForm';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


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




  // Here I try to add my new Task object to Member making a POST request to my backend datebase
  handleAddTask = (memberID, task) => {
    //Checked that I got new task object { title: "Do something", done: "false"}
    console.log(task);

    const data = task;
    // POST request http://localhost:3000/members/1/tasks
    fetch('http://localhost:3000/members/' + memberID + '/tasks', {
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

    this.componentDidMount()
  }
  

  render(){
    return (
   
          <TaskComponent 
                          state={this.state} 
                          removeTask={this.handleRemoveTask}
                          handleAddTask={this.handleAddTask}
                          />
      
    );
  }
}

export default TasksContainer;