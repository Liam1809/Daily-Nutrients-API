import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

export default (DietPost = [], action) => {
    switch (action.type) {
        case FETCH:
            return DietPost;
        case CREATE:
            return DietPost;
        case UPDATE:
            return DietPost;
        case DELETE:
            return DietPost;
        default:
            return DietPost;
    }
};