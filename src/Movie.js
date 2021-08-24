import React from 'react';
import PropTypes from "prop-types";
import './App.css';

function Movie({id, title,year,summary,poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, idx) => (
                        <li className="movie_genres" key={idx}>{genre}</li>
                ))}</ul>
                <h5 className="movie_summary">{summary}</h5>
            </div>
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