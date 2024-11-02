const mongoose = require('mongoose');

// MongoDB connection URL define karo
const mongoURL = 'mongodb://localhost:27017/hotels';

// MongoDB connection set up karo
mongoose.connect(mongoURL)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Default connection ko get karo
const db = mongoose.connection;

// DB connection ke liye event listeners define karo
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

// DB connection ko export karo
module.exports = db;
