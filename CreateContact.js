import React, { useState } from 'react';

function CreateContact({ isOpen, onClose, onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    favorites: false,
    email: '',
    phoneNumber: '',
    lastContact: '',
    tags: '',
    dateAdded: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Favourite: </label>
            <input
            type="checkbox"
            name='favourite'
            value={formData.favorites}
            onChange={handleChange}
            />
          </div>
          <div>
            <label>Email </label>
            <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number: </label>
            <input
            type="phoneNumber"
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Contact: </label>
            <input
            type="auto"
            name='lastContact'
            value={formData.lastContact}
            onChange={handleChange}
            />
          </div>
          <div>
            <label>Tags: </label>
            <input
            type="text"
            name='tags'
            value={formData.tags}
            onChange={handleChange}
            />
          </div>
          <div>
            <label>Date Added: </label>
            <input
            type="date"
            name='dateAdded'
            value={formData.dateAdded}
            onChange={handleChange}
            />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    </div>
  );
}

export default CreateContact;
