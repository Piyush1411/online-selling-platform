const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/e-commerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Root route handler
app.get('/', (req, res) => {
  res.send('Welcome to the online selling platform!');
});

// Routes
const authRoutes = require('./routes/auth');
const sellerRoutes = require('./routes/sellers');
const searchRoutes = require('./routes/search');

app.use('/auth', authRoutes);
app.use('/sellers', sellerRoutes);
app.use('/search', searchRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


