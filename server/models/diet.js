import mongoose from 'mongoose';

const dietSchema = mongoose.Schema({
    ID: { type: String },
    creator: { type: String },
    Grains: {
        type: [{
            title: { type: String },
            calories: { type: Number },
            time: { type: String }
        }],
        default: []
    },
    Proteins: {
        type: [{
            title: { type: String },
            calories: { type: Number },
            time: { type: String }
        }],
        default: []
    },
    Vegetables: {
        type: [{
            title: { type: String },
            calories: { type: Number },
            time: { type: String }
        }],
        default: []
    },
    Fruits: {
        type: [{
            title: { type: String },
            calories: { type: Number },
            time: { type: String }
        }],
        default: []
    },
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('diet', dietSchema);