// set variables for environment
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Configure our application
var port = 3000;
app.set('port', process.env.PORT || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
app.use(cookieParser('s9e9c9r7e5t'))

// Setup Routes
app.get('/', function(req, res){
  console.log("Cookies: ", req.cookies);
  res.render('index', {
    title: 'index'
  });
});

// Listen for Requests
var server = http.listen(port, function(){
  console.log('listening on *:3000');
});
var io = server.listen(server);
//http.listen(3000, function(){
//  console.log('listening on *:3000');
//})

// Socket IO
var active_connections = 0;
io.on('connection', function (socket) {
  active_connections++;
  io.emit('user:connect', active_connections);
  // EVENT: User stops drawing something
  socket.on('draw:progress', function (uid, co_ordinates) {
    io.emit('draw:progress', uid, co_ordinates)
  });
  // EVENT: User stops drawing something
  socket.on('draw:end', function (uid, co_ordinates) {
    io.emit('draw:end', uid, co_ordinates)
  });
});


//io.on('connection', function(socket){
//  console.log('User connected');
//});

// Enable Socket.io
//http.listen(3000, function(){
//  console.log('listening on *:3000');
//});
