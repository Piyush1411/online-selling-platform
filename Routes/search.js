const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth');

// Search products
router.get('/', verifyToken, (req, res) => {
  const { query } = req.query;

  // Perform search logic and retrieve search results
  // Replace the following code with your search implementation
  const results = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
  ];

  res.render('searchResults', { results });
});

module.exports = router;

