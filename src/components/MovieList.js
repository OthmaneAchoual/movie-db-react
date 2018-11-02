import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button, Table } from 'shineout';

import { getMovies, deleteMovie } from '../actions';
import { StarRate } from './StarRate';




const MovieList = ({ movies, fetch, remove }) => {

    const { data, currentPage, numPages} = movies;

    const columns = [
        { title: 'ID', render: 'id', width: 50 },
        { title: 'Title', render: 'title' },
        { title: 'Release', render: 'releaseDate' },
        { title: 'Rating', render: d => <StarRate value={d.rating} disabled={true} /> },
        { title: 'Actions', render: d => <Button outline type="danger" onClick={() => remove(d.id)}>Delete</Button> },
    ];

    const next = () => {
        fetch(currentPage + 1);
    };

    const prev = () => {
        fetch(currentPage - 1);
    };

    return (
        
        <div className="container">
            <Table 
                keygen="id"
                striped
                bordered
                width={800}
                columns={columns}
                data={data}
            />
            <Button outline type="primary" onClick={fetch}>Reload</Button>
            <p>Num Pages: {numPages}</p>
            <p>Current Page: {currentPage}</p>
            <Button outline type="secondary" onClick={prev} disabled={currentPage === 0}>Previous</Button>
            <Button outline type="secondary" onClick={next} disabled={currentPage === numPages - 1}>Next</Button>
            <NavLink className="btn btn-success" to="/movies/add">+ Add Movie</NavLink>
        </div>
    );
};

export const MovieListComponent = connect(
    state => state.movies,
    {
        fetch: getMovies,
        remove: deleteMovie
    }
)(MovieList);

