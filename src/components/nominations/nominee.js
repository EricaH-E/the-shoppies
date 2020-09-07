import React from 'react';
import propTypes from 'prop-types';

const Nominee = (props) => {
    const { Title, Year, Poster, remove, imdbID } = props;
    return (
        <div className="movie">
            <ul>
                <li className="movie-img"><img src={Poster} alt={Title} /></li>
                <li>Title: {Title}</li>
                <li>Year: {Year}</li>
                <li><button onClick={() => remove({ Title, Year, Poster, imdbID })}>REMOVE</button></li>
            </ul>

        </div>
    );
}

Nominee.propTypes = {
    Title: propTypes.string.isRequired,
    Year: propTypes.string.isRequired,
    Poster: propTypes.string,
    remove: propTypes.func.isRequired,
    imdbID: propTypes.string.isRequired
}

export default Nominee; 