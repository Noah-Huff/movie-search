const { response } = require("express");
const tmdbUrl = require('../constants/tmdbUrls');
const axios = require('axios');
const qs = require('query-string');

const getSearchQuery = (destructure) => {
    return qs.parseUrl(destructure);
}

const getTmdbArray = (url, userSearch) => {
}


const searchMovies = async (req, res) => {
    let data = qs.stringify();
    let userQueryString = getSearchQuery(req.url);
    console.log("User Q String", userQueryString);
    let searchTerm = userQueryString.query.query;
    const movieOptions = {
        method: 'GET',
        url: `${tmdbUrl.movieSearch}${searchTerm}`,
        headers: { },
        data: data
    }
    let sendBack = "TESTING, TESTING, TESTING";
    sendBack = await axios(movieOptions);
    console.log("Send Back ", sendBack.data);
    res.json(sendBack.data);
}

module.exports = {
    searchMovies
}