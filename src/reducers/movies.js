import { reduce } from '../shared';
import { SET_MOVIES, SET_TOP_MOVIES, SET_LATEST_MOVIES } from '../actions';

const initialState = {
    movies: {
        data: [],
        currentPage: 0,
        numPages: 0 
    },
    top: [],
    latest: [],
};

function setMovies(state, action) {
    const { movies, currentPage, numPages } = action;

    return {
        ...state,
        movies: {
            data: movies,
            currentPage,
            numPages,
        },
    };
}

function setTopMovies(state, action) {
    const { movies: top } = action;

    return {
        ...state,
        top,
    };
}

function setLatestMovies(state, action) {
  const { movies: latest } = action;

  return {
      ...state,
      latest,
  };
}

export const movies = reduce(initialState, {
    [SET_MOVIES]: setMovies,
    [SET_TOP_MOVIES]: setTopMovies,
    [SET_LATEST_MOVIES]: setLatestMovies,
});