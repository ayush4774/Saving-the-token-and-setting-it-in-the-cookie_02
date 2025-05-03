const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS for frontend access
app.use(cors());

// The /generate-token route that will generate the token
app.get('/generate-token', (req, res) => {
  const user = { id: 1, username: 'user123' };  // Sample payload

  // Generate JWT token with expiry time of 1 hour
  const token = jwt.sign(user, 'your_secret_key', { expiresIn: '1h' });

  // Send the token back as a JSON response
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});