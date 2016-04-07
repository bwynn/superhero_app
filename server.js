// packages
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var superhero = require('./app/routes/superhero')();

// config
var port = process.env.PORT || 8080;
var options = {
  server: { socketOptions: {
    keepAlive: 1,
    connectTimeoutMS: 30000
  }},
  replset: { socketOptions: {
    keepAlive: 1,
    connectTimeoutMS: 30000
  }}
};

mongoose.connect('mongodb://localhost/superhero', options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// log w/ morgan
app.use(morgan('dev'));

// parse app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

// set static files
app.use(express.static(__dirname + '/public'));

// routes
app.route('/superhero').
  post(superhero.post).
  get(superhero.getAll);
app.route('/superhero/:id').
  get(superhero.getOne);

// server
app.listen(port);

console.log('fired up on port ' + port);

exports = module.exports = app;
