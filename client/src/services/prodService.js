import axios from 'axios';

export function getProducts() {
    return axios.get('http://localhost:5000/api/products')
}