import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

export default (HealthData = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...HealthData, action.payload];
        case UPDATE:
            return HealthData.map((HD) => HD._id === action.payload._id ? action.payload : 'No health data with that id to update');
        case DELETE:
            return HealthData.filter((HD) => HD._id !== action.payload);
        default:
            return HealthData;
    }
};