import React, { useState } from 'react';
import './UserSignIn.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

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
      const response = await axios.post('http://localhost:5000/api/auth/signin', formData);

      if (response.status === 200) {
        console.log('User signed in successfully');
        // Assuming you want to store the token in localStorage for future requests
        localStorage.setItem('token', response.data.token);
        navigate('/user-booking');
      } else {
        console.log('Invalid email or password');
        setError('Invalid email or password'); // Set the error message
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Invalid email or password'); // Set the error message
    }
  };

  return (
    <div className="user-signin-container">
      <h2>Driver Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UserSignIn;
