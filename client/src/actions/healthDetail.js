import * as api from '../api/index.js';
import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';
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
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY CREATED HEALTH FORM DATA"));
    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "NO FILLED DATA OR USER EXPIRED PLEASE LOGOUT AND SIGN IN AGAIN"));
    }
};

// update HD
export const updateHD = (id, HD) => async (dispatch) => {
    try {
        const { data } = await api.updateHD(id, HD);

        dispatch({ type: UPDATE, payload: data });
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY UPDATED"));
    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "NO HEALTH DATA OR USER EXPIRED PLEASE LOGOUT AND SIGN IN AGAIN"));
    }
};

// delete HD
export const deleteHD = (id) => async (dispatch) => {
    try {
        await api.deleteHD(id);

        dispatch({ type: DELETE, payload: id });
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY DELETED"));
    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "NO HEALTH DATA OR USER EXPIRED PLEASE LOGOUT AND SIGN IN AGAIN"));
    }
};