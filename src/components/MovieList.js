import React from 'react';
import { connect } from 'react-redux';

import { Button, Table } from 'shineout';

import { getMovies } from '../actions';


const columns = [
    { title: 'ID', render: 'id' },
    { title: 'Title', render: 'title' },
];

const MovieList = ({ movies, fetch }) => {

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
        fetch: getMovies
    }
)(MovieList);

