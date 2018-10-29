import axios from 'axios';

export const baseURL = 'http://localhost:9090';

export const adapter = axios.create({
    baseURL,
    // withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});