// DriverProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriverProfile = () => {
  const [availability, setAvailability] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch driver details from the server when the component mounts
    const fetchDriverDetails = async () => {
      try {
        // Replace 'http://localhost:5000' with your actual backend server URL
        const response = await axios.get('http://localhost:5000/api/driverRoutes/driverProfile');

        const { availability } = response.data.driver; // Assuming the server sends driver details

        setAvailability(availability);
      } catch (error) {
        console.error('Error fetching driver details:', error.message);
      }
    };

    fetchDriverDetails();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleAvailabilityChange = async () => {
    try {
      // Replace 'http://localhost:5000' with your actual backend server URL
      const newAvailability = availability === 'Yes' ? 'No' : 'Yes';
  
      const response = await axios.patch('http://localhost:5000/api/driverRoutes/driverProfile', {
        availability: newAvailability,
      });
  
      // Assuming the server sends updated driver details
      setAvailability(response.data.driver.availability);
    } catch (error) {
      console.error('Error updating availability:', error.message);
    }
  };
  

  const handleEditProfile = () => {
    // Toggle edit mode
    setEditMode(!editMode);
  };

  return (
    <div className="driver-profile-container">
      <h2>Driver Profile</h2>
      <div>
        <strong>Availability:</strong> {availability}
      </div>
      {editMode ? (
        <div>
          <label>
            Availability:
            <select
              name="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <button onClick={handleAvailabilityChange}>Save</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEditProfile}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;