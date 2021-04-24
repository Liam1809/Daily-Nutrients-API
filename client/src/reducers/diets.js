import { FETCH1, CREATE1, UPDATE1, DELETE1, LIKE1 } from '../constants/constantTypes.js';

export default (DietPost = [], action) => {
    switch (action.type) {
        case FETCH1:
            return action.payload;
        case CREATE1:
            return [...DietPost, action.payload];
        case UPDATE1:
        case LIKE1:
            return DietPost.map((dietPost) => dietPost._id === action.payload._id ? action.payload : dietPost);
        case DELETE1:
            return DietPost.filter((dietPost) => dietPost._id !== action.payload);
        default:
            return DietPost;
    }
};