import React, {Component} from 'react';

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
            
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.title.value}
                        onChange={this.handleValueChangeTitle}
                        placeholder="Enter title of task"
                    />
                    <input 
                        type="submit"
                        value="Add task"
                    />
                </form>
        
        );
    }
}

export default AddTaskForm;