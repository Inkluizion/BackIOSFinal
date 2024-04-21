const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 100 },
  fullname: { type: String, required: true, maxlength: 100 },
  number: { type: String, default: 0 },
  password: { type: String, required: true },
  picture: { type: String }, 
  
});

module.exports = mongoose.model('User', userSchema);
