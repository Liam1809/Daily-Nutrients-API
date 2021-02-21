import axios from 'axios';

const url = 'http://localhost:4000/HD';

export const fetchHD = () => axios.get(url);
export const fetchHD_ID = (id) => axios.get(`${url}/${id}`);
export const createHD = (newHD) => axios.post(url, newHD);
export const updateHD = (id, updatedHD) => axios.patch(`${url}/${id}`, updatedHD);
export const deleteHD = (id) => axios.delete(`${url}/${id}`);