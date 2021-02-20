export default (HealthData = [], action) => {
    switch (action.type) {
        case 'FETCH':
            return action.payload;
        case 'FETCH_BY_ID':
            return HealthData.map((HD) => HD._id === action.payload._id ? action.payload : 'No health data with that id to get');
        case 'CREATE':
            return [...HealthData, action.payload];
        case 'UPDATE':
            return HealthData.map((HD) => HD._id === action.payload._id ? action.payload : 'No health data that id to update');
        case 'DELETE':
            return HealthData;
        default:
            return HealthData;
    }
};