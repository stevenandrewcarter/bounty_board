// Require the models
require('./models/bounty');
require('./models/category');
require('./models/user');
//add for Mongo support
var mongoose = require('mongoose');
//connect to Mongo
mongoose.connect('mongodb://localhost/test');