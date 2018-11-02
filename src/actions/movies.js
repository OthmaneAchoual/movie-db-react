export const GET_MOVIES = 'GET_MOVIES';
export function getMovies(page) {
    return {
        type: GET_MOVIES,
        page
    };
}

export const SET_MOVIES = 'SET_MOVIES';
export function setMovies(movies, currentPage, numPages) {
    return {
        type: SET_MOVIES,
        movies,
        currentPage,
        numPages
    };
}

export const GET_TOP_MOVIES = 'GET_TOP_MOVIES';
export function getTopMovies() {
    return {
        type: GET_TOP_MOVIES
    };
}

export const SET_TOP_MOVIES = 'SET_TOP_MOVIES';
export function setTopMovies(movies) {
    return {
        type: SET_TOP_MOVIES,
        movies
    };
}

export const DELETE_MOVIE = 'DELETE_MOVIE';
export function deleteMovie(id) {
    return {
        type: DELETE_MOVIE,
        id
    };
}

export const ADD_MOVIE = 'ADD_MOVIE';
export function addMovie(movie) {
    return {
        type: ADD_MOVIE,
        movie
    };
}