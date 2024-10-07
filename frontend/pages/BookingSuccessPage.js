// BookingSuccessPage.js
import React from 'react';

const BookingSuccessPage = () => {
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: '50px',
    maxWidth: '400px', // Adjust the width as needed
  };

  const headingStyle = {
    color: '#4caf50',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Booking Successful</h2>
      <p style={paragraphStyle}>Your driver has been booked successfully!</p>
    </div>
  );
};

export default BookingSuccessPage;
