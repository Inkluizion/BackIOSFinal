const mongoose = require('mongoose');

const propositionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  proposition: { type: String, required: true },
});

module.exports = mongoose.model('Proposition', propositionSchema);
