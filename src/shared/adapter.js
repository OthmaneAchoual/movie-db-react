import axios from 'axios';

export const baseURL = 'http://localhost:8080';

export const adapter = axios.create({
    baseURL,
    // withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});