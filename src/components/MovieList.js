import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button, Table } from 'shineout';

import { getMovies, deleteMovie } from '../actions';
import { StarRate } from './StarRate';




const MovieList = ({ movies, fetch, remove }) => {

    const columns = [
        { title: 'ID', render: 'id' },
        { title: 'Title', render: 'title' },
        { title: 'Release', render: 'releaseDate' },
        { title: 'Rating', render: d => <StarRate value={d.rating} disabled={true} /> },
        { title: 'Actions', render: d => <Button outline type="danger" onClick={() => remove(d.id)}>Delete</Button> },
    ];

    return (
        <div className="container">
            <Table 
                keygen="id"
                striped
                bordered
                width={800}
                columns={columns}
                data={movies}
            />
            <Button outline type="primary" onClick={fetch}>Reload</Button>
            <NavLink className="btn btn-success" to="/movies/add">+ Add Movie</NavLink>
        </div>
    );
};

export const MovieListComponent = connect(
    state => state,
    {
        fetch: getMovies,
        remove: deleteMovie
    }
)(MovieList);

