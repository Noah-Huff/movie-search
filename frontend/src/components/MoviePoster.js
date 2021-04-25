import React from 'react'
import Details from '../screens/Details';
import { Link } from 'react-router-dom';

const MoviePoster = ({ movie, gatherDetails }) => {

    let imageBaseURL = 'https://image.tmdb.org/t/p/w154';
    const goGetDetails = () => {
        console.log("GO Get Details", movie);
        gatherDetails(movie);
    }
    return (
        <>
            {
                movie.poster_path !== null &&
                <div className="poster-div">
                    <Link to={`/details/${movie.id}`}><p className="poster-title">{movie.title}</p></Link>
                    <img src={`${imageBaseURL}/${movie.poster_path}`} className="poster-img"></img>

                </div>
            }

        </>
    )
}

export default MoviePoster
