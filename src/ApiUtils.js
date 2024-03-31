import axios from "axios";
const { VITE_TOKEN_CYBERSOFT } = import.meta.env;
const { VITE_SOME_KEY } = import.meta.env;

const api = axios.create({
    baseURL: VITE_SOME_KEY,
})

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER_LOGIN")).token : "";

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
        TokenCybersoft: VITE_TOKEN_CYBERSOFT
        ,
        token: JSON?.parse(localStorage.getItem("USER_LOGIN"))?.token
    };
    return config;
});

export default api;
