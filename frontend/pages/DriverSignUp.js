// // DriverSignUp.js
import React, { useState } from 'react';
import './DriverSignUp.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DriverSignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [contact, setContact] = useState(''); // Added contact field
  const [city, setCity] = useState(''); // Added city field

  const handleCheckboxChange = (value) => {
    setVehicleTypes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data object to send to the server
    const formData = {
      name,
      email,
      password,
      licenseNumber,
      vehicleTypes,
      availability: 'Yes', // Hardcoded availability to 'Yes' as it's disabled in the form
      contact, // Added contact field
      city, // Added city field
    };

    try {
      // Replace 'http://localhost:5000' with your actual backend server URL
      const response = await axios.post('http://localhost:5000/api/driverAuth/signup/', formData);

      console.log('Server response:', response.data);
      navigate('/success');
      // Optionally, you can redirect the user or perform other actions based on the server response
    } catch (error) {
      console.error('Error sending data to the server:', error.message);
    }
  };

  return (
    <div className="driver-signup-container">
      <h2>Driver Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Driving License Number:
          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </label>
        <br />

<label>
  Type of Vehicle:
  <div className="vehicle-checkbox-group">
    <label>
      <input
        type="checkbox"
        value="bike"
        checked={vehicleTypes.includes('bike')}
        onChange={() => handleCheckboxChange('bike')}
      />
      Bike
    </label>

    <label>
      <input
        type="checkbox"
        value="car"
        checked={vehicleTypes.includes('car')}
        onChange={() => handleCheckboxChange('car')}
      />
      Car
    </label>

    <label>
      <input
        type="checkbox"
        value="auto"
        checked={vehicleTypes.includes('auto')}
        onChange={() => handleCheckboxChange('auto')}
      />
      Auto
    </label>

    <label>
      <input
        type="checkbox"
        value="truck"
        checked={vehicleTypes.includes('truck')}
        onChange={() => handleCheckboxChange('truck')}
      />
      Truck
    </label>

    <label>
      <input
        type="checkbox"
        value="bus"
        checked={vehicleTypes.includes('bus')}
        onChange={() => handleCheckboxChange('bus')}
      />
      Bus
    </label>
  </div>
</label>

        <br />
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Availability:
          <select
            name="availability"
            value="Yes"
            onChange={(e) => {}}
            disabled
          >
            <option value="Yes">Yes</option>
          </select>
        </label>
        <br />
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default DriverSignUp;
