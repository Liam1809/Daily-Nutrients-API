import { FETCH2, DELETE2 } from '../constants/constantTypes.js';

export default (USER = [], action) => {
    switch (action.type) {
        case FETCH2:
            return action.payload;
        case DELETE2:
            return USER.filter((USER) => USER._id !== action.payload);
        default:
            return USER;
    }
};