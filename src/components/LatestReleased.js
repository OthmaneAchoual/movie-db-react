import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'shineout';
import { getLatestMovies } from '../actions';
import { StarRate } from './StarRate';

class LatestReleased extends Component {

    componentDidMount() {
        const { fetch } = this.props;
        fetch();
    }

    render() {

        const { latest } = this.props;

        const columns = [
            { title: 'ID', render: 'id', width: 50, },
            { title: 'Title', render: 'title' },
            { title: 'Release Date', render: 'releaseDate' },
            { title: 'Rating', render: d => <StarRate value={d.rating} disabled={true} /> },
        ];

        return (
            <div className="container">
                <h2>Latest Released</h2>

                <Table
                    keygen="id"
                    striped
                    bordered
                    width={800}
                    columns={columns}
                    data={latest}
                />
            </div>
        );
    }
}

export const LatestReleasedComponent = connect(
    state => state.movies,
    {
        fetch: getLatestMovies
    },
)(LatestReleased);