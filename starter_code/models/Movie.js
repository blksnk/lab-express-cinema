const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: { type: String, required: true },
	director: { type: String, required: true },
	stars: [ String ],
	image: String,
	description: { type: String, required: false },
	showtimes: [ String ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;