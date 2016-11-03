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

module.exports.getGenreById = function(id, callback) {
  Genre.findById(id, callback);
}

// Add Genre
module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
}

// //Update Genre
// //This function takes in an _id, the new genre object, options and a calback
// module.exports.updateGenre = function(id, genre, options, callback){
//   //create a query and set it to _id
//   var query = {_id:id};
//   //create and object called update
//   var update = {
//     name:genre.name
//   }
//   //Mongo's function
//   Genre.findOneAndUpdate(query, update, options, callback)
// }

//Update Genre
module.exports.updateGenre = function(id, genre, options, callback) {
  var query = {_id: id};
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}

// Delete Genre
module.exports.deleteGenre = function(genre, callback) {
  var query = {_id: id};
  Genre.remove(query, callback);
}
