import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-bruno-backend.herokuapp.com',
})

export default api;