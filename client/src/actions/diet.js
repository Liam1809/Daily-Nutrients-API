import * as api from '../api/index.js';
import { FETCH, CREATE, UPDATE, DELETE } from '../constants/constantTypes.js';

// get Diet Posts
export const getDiet = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDiet();

        dispatch({ type: FETCH, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// create Diet Post
export const createDiet = (diet) => async (dispatch) => {
    try {
        const { data } = await api.createDiet(diet);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// update Diet Post
export const updateDiet = (id, diet) => async (dispatch) => {
    try {
        const { data } = await api.updateDiet(id, diet);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// like Diet Post
export const likeDiet = () => async (dispatch) => {
    try {

    } catch (error) {
        console.log(error.message);
    }
};

// delete Diet Post
export const deleteDiet = (id) => async (dispatch) => {
    try {
        await api.deleteDiet(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};