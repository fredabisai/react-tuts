import React, {Component} from 'react';
import Contact from './Contact';
import AddContact from './AddContact';


class App extends Component {
  state = {
    contacts: [
      {name: 'Malimbi', age: 22, address: 'Dar es salaam, Tanzania', id: 1},
      {name: 'Dominic', age: 25, address: 'Kigoma, Tanzania', id: 2},
      {name: 'Daniel', age: 24, address: 'Arusha, Tanzania', id: 3},
    ]
  }
  addContact = (contact) => {
    contact.id = Math.random() * 20;
    let contacts = [...this.state.contacts, contact];
    this.setState({
      contacts: contacts
    });
  }
  deleteContact = (id) => {
    let contacts = this.state.contacts.filter(contact => {
        return contact.id !== id
    });
    this.setState({
      contacts: contacts
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello there</h1>
        <p>Welcome :)</p>
        <Contact deleteContact={this.deleteContact} contacts={this.state.contacts} />
        <AddContact addContact={this.addContact} />
       
      </div>
    );
  }
 
}

export default App;
