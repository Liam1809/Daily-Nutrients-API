import { API } from '../api/rawProductAPI.js';

export const getNutrients = async (foodGroup, string) => {
    try {
        const params = { query: string.replace(",", ", ").replace(" ", ", ") };
        const result = await API.post('/natural/nutrients', params);

        let newArr = result.data;
        console.log(result);
        let arr = [];
        // console.log(foodGroup);
        for (let i = 0; i < newArr['foods'].length; i++) {
            // console.log(newArr['foods'][i]);
            if (foodGroup == newArr['foods'][i].tags.food_group) {
                let obj = {};
                obj['id'] = newArr['foods'][i].tags.tag_id;
                obj['name'] = newArr['foods'][i].food_name;
                obj['imgURL'] = newArr['foods'][i].photo.thumb;
                // calories
                obj['calories'] = newArr['foods'][i].nf_calories;
                // 5 nutrients
                obj['fat'] = newArr['foods'][i].nf_total_fat;
                obj['carbs'] = newArr['foods'][i].nf_total_carbohydrate;
                obj['proteins'] = newArr['foods'][i].nf_protein;
                obj['cholesterol'] = newArr['foods'][i].nf_cholesterol;
                obj['sugars'] = newArr['foods'][i].nf_sugars;
                // grams serving quantity
                obj['serving_qty'] = newArr['foods'][i].serving_qty;
                obj['grams'] = newArr['foods'][i].serving_weight_grams;
                arr.push(obj)
            }
        }
        console.log(arr);
        return arr;
    } catch (error) {
        console.log(error);
    }
}
