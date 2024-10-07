// DriverSignupSuccessPage.js
import React from 'react';

const DriverSignupSuccessPage = () => {
  const successContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
  };

  const paragraphStyle = {
    color: '#666',
  };

  return (
    <div style={successContainerStyle}>
      <h2 style={headingStyle}>Sign Up Successful</h2>
      <p style={paragraphStyle}>You have successfully signed up as a driver!</p>
      {/* You can add more information or styling as needed */}
    </div>
  );
};

export default DriverSignupSuccessPage;
