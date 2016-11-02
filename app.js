//dependencies
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser')
var mongoose    = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
//database object
var db = mongoose.connection
//routes
app.get('/', function(req, res){
    res.send('Please navigate to - /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
  
});
//localhost
app.listen(3000);
console.log('Running on port 3000');
