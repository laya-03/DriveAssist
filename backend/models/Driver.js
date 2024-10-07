//.models/driver.js

const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  vehicleTypes: {
    type: [String],
    enum: ['bike', 'car', 'auto', 'truck', 'bus'],
    required: true,
  },
  availability: {
    type: String,
    enum: ['Yes', 'No'], // Assuming availability is either 'Yes' or 'No'
    default: 'Yes', // Default value is 'Yes'
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  // You can add more fields based on your specific requirements
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
