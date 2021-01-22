import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Row, Col, Container} from 'react-bootstrap'



class Task extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      done: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      done: value
    });

    const task = this.state;
    const memberID = this.props.task.member_id;
    const taskID = this.props.task.id;

    this.props.doneTask(memberID, taskID, task);

    console.log(this.state);
  }

  render() {
        
    return(

        <Row className="task m-3 justify-content-between">
  
              <input className="  m-2 align-middle"
                    name="isDone"
                    type="checkbox"
                    value="newsletter"
                    checked={ this.props.done }
                    onChange={this.handleInputChange}
                />

              { this.state.done? <h3 className="tasks" style={{ textDecorationLine: 'line-through' }}>{this.props.task.title}</h3> : <h3 className="">{this.props.task.title}</h3> } 
          
              <Button className="mr-1" variant="danger" onClick={ () => this.props.removeTask(this.props.task.member_id, this.props.task.id)}>X</Button>
          
        </Row>

    );
  }
}


export default Task;