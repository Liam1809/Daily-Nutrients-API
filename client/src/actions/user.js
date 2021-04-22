import * as api from '../api/index.js';
import { FETCH, DELETE } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';

// get Users
export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUser();

        // dispatch action  to get data
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// delete User
export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch({ type: DELETE, payload: id });
        dispatch(setSnackBar(true, 'success', "SUCCESSFULLY DELETED"));
    } catch (error) {
        console.log(error.message);
    }
};
