import React from 'react';
import propTypes from 'prop-types';

const Movie = (props) => {
    const { imdbID, Title, Year, Poster, isNominated, add } = props;
    return (
        <div className="movie">
            <ul>
                <li className="movie-img"><img src={Poster} alt={Title} /></li>
                <li>Title: {Title}</li>
                <li>Year: {Year}</li>
                <button disabled={isNominated} onClick={() => add({ Title, Year, Poster, imdbID })}>NOMINATE</button>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    Title: propTypes.string.isRequired,
    Year: propTypes.string.isRequired,
    Poster: propTypes.string,
    isNominated: propTypes.bool.isRequired,
    add: propTypes.func.isRequired
}


export default Movie; 