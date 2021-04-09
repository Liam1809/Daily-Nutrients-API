import { SET_SNACKBAR } from '../constants/constantTypes.js';

export const setSnackBar = (
    snackbarOpen,
    snackbarType = "success",
    snackbarMessage = ""
) => ({
    type: SET_SNACKBAR,
    snackbarOpen,
    snackbarType,
    snackbarMessage
});
