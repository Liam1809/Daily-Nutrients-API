export const getRecipesByIngredients = async (string) => {
    try {

        // console.log(string);
        const num = 2;
        const key1 = 'dbb27090b2a44e649df901b597c6348b';
        const key2 = '3386d0f70be84061a15ac04d84abd6ca';
        // store recipes id
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
            fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key2}&includeNutrition=true`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    if (data.healthScore >= 60) {
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
