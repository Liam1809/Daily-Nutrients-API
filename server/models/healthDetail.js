import mongoose from 'mongoose';

const healthDetailSchema = mongoose.Schema({
    userID: { type: String },
    weight: { type: Number },
    height: { type: Number },
    sex: { type: String },
    age: { type: Number },
    bmr: { type: Number },
    bmi: { type: Number }
});

export default mongoose.model('healthDetail', healthDetailSchema);