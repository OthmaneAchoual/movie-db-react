import { all } from 'redux-saga/effects';

import { 
    getMovies,
    getTopMovies,
    deleteMovie
} from '../sagas';

export function* rootSaga() {
    yield all([
        getMovies(),
        getTopMovies(),
        deleteMovie()
    ]);
}
