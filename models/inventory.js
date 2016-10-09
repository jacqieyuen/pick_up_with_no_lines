var mongoose = require('mongoose');

var inventorySchema = new mongoose.Schema({
  title: {type: String, require: true},
  category: {type: String, require: true},
  title: {type: String, require: true},
  description: {type: String, require: true},
  price: {type: Number, require: true},
  imagePath: {type: String, require: true},
});

var Inventory = mongoose.model('Inventory', inventorySchema);

exports.model = Inventory;
exports.schema = inventorySchema;