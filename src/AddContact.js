import React, { useState } from 'react';

function AddContact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    workingAddress: '',
    occupation: '',
    eventMet: '',
    reasonForContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here (e.g., email format)
    // You can also send the data to an API or perform any necessary actions
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header
        style={{
          background: 'linear-gradient(45deg, #007bff, #009688)',
          color: 'black',
          padding: '20px 0',
          textAlign: 'center',
          position: 'relative', 
        }}
      >
       <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          Follow Me Up
        </span>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold' }}>Add Contact</h1>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" style={{ display: 'block', fontWeight: 'bold' }}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" style={{ display: 'block', fontWeight: 'bold' }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          {/* Working Address */}
          <div className="mb-4">
            <label htmlFor="workingAddress" style={{ display: 'block', fontWeight: 'bold' }}>
              Working Address
            </label>
            <textarea
              id="workingAddress"
              name="workingAddress"
              value={formData.workingAddress}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          {/* Occupation */}
          <div className="mb-4">
            <label htmlFor="occupation" style={{ display: 'block', fontWeight: 'bold' }}>
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          {/* Event You Meet */}
          <div className="mb-4">
            <label htmlFor="eventMet" style={{ display: 'block', fontWeight: 'bold' }}>
              Event You Meet
            </label>
            <input
              type="text"
              id="eventMet"
              name="eventMet"
              value={formData.eventMet}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          {/* Reason for Contact */}
          <div className="mb-4">
            <label htmlFor="reasonForContact" style={{ display: 'block', fontWeight: 'bold' }}>
              Reason you are interested in contacting them
            </label>
            <textarea
              id="reasonForContact"
              name="reasonForContact"
              value={formData.reasonForContact}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
