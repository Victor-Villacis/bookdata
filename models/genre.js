var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  }, 
  crate_date:{
    type: Date,
    default: Date.now
  }
});
