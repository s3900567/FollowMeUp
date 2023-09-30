// ContactList.js
import React, { useState } from 'react';
import CreateContact from './CreateContact';
import './index.css'; // Import the CSS file

function ContactList() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarVisible, setSidebarVisible] = useState(true); //Initial visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]); // Initialize contacts as empty array

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); //Toggle Visibility
  }

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleAddContact = (newContact) => {
    // Add the new contact to the contacts List
    setContacts([...contacts, newContact]);
    handleToggleModal(); //Close the modal after adding the contact
  }

  return (
    <div className={`contact-list ${sidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
        <button className="toggle-sidebar-button" onClick={handleToggleSidebar}>
          {sidebarVisible ? 'Menu' : 'Menu'}
        </button>
      {/* Sidebar */}
      <div className="sidebar">
      <div className="sidebar-logo">Your Logo</div>
        <div className="sidebar-menu">
          <div
            className={`sidebar-item ${activeTab === 'dashboard' && 'active'}`}
            onClick={() => handleTabClick('dashboard')}
          >
            Dashboard
            <div className="sub-menu">
              <div>Tasks</div>
              <div>Emails</div>
              <div>Messages</div>
            </div>
          </div>
          <div
            className={`sidebar-item ${activeTab === 'chat' && 'active'}`}
            onClick={() => handleTabClick('chat')}
          >
            Chat
          </div>
          <div
            className={`sidebar-item ${activeTab === 'settings' && 'active'}`}
            onClick={() => handleTabClick('settings')}
          >
            Settings
          </div>
          <div
            className={`sidebar-item ${activeTab === 'contact-support' && 'active'}`}
            onClick={() => handleTabClick('contact-support')}
          >
            Contact Support
          </div>
          <div className="sidebar-item">Login/Logout</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Add your main content here */}
        <CreateContact
            isOpen={isModalOpen}
            onClose={handleToggleModal}
            onAddContact={handleAddContact} //Pass the add contact function to the modal
        />
        <button className="create-contact-button" onClick={handleToggleModal}>
          Create Contact
        </button>
        <table className="border-collapse border border-gray-500 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Favorites</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Last Contact</th>
              <th className="p-2">Tagging</th>
              <th className="p-2">Date Added</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="p-2">{contact.name}</td>
              <td className="p-2">{contact.favorites ? 'Yes' : 'No'}</td>
              <td className="p-2">{contact.email}</td>
              <td className="p-2">{contact.phoneNumber}</td>
              <td className="p-2">{contact.lastContact}</td>
              <td className="p-2">{contact.tagging.join(', ')}</td>
              <td className="p-2">{contact.dateAdded}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;
