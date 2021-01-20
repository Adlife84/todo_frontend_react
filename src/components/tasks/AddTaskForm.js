import React, {Component} from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
class AddTaskForm extends Component {
    state = {
        title: ''
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
            <Form className="row" onSubmit={this.handleSubmit}>
                <Form.Control className="col-8"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleValueChangeTitle}
                    placeholder="Enter title of task"
                />
                <Button className="col-4" type="submit">Add task</Button>
            </Form>
        );
    }
}

export default AddTaskForm;