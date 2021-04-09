import * as api from '../api/index.js';
import { AUTH } from '../constants/constantTypes.js';
import { setSnackBar } from './snackBar.js';
// CREATE ACTION CREATORS

// Sign In action
export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        // dispatch AUTH type action with data as payload
        dispatch({ type: AUTH, payload: data });
        // push back from current path to /dashboard
        history.push('/dashboard');
        // console.log(data);
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY SIGNED IN"));

    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "USER OR PASSWORD NOT CORRECT"));
    }
};

// Sign Up action
export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, payload: data });
        // push back from current path to /authentication
        history.push('/authentication');
        // console.log(data);
        dispatch(setSnackBar(true, "success", "SUCCESSFULLY SIGNED UP"));
    } catch (error) {
        console.log(error.message);
        dispatch(setSnackBar(true, "error", "USER ALLREADY EXIST, PLEASE SIGN IN OR SIGN UP ANOTHER ACCOUNT"));
    }
};
