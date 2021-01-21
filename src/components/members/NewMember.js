import React, {Component} from 'react';
import { Image, Container, Form, Col, Row, Button } from 'react-bootstrap'
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
<Container>
                <Row className="myCard rounded" style={{background: 'rgba(255, 255, 255, 0.5)'}}>
                    <Col md="auto">
                        <h1 className="mt-5">New person: <br></br> {this.state.first_name} {this.state.last_name}</h1>
                        <Image className="m-5 rounded-circle"  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt={this.state.role} />
                    </Col>
                    <Col >
                        <Form className="m-4" onSubmit={this.handleSubmit}>
                            <Form.Group >
                                <Form.Label>First name</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    onChange={this.handleValueChangeFirstName}
                                    placeholder="Enter a first name"
                                    />
                                <Form.Label>Last name</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.last_name}
                                    onChange={this.handleValueChangeLastName}
                                    placeholder="Enter a last name"
                                    />
                                <Form.Label>Role</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.role}
                                    onChange={this.handleValueChangeRole}
                                    placeholder="Enter your role"
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.tel}
                                    onChange={this.handleValueChangePhone}
                                    placeholder="Enter your phone"
                                    />
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleValueChangeEmail}
                                    placeholder="Enter your email"
                                    />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>URL for avatar img</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.img}
                                    onChange={this.handleValueChangeUrl}
                                    placeholder="Enter a URL of img"
                                    />
                                <Form.Label>Status</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.status}
                                    onChange={this.handleValueChangeStatus}
                                    placeholder="Enter your status"
                                    />
                                {/* <Form.Check 
                                    type="checkbox" 
                                    label="Available" 
                                    value={this.state.status}
                                    />
                                <Form.Control as="select">
                                    <option>true</option>
                                    <option>false</option>
                                </Form.Control> */}

                                <Form.Label>Color</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.color}
                                    onChange={this.handleValueChangeColor}
                                    placeholder="Enter your color"
                                    />
                            </Form.Group>
                
                            <Button   className="" type="submit" value="Update">Add New</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        
        );
    }
}

export default NewMember;