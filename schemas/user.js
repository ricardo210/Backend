var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  code: {type: String, unique: true, required: true},
  name : String,
  cell : String,
  phone: String,
  address : String,
  email : String,
  scope : [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
