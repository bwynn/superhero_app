// dependencies
var mongoose = require('mongoose');
var Superhero = require('../models/superhero');

// app routes
module.exports = function() {
  return {
    getAll: function(req, res) {
      // query db. if no errors, send all superheros
      var query = Superhero.find({});
      query.exec(function(err, superheros) {
        if (err) {
          res.send(err);
        }

        res.json(superheros);
      });
    },
    post: function(req, res) {
      var newSuperhero = new Superhero(req.body);
      // save to the db
      newSuperhero.save(function(err) {
        if (err) {
          res.send(err);
        }

        res.json(req.body);
      });
    },
    getOne: function(req, res) {
      Superhero.findById(req.params.id, function(err, superhero) {
        if (err) {
          res.send(err);
        }

        res.json(superhero);
      });
    }
  }
};
