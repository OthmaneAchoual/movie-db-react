import { put, take } from 'redux-saga/effects';
import { GET_MOVIES, setMovies } from '../actions';
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