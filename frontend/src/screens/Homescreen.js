import React, { useState } from 'react';
import axios from 'axios';
import Searchbutton from '../components/SearchButton';
import MoviePoster from '../components/MoviePoster';
import ButtonChevronRight from '../components/ButtonChevronRight';
import ButtonChevronLeft from '../components/ButtonChevronLeft';
import Slider from '../components/Slider';

const Homescreen = () => {
    let [movie, setMovie] = useState(0);
    let [tvShow, setTvShow] = useState(0);
    let [people, setPeople] = useState(0);


    let returnedData = '';
    console.log("RETURNED DATA ", returnedData);

    const search = async (searchButtonValue) => {
        console.log("working");
        console.log("Search Button Value ", searchButtonValue);
        returnedData = await axios.get(`/api/search/movies?query=${searchButtonValue}&adult=false`);
        console.log("RIGHT AFTER THE AXIOS CALL");
        returnedData = returnedData.data.results;
        setMovie(returnedData);
        console.log("RETURNED DATA ", returnedData);
    }
    const gatherDetails = (movieEtc) => {
        console.log("Gather Details ", movieEtc);
    }

    return (
        <>
            <div className="search-and-options">
                <Searchbutton parentSearch={search} />
                <div className="options-container">
                    <label className="label-text">Movies<Slider /></label>
                    <label className="label-text">TV Shows<Slider /></label>
                    <label className="label-text">People<Slider /></label>
                </div>
            </div>

            <div className="results-div">
                {/* <ButtonChevronLeft /> */}
                <div className="movie-poster">
                    {movie !== 0 && movie.map(movie.poster_path !== '' ? (m) =>
                        <MoviePoster movie={m} key={m.id} gatherDetails={gatherDetails} />
                        : console.log("Waiting for a search"))}
                </div>
                {/* <ButtonChevronRight nextPage={''} /> */}
            </div>
        </>
    )
}

export default Homescreen
