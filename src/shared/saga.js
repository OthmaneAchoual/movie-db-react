import { all } from 'redux-saga/effects';

import { 
    getMovies
} from '../sagas';

export function* rootSaga() {
    yield all([
        getMovies()
    ]);
}
