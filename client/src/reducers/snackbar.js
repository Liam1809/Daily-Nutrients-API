import { SET_SNACKBAR } from '../constants/constantTypes.js';

const initial = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: ""
};

export default (snackbar = initial, action) => {
    switch (action.type) {
        case SET_SNACKBAR:
            const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
            return { ...snackbar, snackbarOpen, snackbarType, snackbarMessage };
        default:
            return snackbar;
    }
};
