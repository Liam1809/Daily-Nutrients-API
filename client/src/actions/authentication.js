import * as api from '../api/index.js';
import { AUTH } from '../constants/constantTypes.js';

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

    } catch (error) {
        console.log(error.message);
    }
};

// Sign Up action
export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, payload: data });
        // clear localStorage
        localStorage.clear();
        // push back from current path to /authentication
        history.push('/authentication');
        // console.log(data);
    } catch (error) {
        console.log(error.message);
    }
};
