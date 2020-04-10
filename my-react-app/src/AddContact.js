import React, {Component} from 'react';

class AddContact extends Component {
    state = {
        name: null,
        age: null,
        address: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" onChange={this.handleChange} />
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" onChange={this.handleChange} />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
export default AddContact;