import React from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions';

const MovieList = ({ movies }) => {

    return (
        <div>
            <ul>
                { movies.map(
                    (movie, i) => (
                        <li key={i}>{ movie.title }</li>
                    )
                ) }
            </ul>
        </div>
    );
};

export const MovieListComponent = connect(
    state => state,
    {
        fetch: getMovies
    }
)(MovieList);

