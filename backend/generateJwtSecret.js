// generateJwtSecret.js
const fs = require('fs');
const crypto = require('crypto');

// Generate a random 256-bit (32-byte) key
const randomBytes = crypto.randomBytes(32);
const secretKey = randomBytes.toString('hex');

// Save the secret key to a file
fs.writeFileSync('jwtSecretKey.txt', secretKey);

console.log('Generated JWT Secret Key and saved to jwtSecretKey.txt');
