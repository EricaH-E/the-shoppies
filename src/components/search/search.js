import React from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import MovieResults from './movie';
import Nominations from './nominations'

import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux';
import { add_nomination_action } from '../../actions/index';
import { filterSearchResults, update_results } from './helper';


import '../../styles/movie.css';
import '../../styles/search.css';


dotenv.config();

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: ''
        }
    }

    handleQueryChange = async (e) => {
        e.preventDefault();
        this.setState({ query: e.target.value });

        const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${this.state.query}&type=movie`
        try {
            const data = await axios.get(url);
            const results = filterSearchResults(data.data.Search, this.props.nominations);
            this.setState({ data: results });

        } catch (error) {
            console.log(error);
        }


    }


    handleNominate = (movie) => {
        if (this.props.nominations.length < 5) {
            this.props.add_nomination_action(movie);
            movie.isNominated = true;
            this.setState({ data: update_results(movie, this.state.data) });
        }
    }

    searchBar() {
        return (
            <div className="container">
                <h2>Search</h2>
                <div id="search-bar">
                    <span><BsSearch /></span>
                    <input className="space" type="text" name="query" onChange={this.handleQueryChange} />
                </div>
            </div>
        )
    }
    noResultsView() {
        return (
            <div className="container">
                <h2>Movies Searched </h2>
                <p>No movies to display </p>
            </div>
        )
    }

    resultsView() {
        const results = this.state.data.map((movie, index) =>
            <MovieResults key={index}
                imdbID={movie.imdbID}
                Title={movie.Title}
                Year={movie.Year}
                Poster={movie.Poster}
                isNominated={movie.isNominated}
                add={this.handleNominate}
            />
        )
        return (
            <div className="container">
                <h2>Results</h2>
                <div className="movie-list"> {results}</div>
            </div>
        )
    }
    searchResult() {
        return (
            <div>{this.state.data.length === 0 ? this.noResultsView() : this.resultsView()}</div>

        )
    }
    render() {
        return (
            <div className="main">
                <div className="search-bar"> {this.searchBar()} </div>
                <div className="search"> {this.searchResult()} </div>
                <div className="nominations"> <Nominations /> </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    nominations: state.nominations,
    search: state.search
});

const mapDispatchToProps = {
    add_nomination_action,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
