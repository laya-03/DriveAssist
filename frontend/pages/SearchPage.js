// SearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/search/available');
        setAvailableDrivers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAvailableDrivers();
  }, []);

  const handleBookNow = (driverId) => {
    navigate('/booked'); // Navigate to the success page
  };

  return (
    <div className="search-container">
      <h2>Search Page</h2>
      {error && <p>Error fetching available drivers: {error}</p>}
      <ul>
        {availableDrivers.map((driver) => (
          <li key={driver._id}>
            <strong>Driver Name:</strong> {driver.name} <br />
            <strong>Contact:</strong> {driver.contact} <br />
            <strong>Location:</strong> {driver.city} <br />
            <strong>Availability:</strong> {driver.availability} <br />
            <button onClick={() => handleBookNow(driver._id)}>Book Now</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;