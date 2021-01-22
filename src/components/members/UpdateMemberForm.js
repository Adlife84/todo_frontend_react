import React, {Component} from 'react';
import { Image, Container, Form, Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

class UpdateMemberForm extends Component {

    constructor(props, {match}) {

        super(props, {match});
    
        this.state = {
            memberID: props.match.params.id,
            first_name: "",
            last_name: "",
            role: "",
            phone: "",
            email: "",
            img: "",
            status: "",
            color: ""
          
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/members/' + this.state.memberID)
        .then(response => response.json())
        .then(membersList => {
            this.setState(membersList);
        });
    }

    // Here I try to Update my Member make PUT request to my backend datebase
    handleUpdateMember = (member) => {
    //Checked that I got new Memeber
    console.log(member);

    const data = member;

    fetch('http://localhost:3000/members/' + member.memberID, {
      method: 'PUT', // or 'PUT'
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
}


    handleGetMember = (id) => {
        fetch('http://localhost:3000/members/' + id)
        .then(response => response.json())
        .then(membersList => {
            this.setState({ members: membersList });
        });
      }

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
        this.setState({ tel: e.target.value });
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
        this.handleUpdateMember(this.state);
        this.setState({  }); //Reset input after added it to state
        console.log(this.state);
        window.location.href = '/members';
    }

    render() {
        
        return(
            <Container>
                <Row className="myCard rounded" style={{background: this.state.color}}>
                    <Col md="auto">
                        <h1 className="m-5">Update: <br></br> {this.state.first_name} <br></br> {this.state.last_name}</h1>
                        <h2 className="m-5">{this.state.role}</h2>
                        <Image className="m-5 rounded-circle"  src={this.state.img} alt={this.state.role} />
                    </Col>
                    <Col >
                        <Form className="m-5" onSubmit={this.handleSubmit}>
                            <Form.Group >
                                <Form.Label>First name</Form.Label>
                                <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.first_name}
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
                                {/* <Form.Control className="mb-2"
                                    type="text"
                                    value={this.state.status}
                                    onChange={this.handleValueChangeStatus}
                                    placeholder="Enter your status"
                                    /> */}
                                
                                <Form.Control 
                                            className="col-sm-6 col-12 mb-2"
                                            as="select"
                                            value={this.state.status}
                                            onChange={this.handleValueChangeStatus}>
                                    <option value="true">Available</option>
                                    <option value="false">Not Available</option>
                                </Form.Control>

                                <Form.Label>Color</Form.Label>
                                <Form.Control 
                                            className="col-sm-6 col-12 mb-2"
                                            as="select"
                                            value={this.state.color}
                                            onChange={this.handleValueChangeColor}>
                                    <option value="rgba(137, 165, 255, 0.5)">Blue</option>
                                    <option value="rgba(240, 136, 40, 0.5)">Orange</option>
                                    <option value="rgba(255, 15, 19, 0.5)">Red</option>
                                    <option value="rgba(255, 251, 15, 0.5)">Yellow</option>
                                    <option value="rgba(204, 0, 190, 0.5)">Pink</option>
                                    <option value="rgba(53, 153, 0, 0.5)">Green</option>
                                </Form.Control>
                            </Form.Group>
                
                            <Button variant="success"   className="mr-3" type="submit" value="Update">Update</Button>
                            <NavLink to="/members">
                                <Button   variant="primary"  type="submit" value="Update">Cancel</Button>
                            </NavLink>
                        </Form>
                    </Col>
                </Row>
            </Container>
        
        );
    }
}

export default UpdateMemberForm;