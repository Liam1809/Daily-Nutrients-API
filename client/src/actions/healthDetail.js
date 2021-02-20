import * as api from '../api/index.js';

// CREATE ACTION CREATORS
export const getHD = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHD();
        // dispatch action  to get data
        dispatch({ type: 'FETCH', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const getHD_ID = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchHD_ID(id);

        dispatch({ type: 'FETCH_BY_ID', payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

export const createHD = (HD) => async (dispatch) => {
    try {
        const { data } = await api.createHD(HD);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
