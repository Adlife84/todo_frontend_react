import React, {Component} from 'react';

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
        this.props.addMember(props.memberID, this.state);
        this.setState({ member: '' }); //Reset input after added it to state
    }

    render() {
        
        return(
            
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeFirstName}
                        placeholder="Enter a first name"
                    />
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeLastName}
                        placeholder="Enter a last name"
                    />
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValueChangeRole}
                        placeholder="Enter your role"
                    />
                    <input 
                        type="submit"
                        value="Add player"
                    />
                </form>
        
        );
    }
}

export default AddMemberForm;