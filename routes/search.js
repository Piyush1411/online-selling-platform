const express = require('express');
const router = express.Router();
const port = 3000;
const searchResults = [
  { name: 'Product 1', price: 10.99 },
  { name: 'Product 2', price: 19.99 },
  { name: 'Product 3', price: 5.99 }
];

// Serve the searchResults.html file
router.get('/searchResults', (req, res) => {
  res.sendFile(__dirname + '/views/searchResults.html');
});

// Endpoint to retrieve search results as JSON
router.get('/api/searchResults', (req, res) => {
  res.json(searchResults);
});

module.exports = router;

