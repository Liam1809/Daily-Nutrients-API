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

export const getHealthDetailById = async (req, res) => {
    const { id } = req.params;

    try {
        const HD = await healthDetail.findById(id);
        res.status(200).json(HD);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createHealthDetail = async (req, res) => {
    const { name, age, sex, weight, height } = req.body;

    const newHD = new healthDetail({ name, age, sex, weight, height });

    // console.log(newHD);
    // Calculate BMI & BMR
    newHD.bmi = Cal_bmi(newHD.weight, newHD.height);
    newHD.bmr = Cal_bmr(newHD.age, newHD.weight, newHD.height, newHD.sex);

    try {
        await newHD.save();

        res.status(201).json(newHD);
        // console.log(newHD);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateHealthDetail = async (req, res) => {
    // extract id and health Details
    const { id } = req.params;
    const { name, age, sex, weight, height } = req.body;

    // check if _id invalid of mongoDB _id

    if (mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).send('No Health Data found with that id');
    }
    const updatedHD = { name, age, sex, weight, height, bmi, bmr, _id: id };
    console.log(updatedHD);

    // Calculate BMI & BMR
    updatedHD.bmi = Cal_bmi(updatedHD.weight, updatedHD.height);
    updatedHD.bmr = Cal_bmr(updatedHD.age, updatedHD.weight, updatedHD.height, updatedHD.sex);

    console.log(updatedHD);

    await healthDetail.findByIdAndUpdate(id, updatedHD, { new: true });

    res.json(updatedHD);
};