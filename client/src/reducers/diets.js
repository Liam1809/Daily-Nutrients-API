import { FETCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/constantTypes.js';

export default (DietPost = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...DietPost, action.payload];
        case UPDATE:
        case LIKE:
            return DietPost.map((dietPost) => dietPost._id === action.payload._id ? action.payload : dietPost);
        case DELETE:
            return DietPost.filter((dietPost) => dietPost._id !== action.payload);
        default:
            return DietPost;
    }
};