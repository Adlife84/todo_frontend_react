import React, {Component} from 'react';

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
    }

    render() {
        
        return(
            <div>
                <h1>Add New Member</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <fieldset>
                        <input 
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleValueChangeFirstName}
                            placeholder="Enter a first name"
                        />
                        <input 
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleValueChangeLastName}
                            placeholder="Enter a last name"
                        />
                         <input 
                            type="text"
                            value={this.state.role}
                            onChange={this.handleValueChangeRole}
                            placeholder="Enter your role"
                    />
                    </fieldset>

                    <fieldset>
                        <input 
                            type="text"
                            value={this.state.tel}
                            onChange={this.handleValueChangePhone}
                            placeholder="Enter your phone"
                        />
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleValueChangeEmail}
                            placeholder="Enter your email"
                        />
                    </fieldset>

                    <fieldset>
                        <input 
                            type="text"
                            value={this.state.img}
                            onChange={this.handleValueChangeUrl}
                            placeholder="Enter a URL of img"
                        />
                        <input 
                            type="text"
                            value={this.state.status}
                            onChange={this.handleValueChangeStatus}
                            placeholder="Enter your status"
                        />
                        <input 
                            type="text"
                            value={this.state.color}
                            onChange={this.handleValueChangeColor}
                            placeholder="Enter your color"
                        />
                    </fieldset>
                   
                   
                    <input 
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        
        );
    }
}

export default UpdateMemberForm;