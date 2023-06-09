const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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
