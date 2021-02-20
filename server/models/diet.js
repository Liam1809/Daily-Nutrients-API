import mongoose from 'mongoose';

const dietSchema = mongoose.Schema({
    userId: { type: String },
    morningDiet: {
        Grains: {
            type: [String],
            default: []
        },
        Proteins: {
            type: [String],
            default: []
        },
        Vegetables: {
            type: [String],
            default: []
        },
        Fruits: {
            type: [String],
            default: []
        },
    },
    lunchDiet: {
        Grains: {
            type: [String],
            default: []
        },
        Proteins: {
            type: [String],
            default: []
        },
        Vegetables: {
            type: [String],
            default: []
        },
        Fruits: {
            type: [String],
            default: []
        },
    },
    dinnerDiet: {
        Grains: {
            type: [String],
            default: []
        },
        Proteins: {
            type: [String],
            default: []
        },
        Vegetables: {
            type: [String],
            default: []
        },
        Fruits: {
            type: [String],
            default: []
        },
    },
});

export default mongoose.model('diet', dietSchema);