import { all } from 'redux-saga/effects';

import { 
    getMovies,
    getTopMovies,
    getLatestMovies,
    deleteMovie
} from '../sagas';

export function* rootSaga() {
    yield all([
        getMovies(),
        getTopMovies(),
        getLatestMovies(),
        deleteMovie()
    ]);
}
