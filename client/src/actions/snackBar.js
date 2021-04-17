import { SET_SNACKBAR } from '../constants/constantTypes.js';

export const setSnackBar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
) => async (dispatch) => {

    const data = { snackbarOpen, snackbarType, snackbarMessage };

    try {
        dispatch({ type: SET_SNACKBAR, payload: data });
    } catch (error) {
        console.log(error);
    }
};
