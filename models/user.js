const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 100 },
  fullname: { type: String, required: true, maxlength: 100 },
  email: { type: String, required: true, unique: true, maxlength: 255, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  score: { type: Number, default: 0 },
  photoURL: { type: String }, 
  phoneNumber: { type: String },
  address: { type: String },
  settings: {
    notifications: { type: Boolean, default: true },
    language: { type: String, default: 'en' }
  }
});

module.exports = mongoose.model('User', userSchema);
