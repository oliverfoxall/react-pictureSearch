import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID cac236439d1bf7a5b910705c1f9d3233dc073e4201e2be68cfcfedd57bd2440f'
    }
});