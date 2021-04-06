import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

// send token back to server to verify authentication
API.interceptors.request.use((req) => {
    if (localStorage.getItem('userProfile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`;
    }

    return req;
});

// API REQUESTS to retrieve Health Details from server
export const fetchHD = () => API.get('/HD');
export const createHD = (newHD) => API.post('/HD', newHD);
export const updateHD = (id, updatedHD) => API.patch(`/HD/${id}`, updatedHD);
export const deleteHD = (id) => API.delete(`/HD/${id}`);

// API REQUESTS to retrieve Authentication from server
export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);




