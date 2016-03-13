var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
  code: String,
  name: String,
  address: String,
  type: String,
  category: String,
  advertiser: String
});

module.exports = mongoose.model('property', propertySchema);
