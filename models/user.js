const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define the user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

// Create the user model
const User = mongoose.model('User', userSchema);

module.exports = User;
