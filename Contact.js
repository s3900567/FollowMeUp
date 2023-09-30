// src/components/Contact.js
import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      {/* Add more contact details as needed */}
    </div>
  );
};

export default Contact;
