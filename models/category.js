var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  created_at: {type: Date, default: Date.now},
  name: {type: String, required: true},
  description: {type: String, required: true}
});

mongoose.model('Category', categorySchema);