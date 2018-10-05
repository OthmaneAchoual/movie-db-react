export const GET_MOVIES = 'GET_MOVIES';
export function getMovies() {
    return {
        type: GET_MOVIES
    };
}

export const SET_MOVIES = 'SET_MOVIES';
export function setMovies(movies) {
    return {
        type: SET_MOVIES,
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