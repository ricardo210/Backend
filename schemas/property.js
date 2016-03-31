var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var PropertySchema = new mongoose.Schema({
  name : String,
  address : String,
  email : String,
  cell : String,
  phone : String,
  images : String,
  available : Boolean 
});

module.exports = mongoose.model('Property', PropertySchema);
