const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Seller = require('../models/seller');

// Seller registration route
router.post('/register', async (req, res) => {
  // Extract the registration data from the request body
  const { email, businessName, password, confirmPassword } = req.body;

  // Validate the data
  if (!email || !businessName || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all the fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if a seller with the same email already exists
    const existingSeller = await Seller.findOne({ email });

    if (existingSeller) {
      return res.status(400).json({ message: 'Seller with the provided email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new seller
    const newSeller = new Seller({
      email,
      businessName,
      password: hashedPassword,
    });

    await newSeller.save();

    // Generate JWT token
    const token = jwt.sign({ id: newSeller._id }, 'your-secret-key');

    res.status(201).json({ message: 'Seller registered successfully', token });
  } catch (error) {
    console.error('Error during seller registration', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
