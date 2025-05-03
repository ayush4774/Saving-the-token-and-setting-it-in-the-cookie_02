const jwt = require('jsonwebtoken');

// The encrypt function generates a JWT token with a payload and a secret key
const encrypt = (payload, secret) => {
  // Sign the token with the payload and secret
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });  // Token expires in 1 hour
  
  // Return the generated token
  return token;
};

// Export the encrypt function
module.exports = encrypt;