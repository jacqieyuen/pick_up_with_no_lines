var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  eamil                : {type: String, require: true},
  password             : {type: String, require: true},
});

var User = mongoose.model('User', userSchema);
module.exports = User;