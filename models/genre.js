var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  }, 
  create_date:{
    type: Date,
    default: Date.now
  }
});
//make the genre object accessible from anywhere else (outside)
var Genre = module.exports = mongoose.model('Genre', genreSchema)

//keep all the database finds and inserts encapsulated in the model
//Get Genres - access this function from the route
module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
}
