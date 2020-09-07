import React from 'react';
import propTypes from 'prop-types';
import Nominee from './nominee';
import Banner from './banner';

import { connect } from 'react-redux';
import { delete_nomination_action } from '../../actions/index';

import '../../styles/movie.css';



class Nominations extends React.Component {
    handledelete = (movie) => {
        this.props.delete_nomination_action(movie);
    }

    noNomineesView() {
        return (
            <div>You have not nominated any movies </div>
        )

    }
    nomineesView() {
        const noms = this.props.nominations.map((n, index) =>
            <Nominee key={index}
                imdbID={n.imdbID}
                Title={n.Title}
                Year={n.Year}
                Poster={n.Poster}
                remove={this.handledelete}
            />
        )
        return (
            <div className="movie-list">{noms}</div>
        )
    }

    renderNominations() {
        return (
            <div className="container">
                <div id="banner">  <Banner /> </div>
                <h2>Nominations</h2>
                {this.props.nominations.length === 0 ? this.noNomineesView() : this.nomineesView()}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderNominations()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    nominations: state.nominations
})

const mapDispatchToProps = {
    delete_nomination_action
}


Nominations.propTypes = {
    nominations: propTypes.array.isRequired,
    delete_nomination_action: propTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominations); 