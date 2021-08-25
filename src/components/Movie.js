import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/detail/${id}`,
                    state: {
                        year: year,
                        title: title,
                        summary: summary,
                        poster: poster,
                        genres: genres
                    }   
                }}
            >
            
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_genres">
                        {genres.map((genre, idx) => (
                            <li className="genres_genres" key={idx}>{genre}</li>
                    ))}</p>
                    <h5 className="movie_summary">{summary.slice(0, 140)}...</h5>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;