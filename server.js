const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.js');

// Seller dashboard
router.get('/dashboard', verifyToken, (req, res) => {
  res.sendFile('dashboard.html', { root: 'public' });
});

module.exports = router;

// Seller dashboard
router.get('/dashboard/:sellerId', (req, res) => {
  res.sendFile('dashboard.html', { root: 'public' });
});

module.exports = router;