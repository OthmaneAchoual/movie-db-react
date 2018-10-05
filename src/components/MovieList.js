import React from 'react';
import { connect } from 'react-redux';

import { Button, Table } from 'shineout';

import { getMovies, deleteMovie } from '../actions';




const MovieList = ({ movies, fetch, remove }) => {

    const columns = [
        { title: 'ID', render: 'id' },
        { title: 'Title', render: 'title' },
        { title: 'Actions', render: d => <Button outline type="danger" onClick={() => remove(d.id)}>Delete</Button>}
    ];

    return (
        <div>
            <Table 
                keygen="id"
                width={800}
                columns={columns}
                data={movies}
            />
            <Button outline type="primary" onClick={fetch}>Reload</Button>
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

