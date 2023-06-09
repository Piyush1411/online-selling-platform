const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Seller = require('../models/sellers');

// Seller registration
router.post('/register', async (req, res) => {
  // Registration logic here
});

// Seller login
router.post('/login', async (req, res) => {
  // Login logic here
});

module.exports = router;


