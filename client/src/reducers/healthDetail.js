export default (HealthData = [], action) => {
    switch (action.type) {
        case 'FETCH':
            return action.payload;
        case 'FETCH_BY_ID':
            return HealthData.map((HD) => HD._id === action.payload._id ? HD : 'No health data with that id');
        case 'CREATE':
            return [...HealthData, action.payload];
        case 'UPDATE':
            return HealthData;
        case 'DELETE':
            return HealthData;
        default:
            return HealthData;
    }
};