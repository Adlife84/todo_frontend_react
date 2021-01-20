import React, {Component} from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class NewMember extends Component {
    state = {
        first_name: "",
        last_name: "",
        role: "",
        phone: "",
        email: "",
        img: "",
        status: "",
        color: ""
    };

    handleValueChangeFirstName = (e) => {
        this.setState({ first_name: e.target.value });
    }
    
    handleValueChangeLastName = (e) => {
        this.setState({ last_name: e.target.value });
    }

    handleValueChangeRole = (e) => {
        this.setState({ role: e.target.value });
    }

    handleValueChangePhone = (e) => {
        this.setState({ phone: e.target.value });
    }

    handleValueChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handleValueChangeUrl = (e) => {
        this.setState({ img: e.target.value });
    }

    handleValueChangeStatus = (e) => {
        this.setState({ status: e.target.value });
    }

    handleValueChangeColor = (e) => {
        this.setState({ color: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hi from submite', this.state)
        this.props.addMember(this.state);
        this.setState({  }); //Reset input after added it to state
        console.log(this.state);
    }

    render() {
        
        return(
            <div>
                <h1>Add New Member</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                            <Form.Label>Main information</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={this.state.first_name}
                                    onChange={this.handleValueChangeFirstName}
                                    placeholder="Enter a first name"
                                />
                                
                                <Form.Control 
                                    type="text"
                                    value={this.state.last_name}
                                    onChange={this.handleValueChangeLastName}
                                    placeholder="Enter a last name"
                                />
                                <Form.Control 
                                    type="text"
                                    value={this.state.role}
                                    onChange={this.handleValueChangeRole}
                                    placeholder="Enter your role"
                            />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                            <Form.Label>Contact information</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={this.state.phone}
                                    onChange={this.handleValueChangePhone}
                                    placeholder="Enter your phone"
                                />
                                <Form.Control 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleValueChangeEmail}
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                            <Form.Label>Settings</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={this.state.img_url}
                                    onChange={this.handleValueChangeUrl}
                                    placeholder="Enter a URL of img"
                                />
                                <Form.Control 
                                    type="text"
                                    value={this.state.status}
                                    onChange={this.handleValueChangeStatus}
                                    placeholder="Enter your status"
                                />
                                <Form.Control 
                                    type="text"
                                    value={this.state.color}
                                    onChange={this.handleValueChangeColor}
                                    placeholder="Enter your color"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" value="Add Member">Add Member</Button>
                </Form>
            </div>
        
        );
    }
}

export default NewMember;