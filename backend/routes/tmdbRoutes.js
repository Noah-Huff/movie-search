const express = require('express');
const router = express.Router();
const tmdbApiCalls = require('../controllers/tmdbApiCalls');

router.route('/movies').get(tmdbApiCalls.searchMovies);

module.exports = router;
