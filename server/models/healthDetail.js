import mongoose from 'mongoose';

const healthDetailSchema = mongoose.Schema({
    name: { type: String },
    weight: { type: Number },
    height: { type: Number },
    sex: { type: String },
    age: { type: Number },
    bmr: { type: Number },
    bmi: { type: Number }
    // bmr va bmi tinh trong controller 
});

export default mongoose.model('healthDetail', healthDetailSchema);