import axios from 'axios';

export function getGenres() {
    return axios.get('http://localhost:5000/api/genres')
}