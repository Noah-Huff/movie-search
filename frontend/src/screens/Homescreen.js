import React, { useState } from 'react';
import axios from 'axios';
import Searchbutton from '../components/SearchButton';
import Poster from '../components/Poster';
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
    let [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (searchButtonValue) => {
        if (searchMovie) {
            console.log("Search Movie");
            let movieSearch = await axios.get(`/api/search/movies?query=${searchButtonValue}&adult=false`);
            setMovie(movieSearch.data.results);
            setTimeout(() => console.log("Timeout"), 4000, []);
        }
        if (searchTV) {
            console.log("Search TV");
            let tvSearch = await axios.get(`/api/search/tv?query=${searchButtonValue}&adult=false`);
            setTvShow(tvSearch.data.results);
        }
        if (searchPeople) {
            console.log("Search People");
            let peopleSearch = await axios.get(`/api/search/people?query=${searchButtonValue}&adult=false`);
            setPeople(peopleSearch.data.results);
        }
        setHasSearched(true);
    }

    const movieToggle = () => {
        if (searchMovie === false) setSearchMovie(true);
        else {
            setMovie(0);
            setSearchMovie(false);
        }
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
                    <label className="label-text">Movies<Slider value={searchMovie} switchSlider={movieToggle} /></label>
                    <label className="label-text">TV Shows<Slider value={searchTV} switchSlider={tvToggle} /></label>
                    <label className="label-text">People<Slider value={searchPeople} switchSlider={peopleToggle} /></label>
                </div>
            </div>

            <div className="results-div">
                {/* <ButtonChevronLeft /> */}
                {movie.length > 0
                    ? <h1 className="poster-section-label">Movies</h1>
                    : hasSearched === true
                    ? <p className="no-search-results">No movies matched the search term</p>
                    : console.log("No results for movies")}
                <div className="movie-poster">
                    {movie !== 0 && movie.map(movie.poster_path !== '' ? (m) =>
                        <Poster movie={m} key={m.id} />
                        : <></>)}
                </div>
                {/* <ButtonChevronRight nextPage={''} /> */}
            </div>
            <div className="results-div">
                {tvShow.length > 0
                    ? <h1 className="poster-section-label">Shows</h1>
                    : searchTV === true
                    ? <p className="no-search-results">No shows matched the search term</p>
                    : console.log("No results for TV Shows")}
                <div className="movie-poster">
                    {tvShow !== 0 && tvShow.map(tvShow.poster_path !== '' ? (m) =>
                        <Poster movie={m} key={m.id} />
                        : console.log("Waiting for a search"))}
                </div>
            </div>
            <div className="results-div">
                {people.length > 0
                    ? <h1 className="poster-section-label">People</h1>
                    : searchPeople === true 
                    ? <p className="no-search-results">No people matched the search term</p>
                    : console.log("No results for people")}
                <div className="movie-poster">
                    {people !== 0 && people.map(people.profile_path !== '' ? (m) =>
                        <Poster movie={m} key={m.id} />
                        : console.log("Waiting for a search"))}
                </div>
            </div>
        </>
    )
}

export default Homescreen
