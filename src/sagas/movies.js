import { put, take } from 'redux-saga/effects';
import { GET_MOVIES, setMovies, DELETE_MOVIE, getMovies as get, GET_TOP_MOVIES, setTopMovies, GET_LATEST_MOVIES, setLatestMovies } from '../actions';
import { adapter } from '../shared';

export function* getMovies() {
    while(true) {
        try {
            const { page } = yield take(GET_MOVIES);
            const res = yield adapter.get(`/api/movie?p=${page}`);
            const { content: movies, pageable, totalPages: numPages } = res.data;
            yield put(setMovies(movies, pageable.pageNumber, numPages));
        } catch (err) {

        }
    }
}

export function* getTopMovies() {
    while(true) {
        try {
            yield take(GET_TOP_MOVIES);
            const { data: movies } = yield adapter.get(`/api/movie/top`);
            yield put(setTopMovies(movies));
        } catch (err) {

        }
    }
}

export function* getLatestMovies() {
  while(true) {
      try {
          yield take(GET_LATEST_MOVIES);
          const { data: movies } = yield adapter.get(`/api/movie/latest`);
          yield put(setLatestMovies(movies));
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