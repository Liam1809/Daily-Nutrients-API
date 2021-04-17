import healthDetail from '../models/healthDetail.js';
import mongoose from 'mongoose';
import { Cal_bmi, Cal_bmr } from '../Functions/fuctions.js';

export const getHealthDetails = async (req, res) => {
    try {
        const HDs = await healthDetail.find();

        res.status(200).json(HDs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createHealthDetail = async (req, res) => {
    const { age, sex, weight, height } = req.body;

    const newHD = new healthDetail({ age, sex, weight, height, userID: req.userId });

    // Calculate BMI & BMR
    newHD.bmi = Cal_bmi(newHD.weight, newHD.height);
    newHD.bmr = Cal_bmr(newHD.age, newHD.weight, newHD.height, newHD.sex);
    // console.log(newHD);

    try {
        await newHD.save();

        res.status(201).json(newHD);
        console.log(" This one comes from create health details \n", newHD);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateHealthDetail = async (req, res) => {
    // extract id and health Details
    const { id } = req.params;
    const { age, sex, weight, height } = req.body;

    // check if _id invalid of mongoDB _id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log('No Health Data found with that id');
    }

    const updatedHD = { age: Number(age), sex, weight: Number(weight), height: Number(height), userID: req.userId, _id: id };
    // console.log(updatedHD);

    // Calculate BMI & BMR
    updatedHD.bmi = Number(Cal_bmi(updatedHD.weight, updatedHD.height));
    updatedHD.bmr = Number(Cal_bmr(updatedHD.age, updatedHD.weight, updatedHD.height, updatedHD.sex));

    try {
        await healthDetail.findByIdAndUpdate(id, updatedHD);
        console.log(" This one comes from update health details \n", updatedHD);
        res.json(updatedHD);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export const deleteHealthDetail = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log('No Health Data found with that id');
    }

    try {
        await healthDetail.findByIdAndRemove(id);

        res.json({ message: 'Health Details by that id is successfully deleted' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};