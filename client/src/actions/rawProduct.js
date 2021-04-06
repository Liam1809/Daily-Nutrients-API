import { API } from '../api/rawProductAPI.js';


export const getItems = async () => {
    try {
        const params = { query: "watermelon, Tuna" };
        const result = await API.get('/search/instant?', { params });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export const getNutrients = async (string) => {
    try {
        const params = { query: string };
        const result2 = await API.post('/natural/nutrients', params);

        let newArr = result2.data;

        for (let i = 0; i < newArr['foods'].length; i++) {
            console.log(newArr['foods'][i]);
        }


    } catch (error) {
        console.log(error)
    }
}
