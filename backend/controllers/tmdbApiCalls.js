const { response } = require("express");
const tmdbUrl = require('../constants/tmdbUrls');
const axios = require('axios');
const qs = require('query-string');

const getSearchQuery = (destructure) => {
    return qs.parseUrl(destructure);
}

const getTmdbArray = (url, userSearch) => {
    let data = qs.stringify();
    const searchOptions = {
        method: 'GET',
        url: `${url}${userSearch}`,
        headers: { },
        data: data
    }
    return axios(searchOptions);
}


const searchMovies = async (req, res) => {
    let userQueryString = getSearchQuery(req.url);
    let searchTerm = userQueryString.query.query;
    let sendBack = await getTmdbArray(tmdbUrl.movieSearch, searchTerm);
    res.json(sendBack.data);
}
const searchTV = async (req, res) => {
    let userQueryString = getSearchQuery(req.url);
    let searchTerm = userQueryString.query.query;
    let sendBack = await getTmdbArray(tmdbUrl.tvSearch, searchTerm);
    res.json(sendBack.data);
}
const searchPeople = async (req, res) => {
    let userQueryString = getSearchQuery(req.url);
    let searchTerm = userQueryString.query.query;
    let sendBack = await getTmdbArray(tmdbUrl.peopleSearch, searchTerm);
    res.json(sendBack.data);
}

module.exports = {
    searchMovies,
    searchTV,
    searchPeople
}