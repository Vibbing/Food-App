const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017'; // Update with the correct MongoDB connection URL
const dbName = 'swiggyapp';


const connect = async () => {
  try {
    await mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
  }
};

module.exports = connect;
