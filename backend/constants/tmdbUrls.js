require('dotenv').config();
const movieSearch = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=`;

module.exports = {
    movieSearch,
}