const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/online-selling-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Failed to connect to the database', error);
});
