const express = require('express');
const Seller = require('../models/seller');
const router = express.Router();

router.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/../views/signup.html');
});

router.post('/signup', async (req, res) => {
  const { email, businessName, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Check if the email is already registered
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new seller
    const seller = new Seller({
      email,
      businessName,
      password,
    });

    // Save the seller to the database
    await seller.save();

    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

module.exports = router;
