import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const fetchHD = () => API.get('/HD');
export const fetchHD_ID = (id) => API.get(`/HD/${id}`);
export const createHD = (newHD) => API.post('/HD', newHD);
export const updateHD = (id, updatedHD) => API.patch(`/HD/${id}`, updatedHD);
export const deleteHD = (id) => API.delete(`/HD/${id}`);

export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);