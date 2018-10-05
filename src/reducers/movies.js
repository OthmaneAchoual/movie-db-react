import { reduce } from '../shared';
import { SET_MOVIES } from '../actions';

const initialState = [];

function setMovies(state, action) {
    const { movies } = action;

    return movies;
}

export const movies = reduce(initialState, {
    [SET_MOVIES]: setMovies
});