//dependencies
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose');

//initialize body parser
app.use(bodyParser.json());

//to access the properties Using the Genre and Book Object
Genre = require('./models/genre.js')
Book = require('./models/book.js')
//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
//database object
var db = mongoose.connection
//routes
app.get('/', function(req, res){
    res.send('Please navigate to - /api/books or /api/genres');
});

app.get('/api/genres', function(req,res){
    Genre.getGenres(function(err, genres){
      if(err){
        throw err;
      }
      res.json(genres);
    });
});

app.post('/api/genres', function(req,res){
  //body parser allows us to acces anything that comes into the form
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
      if(err){
        throw err;
      }
      res.json(genre);
    });
});

app.get('/api/books', function(req,res){
    Book.getBooks(function(err, books){
      if(err){
        throw err;
      }
      res.json(books);
    })
})
//id will represent the id, gets only book by the id
app.get('/api/books/:_id', function(req,res){
  //take in the id passed into the URL
    Book.getBookById(req.params._id, function(err, book){
      if(err){
        throw err;
      }
      res.json(book);
    })
})

app.post('/api/books', function(req,res){
  //body parser allows us to acces anything that comes into the form
    var book = req.body;
    Book.addBook(book, function(err, book){
      if(err){
        throw err;
      }
      res.json(book);
    });
});
//localhost
app.listen(3000);
console.log('Running on port 3000');
