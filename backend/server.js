const express = require('express');
const colors = require('colors');
const externalData = require('./external-data/tmdb'); 
const qs = require('query-string');
const tmdbRoutes = require('./routes/tmdbRoutes');

const app = express();
const PORT = 5000;


app.use('/', (req, res, next) => {
    console.log("REQ URL ", req.url);
    let qsSplit = qs.parseUrl(req.url);
    let query = qsSplit.query;
    console.log("Query ", query);
    console.log("QS SPLIT ", qsSplit);

    next();
})

app.use('/api/search', tmdbRoutes);

/*
app.get('/api/search', async (req, res) => {
    let outsideData = await externalData.getMovies("UP");
    //console.log("OUTSIDE DATA: ", outsideData);
    res.json(outsideData);
});
*/

app.listen(PORT, console.log("Expres listening on port ".blue, PORT));