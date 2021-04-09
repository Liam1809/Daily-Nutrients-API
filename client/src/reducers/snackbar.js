import { SET_SNACKBAR } from '../constants/constantTypes.js';

const initialState = {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SNACKBAR:
            const { snackbarOpen, snackbarType, snackbarMessage } = action;
            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage
            };
        default:
            return state;
    }
};
