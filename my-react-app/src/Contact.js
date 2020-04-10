import React from 'react';

const Contact = ({ contacts, deleteContact }) => {
  // const contactList = contacts.map(contact => {
  //  return (contact.age >= 24)? (
  //     <div className="contact" key={contact.id}>
  //       <div>Name: {contact.name}</div>
  //       <div>Age: {contact.age}</div>
  //       <div>Address: {contact.address}</div>
  //     </div>
  //   ): null
  // });
  return <div className="contact-list">{
  
  contacts.map((contact) => {
   return (contact.age >= 24)? (
      <div className="contact" key={contact.id}>
        <div>Name: {contact.name}</div>
        <div>Age: {contact.age}</div>
        <div>Address: {contact.address}</div>
        <button onClick={() => {deleteContact(contact.id)}}>Delete Contact</button>
      </div>
    ): null
  })


  }</div>;
};

export default Contact;
