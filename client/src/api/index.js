import axios from 'axios';

const url = 'http://localhost:4000/HD';

export const fetchHD = () => axios.get(url);