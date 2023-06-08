const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Seller = require('../models/seller');
const authenticateToken = require('../middlewares/auth');

// Seller registration route
router.post('/register', async (req, res) => {
  // ...
});

// Example route that requires authentication
router.get('/protected', authenticateToken, (req, res) => {
  // Access the user information from req.user
  res.json({ message: 'Protected route accessed successfully.' });
});

module.exports = router;

