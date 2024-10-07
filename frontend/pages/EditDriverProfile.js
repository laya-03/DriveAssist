import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditDriverProfile = () => {
  const [editedInfo, setEditedInfo] = useState({
    contactNumber: '',
    location: '',
    vehicleTypes: [], // Provide a default value
  });

  useEffect(() => {
    // Fetch current driver details for pre-filling the form
    const fetchDriverDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/driver/profile');
        
        // Ensure that response.data.vehicleTypes is an array
        const vehicleTypes = response.data.vehicleTypes || [];

        setEditedInfo({
          contactNumber: response.data.contactNumber || '',
          location: response.data.location || '',
          vehicleTypes: vehicleTypes,
        });
      } catch (error) {
        console.error('Error fetching driver details:', error);
      }
    };

    fetchDriverDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      [name]: value,
    });
  };

  const handleCheckboxChange = (value) => {
    setEditedInfo((prev) => {
      const prevVehicleTypes = prev.vehicleTypes || []; // Ensure prev.vehicleTypes is an array
      return prevVehicleTypes.includes(value)
        ? { ...prev, vehicleTypes: prevVehicleTypes.filter((item) => item !== value) }
        : { ...prev, vehicleTypes: [...prevVehicleTypes, value] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Edited Info:', editedInfo);

    // Send edited information to the backend
    try {
      const response = await axios.patch('http://localhost:5000/api/driver/profile', editedInfo);
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="edit-driver-profile-container">
      <h2>Edit Driver Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={editedInfo.contactNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={editedInfo.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Vehicle Types:
          <div className="vehicle-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="bike"
                checked={editedInfo.vehicleTypes.includes('bike')}
                onChange={() => handleCheckboxChange('bike')}
              />
              Bike
            </label>
            <label>
              <input
                type="checkbox"
                name="car"
                checked={editedInfo.vehicleTypes.includes('car')}
                onChange={() => handleCheckboxChange('car')}
              />
              Car
            </label>
            {/* Add more vehicle types as needed */}
          </div>
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditDriverProfile;
