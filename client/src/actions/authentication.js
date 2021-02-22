import * as api from '../api/index.js';
import { AUTH } from '../constants/constantTypes.js';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, payload: data });

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};
