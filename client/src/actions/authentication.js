import * as api from '../api/index.js';
import { AUTH, LOGOUT } from '../constants/constantTypes.js';

export const signIn = (formData, history) => async (dispatch) => {
    try {

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};

export const signUp = (formData, history) => async (dispatch) => {
    try {
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};
