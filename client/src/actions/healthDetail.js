import * as api from '../api/index.js';
import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

// CREATE ACTION CREATORS

// get HD
export const getHD = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHD();
        // dispatch action  to get data
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// create HD
export const createHD = (HD) => async (dispatch) => {
    try {
        const { data } = await api.createHD(HD);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// update HD
export const updateHD = (id, HD) => async (dispatch) => {
    try {
        const { data } = await api.updateHD(id, HD);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// delete HD
export const deleteHD = (id) => async (dispatch) => {
    try {
        await api.deleteHD(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};