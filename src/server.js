const express = require('express');
const mongoose = require('mongoose');
const sellerRoutes = require('./routes/sellerRoutes');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
require('./db');

// Routes
app.use('/', sellerRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
