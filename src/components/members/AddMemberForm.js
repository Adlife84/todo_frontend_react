import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddMemberForm extends Component {
    state = {
     
    };

    handleValueChangeFirstName = (e) => {
        this.setState({ first_name: e.target.value });
    }
    
    handleValueChangeLastName = (e) => {
        this.setState({ last_name: e.target.value }); //{ member: data }
    }

    handleValueChangeRole = (e) => {
        this.setState({ role: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hi from submite', this.state)
        this.props.addMember(this.props.memberID, this.state);
        this.setState({ member: '' }); //Reset input after added it to state
    }

    render() {
        
        return(
            
                <Form.Group onSubmit={this.handleSubmit}>
                    <Form.Control 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeFirstName}
                        placeholder="Enter a first name"
                    />
                    <Form.Control 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeLastName}
                        placeholder="Enter a last name"
                    />
                    <Form.Control 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeRole}
                        placeholder="Enter your role"
                    />
                    <Form.Control 
                        type="submit"
                        value="Add player"
                    />
                </Form.Group>
        
        );
    }
}

export default AddMemberForm;