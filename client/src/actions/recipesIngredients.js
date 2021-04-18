export const getRecipesByIngredients = async (string) => {
    try {

        // console.log(string);
        const num = 5;
        const key1 = 'dbb27090b2a44e649df901b597c6348b';
        const key2 = '3386d0f70be84061a15ac04d84abd6ca';
        const key3 = '2d84be38654443e083c10f2ca203f8a6';
        const key4 = 'c50d4c932c00415d837644e1d4286ece';
        const key5 = '9724a1d8bc704ff29d5cdcb1368407a8';
        const key6 = 'e7a6a7c40d424f169b86ba76449b63d1';
        const key7 = 'e058e66b3d694f6a9a32763c369e37d7';

        // store recipes ids
        let arr = [];
        // store recipes nutrients data
        let arr1 = [];
        await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key1}&ingredients=${string}&number=${num}`)
            .then((response) => response.json())
            .then((data) => {
                data.map((object) => arr.push(object.id));
            })
            .catch(() => {
                console.log("error");
            });

        // console.log(arr);
        arr.map((id) => {
            fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key1}&includeNutrition=true`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    if (data.healthScore >= 0) {
                        let obj = {};
                        // info
                        obj['id'] = data.id;
                        obj['imgURL'] = data.image;
                        obj['title'] = data.title;
                        obj['summary'] = data.summary;
                        // healthy score
                        obj['healthScore'] = data.healthScore;
                        // servings
                        obj['servings'] = data.servings;
                        // calories
                        obj['calories'] = data.nutrition.nutrients[0].amount;
                        // 5 nutrients
                        obj['fat'] = data.nutrition.nutrients[1].amount;
                        obj['carbs'] = data.nutrition.nutrients[3].amount;
                        obj['sugar'] = data.nutrition.nutrients[5].amount;
                        obj['cholesterol'] = data.nutrition.nutrients[6].amount;
                        obj['proteins'] = data.nutrition.nutrients[8].amount;
                        arr1.push(obj);
                    }
                })
                .catch(() => {
                    console.log("error");
                });
        });
        console.log(arr1);
        return arr1;
    } catch (error) {
        console.log(error);
    }
};

export const getRecipesSearch = async (object) => {
    try {
        // console.log(string);
        let string = object.search.replace(", ", ",+").replace(" ", "%20");
        let string1 = object.typeDish.replace(", ", ",+").replace(" ", "%20")
        console.log(string);
        if (object.min == "") object.min = 0;
        if (object.max == "") object.max = 1000;
        const num = 3;
        const key1 = 'dbb27090b2a44e649df901b597c6348b';
        const key2 = '3386d0f70be84061a15ac04d84abd6ca';
        const key3 = '2d84be38654443e083c10f2ca203f8a6';
        const key4 = 'c50d4c932c00415d837644e1d4286ece';
        const key5 = '9724a1d8bc704ff29d5cdcb1368407a8';
        const key6 = 'e7a6a7c40d424f169b86ba76449b63d1';
        const key7 = 'e058e66b3d694f6a9a32763c369e37d7';

        // store recipes nutrients data
        let arr = [];

        await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key5}&query=${string}&number=${num}&cuisine=${object.region}&type=${string1}&minCalories=${object.min}&maxCalories=${object.max}&addRecipeNutrition=true`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                data.results.map((result) => {
                    // console.log(result));
                    let obj = {};

                    obj['id'] = result.id;
                    obj['imgURL'] = result.image;
                    obj['title'] = result.title;
                    obj['dishTypes'] = result.dishTypes; //array
                    obj['cuisines'] = result.cuisines; // array
                    obj['serving'] = result.servings;
                    obj['readyInMinutes'] = result.readyInMinutes;
                    obj['cookInstruction'] = result.analyzedInstructions[0].steps; // array
                    // 5 nutrients
                    obj['calories'] = result.nutrition.nutrients[0].amount;
                    obj['fat'] = result.nutrition.nutrients[1].amount;
                    obj['carbs'] = result.nutrition.nutrients[3].amount;
                    obj['sugar'] = result.nutrition.nutrients[5].amount;
                    obj['cholesterol'] = result.nutrition.nutrients[6].amount;
                    obj['proteins'] = result.nutrition.nutrients[8].amount;
                    arr.push(obj);
                })
            })
            .catch(() => {
                console.log("error");
            });
        console.log(arr);
        return arr;

    } catch (error) {
        console.log(error);
    }
};