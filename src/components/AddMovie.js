import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { adapter } from '../shared';

export class AddMovie extends Component {

    state = {
        submitted: false
    };

    handleSubmit(e) {
        e.preventDefault();
        adapter.post('/api/admin/movie', { title: e.target.movieTitle.value }).then(
            res => this.setState({ submitted: true })
        ).catch(
            err => console.log(err)
        );
    }

    render() {
        if (this.state.submitted) {
            return (
                <Redirect to="/" />
            );
        }

        return (   
            <div className="container">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="movieTitle">Title</label>
                        <input type="text" className="form-control" id="movieTitle" placeholder="Movie Title" />
                        <small id="titleHelp" className="form-text text-muted">Input a movie title</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}