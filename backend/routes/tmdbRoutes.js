const express = require('express');
const router = express.Router();
const tmdbApiCalls = require('../controllers/tmdbApiCalls');

router.route('/movies').get(tmdbApiCalls.searchMovies);
router.route('/tv').get(tmdbApiCalls.searchTV);
router.route('/people').get(tmdbApiCalls.searchPeople);

module.exports = router;
