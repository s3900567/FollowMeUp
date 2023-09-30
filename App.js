// App.js
import React from 'react';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      name: 'John Doe',
      favorites: true,
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      lastContact: '2023-09-15',
      tagging: ['Friend', 'Work'],
      dateAdded: '2023-09-10',
    },
    // Add more contacts as needed
  ];

  return (
    <div className="App">
      <h1>Contact List</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
