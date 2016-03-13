var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var employeeSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  code: String,
  name : String,
  cell : String,
  address : String,
  email : String,
  scope : [String]
});

employeeSchema.plugin(uniqueValidator);
module.exports = mongoose.model('employee', employeeSchema);
