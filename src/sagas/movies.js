import { put, take } from 'redux-saga/effects';
import { GET_MOVIES, setMovies, DELETE_MOVIE, getMovies as get } from '../actions';
import { adapter } from '../shared';

export function* getMovies() {
    while(true) {
        try {
            yield take(GET_MOVIES);
            const { data: movies } = yield adapter.get(`/api/movie`);
            yield put(setMovies(movies));
        } catch (err) {

        }
    }
}

export function* deleteMovie() {
    while(true) {
        try {
            const { id } = yield take(DELETE_MOVIE);
            yield adapter.delete(`/api/admin/movie/${id}`);
            yield put(get());
        } catch (err) {

        }
    }
}