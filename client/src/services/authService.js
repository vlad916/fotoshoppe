import jwtDecode from "jwt-decode";
import axios from 'axios';

const tokenKey = "token";

// sends a request to the server to get the token and store it in local storage
export async function login(email, password) {
    const { data: jwt } = await axios.post('http://localhost:5000/api/auth', { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

// removes the token from the local storage
export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};
