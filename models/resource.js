// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const MetaSchema = new mongoose.Schema({
	alias: {
    type: String,
    required: "Please enter the Meta's Alias"
  },
  fullname: {
    type: String,
    required: "Please enter the Meta's Full Name"
  },
  affiliation: {
    type: String,
    required: "Please enter their affiliation"
  },
  metatype: {
    type: String,
    required: "Please enter whether they're a Superhero, Villain, or Antihero"
  }
});

// Exporting our resource model
module.exports = mongoose.model( 'Metahuman', MetaSchema );