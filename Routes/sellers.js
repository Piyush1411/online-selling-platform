const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');

// Seller dashboard
router.get('/dashboard', verifyToken, (req, res) => {
  res.sendFile('dashboard.html', { root: 'public' });
});

module.exports = router;
