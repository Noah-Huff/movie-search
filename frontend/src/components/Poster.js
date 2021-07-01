import React from 'react'
import Details from '../screens/Details';
import { Link } from 'react-router-dom';

const Poster = ({ movie }) => {

    let imageBaseURL = 'https://image.tmdb.org/t/p/w154';
    let poster = undefined;
    if (movie.poster_path != undefined)
        poster = `${imageBaseURL}/${movie.poster_path}`;
    else if (movie.profile_path != undefined)
        poster = `${imageBaseURL}${movie.profile_path}`;
    return (
        <section className="mp-section">
            {
                poster !== undefined &&
                <div className="poster-div">
                    <Link className="link-no-underline" to={`/details/${movie.id}`}><p className="poster-title">{movie.title ? movie.title : movie.name}</p></Link>
                    <img src={poster} className="poster-img"></img>

                </div>
            }

        </section>
    )
}

export default Poster
