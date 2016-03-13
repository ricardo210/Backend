var mongoose = require('mongoose');
 var uniqueValidator = require('mongoose-unique-validator');

  var adminSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  scope : [String]
 });

 adminSchema.plugin(uniqueValidator);
 module.exports = mongoose.model('admin', adminSchema);
