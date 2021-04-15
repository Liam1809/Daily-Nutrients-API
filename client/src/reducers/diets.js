import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

export default (DietPost = [{}], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...DietPost, action.payload];
        case UPDATE:
            return DietPost.map((post) => post._id === action.payload._id ? action.payload : 'No diet post with that id to update');
        case DELETE:
            return DietPost.filter((post) => post._id !== action.payload);
        default:
            return DietPost;
    }
};