import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { Table } from 'shineout';
import { getTopMovies } from '../actions';
import { StarRate } from './StarRate';

class TopRated extends Component {

    componentDidMount() {
        const { fetch } = this.props;
        fetch();
    }

    render() {

        const { top } = this.props;

        const columns = [
            { title: 'ID', render: 'id', width: 50, },
            { title: 'Title', render: 'title' },
            { title: 'Release', render: 'releaseDate' },
            { title: 'Rating', render: d => <StarRate value={d.rating} disabled={true} /> },
        ];

        return (
            <div className="container">
                <h2>Top Rated</h2>

                <Table
                    keygen="id"
                    striped
                    bordered
                    width={800}
                    columns={columns}
                    data={top}
                />

                <NavLink to="/movies" className="btn btn-primary">See All</NavLink>
            </div>
        );
    }
}

export const TopRatedComponent = connect(
    state => state.movies,
    {
        fetch: getTopMovies
    },
)(TopRated);