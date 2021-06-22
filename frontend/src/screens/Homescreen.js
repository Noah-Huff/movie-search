import React, { useState } from 'react';
import axios from 'axios';
import Searchbutton from '../components/SearchButton';
import MoviePoster from '../components/MoviePoster';
import MagnifyingGlassSVG from '../components/MagnifyingGlassSVG';
import ButtonChevronRight from '../components/ButtonChevronRight';
import ButtonChevronLeft from '../components/ButtonChevronLeft';
import Slider from '../components/Slider';
import NewSearchButton from '../components/NewSearchButton';

const Homescreen = () => {
    let [movie, setMovie] = useState(0);
    let [tvShow, setTvShow] = useState(0);
    let [people, setPeople] = useState(0);
    let [searchMovie, setSearchMovie] = useState(false);
    let [searchTV, setSearchTV] = useState(false);
    let [searchPeople, setSearchPeople] = useState(false);


    let returnedData = '';
    console.log("RETURNED DATA ", returnedData);

    const movieSearch = async (searchButtonValue) => {
        console.log("working");
        console.log("Search Button Value ", searchButtonValue);
        returnedData = await axios.get(`/api/search/movies?query=${searchButtonValue}&adult=false`);
        console.log("RIGHT AFTER THE AXIOS CALL");
        returnedData = returnedData.data.results;
        setMovie(returnedData);
        console.log("RETURNED DATA ", returnedData);
    }
    const handleSearch = async(searchButtonValue) => {
        if(searchMovie) {
            let movieSearch = await axios.get(`/api/search/movies?query=${searchButtonValue}&adult=false`);
            setMovie(movieSearch.data.results);
        }
        if(searchTV) {
            let tvSearch = await axios.get(`/api/search/tv?query=${searchButtonValue}&adult=false`);
            setTvShow(tvSearch.data.results);
        }
        if(searchPeople) {
            let peopleSearch = await axios.get(`/api/search/people?query=${searchButtonValue}&adult=false`);
            setPeople(peopleSearch.data.results);
        }
        
    }

    const movieToggle = () => {
        if (searchMovie === false) setSearchMovie(true);
        else setSearchMovie(false);
    }
    const tvToggle = () => {
        if (searchTV === false) setSearchTV(true);
        else setSearchTV(false);
    }
    const peopleToggle = () => {
        if (searchPeople === false) setSearchPeople(true);
        else setSearchPeople(false);
    }

    return (
        <>
            <div className="search-and-options">
                {/* <MagnifyingGlassSVG/> */}
                <NewSearchButton parentSearch={handleSearch} />
                <div className="options-container">
                    <label className="label-text">Movies<Slider value={searchMovie} switchSlider={movieToggle}/></label>
                    <label className="label-text">TV Shows<Slider value={searchTV} switchSlider={tvToggle}/></label>
                    <label className="label-text">People<Slider value={searchPeople} switchSlider={peopleToggle}/></label>
                </div>
            </div>

            <div className="results-div">
                {/* <ButtonChevronLeft /> */}
                <div className="movie-poster">
                    {movie !== 0 && movie.map(movie.poster_path !== '' ? (m) =>
                        <MoviePoster movie={m} key={m.id} />
                        : console.log("Waiting for a search"))}
                </div>
                {/* <ButtonChevronRight nextPage={''} /> */}
            </div>
            <div className="results-div">
                <div className="movie-poster">
                    {tvShow !== 0 && tvShow.map(tvShow.poster_path !== '' ? (m) =>
                        <MoviePoster movie={m} key={m.id} />
                        : console.log("Waiting for a search"))}
                </div>
            </div>
            <div className="results-div">
                <div className="movie-poster">
                    {people !== 0 && people.map(people.profile_path !== '' ? (m) =>
                        <MoviePoster movie={m} key={m.id} />
                        : console.log("Waiting for a search"))}
                </div>
            </div>
        </>
    )
}

export default Homescreen
