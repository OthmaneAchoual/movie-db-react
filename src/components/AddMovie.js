import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { DatePicker } from 'shineout';

import { adapter } from '../shared';
import { StarRate } from './StarRate';

export class AddMovie extends Component {

    state = {
        title: '',
        rating: 0,
        releaseDate: {
            value: new Date(),
            format: 'yyyy-MM-dd',
        },
        submitted: false,
    };

    handleSubmit(e) {
        e.preventDefault();
        adapter.post('/api/admin/movie', { 
            title: this.state.title,
            rating: this.state.rating,
            releaseDate: this.state.releaseDate.value,
         }).then(
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
                        <input onInput={e => this.setState({title: e.target.value})} type="text" className="form-control" id="movieTitle" placeholder="Movie Title" />
                        <small id="titleHelp" className="form-text text-muted">Input a movie title</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="movieRelease">Release Date</label>
                        <DatePicker 
                            placeholder="Select date"
                            type="date"
                            format={this.state.releaseDate.format}
                            value={this.state.releaseDate.value}
                            onChange={value => this.setState(old => ({ releaseDate: { ...old.releaseDate, value }}))}
                        />
                    </div>
                    <StarRate value={this.state.rating} onChange={rating => this.setState({rating})} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}