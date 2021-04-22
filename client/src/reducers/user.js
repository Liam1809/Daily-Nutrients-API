import { FETCH, DELETE } from '../constants/constantTypes.js';

export default (USER = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case DELETE:
            return USER.filter((USER) => USER._id !== action.payload);
        default:
            return USER;
    }
};