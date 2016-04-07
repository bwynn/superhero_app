// dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// superhero schema
var SuperheroSchema = new Schema({
  name: {type: String, required: true},
  gender: {type: String, required: true},
  superPowers: {type: String, required: true},
  picture: {type: Schema.Types.Mixed, required: true},
  morePictures: Schema.Types.Mixed, // not required
  createdAt: {type: Date, default: Date.now},
});

// sets the createdAt parameter equal to the current time
SuperheroSchema.pre('save', function(next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// exports
module.exports = mongoose.model("superhero", SuperheroSchema);
