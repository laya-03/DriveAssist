import React, { useState } from 'react';
import './UserSignUp.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation checks
    let newErrors = { ...errors };

    switch (name) {
      case 'email':
        newErrors.email = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : '';
        break;
      case 'password':
        newErrors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long'
            : !/(?=.*\d)(?=.*[!@#$%^&*])/.test(value)
            ? 'Password must contain at least one number and one special character'
            : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const submitFormData = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      console.log('User signed up successfully');
      navigate('/user-sign-in');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (Object.values(errors).every((error) => !error)) {
      submitFormData();
    } else {
      console.error('Form has errors:', errors);
    }
  };

  return (
    <div className="user-signup-container">
      <h2>User Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignUp;
