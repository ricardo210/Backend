var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var advertiserSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : String,
  code: String,
  name : String,
  cell : String,
  address : String,
  email : String,
  creator: String,
  scope : [String]
});

advertiserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('advertiser', advertiserSchema);
