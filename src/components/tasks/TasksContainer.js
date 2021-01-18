import React, { Component } from 'react';
import Task from './Task';
import TaskComponent from './TaskComponent';



class TasksContainer extends Component {  

  constructor(props) {
    super(props);
    
    this.state = {
        tasks: [],
        memberID : props.match.params.id
    };
  }

  componentDidMount(){
    fetch(`http://localhost:3000/members/${this.state.memberID}/tasks`)
    .then(data => data.json())
    .then(data => {
      this.setState({ tasks: data });
    })
 
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render(){
    return (
      <div className="instructor-grid">

        <div className="instructor-wrapper">

       hi <TaskComponent tasks={this.state.tasks}/>

        </div>

      </div>
    );
  }
}

export default TasksContainer;




// const TasksContainer = ({match}) => {
  


//   function fetchData(id) {
//     return fetch(`http://localhost:3000/members/${id}/tasks`)
//                 .then(res => res.json())
//   }

//   let data = fetchData(id);
//   console.log(data);
//   // let tasks = data.map((task) => {
//   //   return <Task   
//   //                   title={task.title}
//   //                   done={task.done}
//   //                   key={task.id} 
//   //                   />
//   // }); 
//   return (
//     <div className="tasks">
     
//        asdasd  {id}
     
//     </div>
//   );
// }

