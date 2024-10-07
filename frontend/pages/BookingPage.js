// BookingPage.js
import React, { useState } from 'react';
import './BookingPage.css';
import axios from 'axios';
import SearchPage from './SearchPage';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: '',
    vehicleType: '',
  });
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Set search parameters in state
      setSearchParams(formData);
  
      // Show search results
      setShowSearchResults(true);
      // In BookingPage.js


  
      // Redirect to the search page
      await navigate('/search');
      console.log('Submitting form with data:', formData);
      console.log('Search parameters set:', searchParams);
    } catch (error) {
      console.error('Error navigating to the search page:', error.message);
    }
  };
  

  return (
    <div className="booking-container">
      <h2>Booking Page</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
          >
            <option value="">Select Vehicle Type</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="truck">Truck</option>
            <option value="bus">Bus</option>
          </select>
        </label>
        <button type="submit">Show Drivers</button>
      </form>
    </div>
  );
};

export default BookingPage;
