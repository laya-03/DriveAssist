const jwt = require('jsonwebtoken');
const Driver = require('../models/Driver');

// Secret key for JWT (replace with your actual secret key)
const secretKey = 'your-secret-key';

const authenticate = async (req, res, next) => {
  // Get the token from the request header
  const token = req.header('x-auth-token');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Add the decoded information to the request object
    req.driverId = decoded.driverId;

    // Retrieve driver details using the driverId
    const driver = await Driver.findById(req.driverId);

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    // Add the driver's name to the request object
    req.driverName = driver.name;

    // Continue with the next middleware or route handler
    next();
  } catch (error) {
    console.error('Authentication failed:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authenticate;
