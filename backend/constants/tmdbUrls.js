require('dotenv').config();
const movieSearch = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=`;
const tvSearch = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=`;
const peopleSearch = `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_API_KEY}&query=`;

module.exports = {
    movieSearch,
    tvSearch,
    peopleSearch
}