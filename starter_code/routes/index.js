const express = require('express');
const router  = express.Router();

const Movie = require("../models/Movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
	Movie.find()
		.then(movieResult => {
			res.locals.movieList = movieResult;
			res.render("movies")
		})
		.catch(err => next(err));
});

router.get("/movie/:movieId", (req, res, next) => {
	const { movieId } = req.params;

	Movie.findById(movieId)
		.then(selectMovie => {
			res.render("movie-info", {selectMovie})
		})
})



module.exports = router;
