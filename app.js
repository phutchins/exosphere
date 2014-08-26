// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// instruct express to serve up static assets
app.use(express.static('public'));

// Error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

// Test Object
function Item(name, price) {
  this.name = name;
  this.price = price;
}

// Test Data
var items = [
  new Item('lamp', '247.00'),
  new Item('desk', '22.00'),
  new Item('book', '328')
];

// set routes
app.get('/', function(req, res) {
  res.render('index', { items: items });
});
app.get('/hello.txt', function(req, res) {
  res.send('Hello World');
});

// Set server port
app.listen(3000);
console.log('server is running');
