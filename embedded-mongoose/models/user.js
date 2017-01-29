const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number
});

const userSchema = new mongoose.Schema({
  name: String,
  addresses: [addressSchema]
});


// COMPILING = Schema-->Model
const User = mongoose.model('User', userSchema);
module.exports = User;
