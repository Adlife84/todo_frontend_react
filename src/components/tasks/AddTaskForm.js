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
            <Form className="row mt-3" onSubmit={this.handleSubmit}>
                <Col >
                    <Form.Control className=""
                        type="text"
                        value={this.state.title}
                        onChange={this.handleValueChangeTitle}
                        placeholder="Enter title of task"
                        required
                        />
                </Col>
                <Col>
                    <Button variant="success" type="submit">Add New Task</Button>
                </Col>
            </Form>
        );
    }
}

export default AddTaskForm;