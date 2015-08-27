var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bountySchema = new mongoose.Schema({
  created_by: {type: Schema.ObjectId, ref: 'User', required: true},
  created_at: {type: Date, default: Date.now},
  title: {type: String, required: true},
  text: {type: String, required: true},
  tags: [{type: String}]
});

mongoose.model('Bounty', bountySchema);