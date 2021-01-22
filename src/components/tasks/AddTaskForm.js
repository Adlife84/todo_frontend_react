import React, {Component} from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
class AddTaskForm extends Component {
    state = {
        title: '',
        done: false
    };

    handleValueChangeTitle = (e) => {
        console.log(e.target.value);
        this.setState({ title: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hi from submite', this.state)
        this.props.addTask(this.props.memberID, this.state);
        this.setState({ title: '' }); //Reset input after added it to state
    }

    render() {
        return(  
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="row mt-5">
                    <Col>
                        <Form.Control className=""
                                type="text"
                                value={this.state.title}
                                onChange={this.handleValueChangeTitle}
                                placeholder="Enter title of task"
                                required
                                />
                    </Col>
                       
                    <Button variant="success" type="submit">Add New Task</Button>
                </Form.Group>
            </Form> 
        );
    }
}

export default AddTaskForm;