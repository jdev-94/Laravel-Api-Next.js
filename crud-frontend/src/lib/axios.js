import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8000/api', // La URL de tu artisan serve
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

export default client;