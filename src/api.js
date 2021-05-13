import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.genderize.io?name=peter'
});

export default api;