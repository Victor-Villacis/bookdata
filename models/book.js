var mongoose = require('mongoose');

//Book Schema
var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
  },
  pages: {
    type: String,
  },
  image_url: {
    type: String,
  },
  buy_url: {
    type: String,
  },
  create_date:{
    type: Date,
    default: Date.now
  }, 
  
});
//make the genre object accessible from anywhere else (outside)
var Book = module.exports = mongoose.model('Book', bookSchema)

//keep all the database finds and inserts encapsulated in the model
//Get Books - access this function from the route
module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
}
//get book, don't need limit since only returning one. 
module.exports.getBookById = function(id, callback) {
  //mongoose method
  Book.findById(id, callback)
}

// Add Book
module.exports.addBook = function(book, callback) {
  Book.create(book, callback);
}

//Update Book //Look into set query to update indiviual fields
module.exports.updateBook = function(id, book, options, callback) {
  var query = {_id: id};
  var update = {
    title: book.title,
    genre:book.genre,
    description:book.description,
    author:book.author
    
  }
  Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback) {
  var query = {_id: id};
  Book.remove(query, callback);
}
