var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bountySchema = new mongoose.Schema({
  created_by: {type: Schema.ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now},
  title: {type: String, required: true},
  text: {type: String, required: true},
  category: {type: Schema.ObjectId, ref: 'Category', required: true},
});

mongoose.model('Bounty', bountySchema);