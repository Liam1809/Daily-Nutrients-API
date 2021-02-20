export const Cal_bmi = (weight, height) => Math.round(weight / (height / 100));

export const Cal_bmr = (age, weight, height, sex) => {
    if (sex == 'male') {
        return Math.round(66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
        // return 66.47 + (13.75 * weight [kg]) + (5.003 * size [cm]) − (6.755 * age [years])
    } else {
        return Math.round(655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age));
    }
};