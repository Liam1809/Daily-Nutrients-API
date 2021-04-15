import * as api from '../api/index.js';
import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

// get Diet Posts
export const getDietPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDietPost();

        // dispatch action  to get data
        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// create Diet Post
export const createDietPost = (dietPost) => async (dispatch) => {
    try {
        const { data } = await api.createDietPost(dietPost);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// update Diet Post
export const updateDietPost = (id, dietPost) => async (dispatch) => {
    try {
        const { data } = await api.updateDietPost(id, dietPost);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// like Diet Post
export const likeDietPost = () => async (dispatch) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
};

// delete Diet Post
export const deleteDietPost = (id) => async (dispatch) => {
    try {
        await api.deleteDietPost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};