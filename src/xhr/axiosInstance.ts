import axios from 'axios';

export const DataApi = axios.create({
    baseURL: 'https://swapi.info/api',
});
