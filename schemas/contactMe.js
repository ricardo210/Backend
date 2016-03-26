var mongoose = require('mongoose');

var ContactMeSchema = new mongoose.Schema({
  name : String,
  email : String,
  number : String,
  message : String,
  state : String
});

module.exports = mongoose.model('ContactMe', ContactMeSchema);
