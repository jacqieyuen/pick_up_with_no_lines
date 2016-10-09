var mongoose = require('mongoose');

var inventorySchema = new mongoose.Schema({
  title                : {type: String, require: true},
  description          : {type: String, require: true},
  price                : {type: Number, require: true},
  category             : {type: String, require: true},
  imagePath            : {type: String, require: true},
});

var Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
