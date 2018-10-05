import { all } from 'redux-saga/effects';

import { 
    getMovies,
    deleteMovie
} from '../sagas';

export function* rootSaga() {
    yield all([
        getMovies(),
        deleteMovie()
    ]);
}
