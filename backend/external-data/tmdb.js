const axios = require('axios');
const qs = require('qs');
const tmdbUrl = require('../constants/tmdbUrls');

const data = qs.stringify({ });

const getMovies = async (searchTerm) => {
    const movieOptions = {
        method: 'GET',
        url: `${tmdbUrl.movieSearch}${searchTerm}`,
        headers: { },
        data: data
    }
    let sendBack = await axios(movieOptions);
    return sendBack.data;
}


module.exports = {
    getMovies
}