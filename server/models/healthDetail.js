import mongoose from 'mongoose';

const healthDetailSchema = mongoose.Schema({
    userId: { type: String },
    weight: { type: Number },
    age: { type: Number },
    bmr: { type: Number },
    bmi: { type: Number }
});

export default mongoose.model('healthDetail', healthDetailSchema);